import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, 'dist');
const PORT = 8765;

const ROUTES = [
  '/',
  '/soluciones',
  '/catalogo',
  '/industrias',
  '/industrias/ecommerce',
  '/industrias/logistica-3pl',
  '/industrias/manufactura',
  '/industrias/alimentos-bebidas',
  '/industrias/farmaceutica',
  '/industrias/mineria-oil-gas',
  '/industrias/cadena-frio',
  '/beneficios-fiscales',
  '/como-trabajamos',
  '/nosotros',
  '/contacto',
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.mp4':  'video/mp4',
  '.json': 'application/json',
  '.woff2':'font/woff2',
  '.woff': 'font/woff',
  '.ttf':  'font/ttf',
  '.xml':  'application/xml',
  '.txt':  'text/plain',
  '.pdf':  'application/pdf',
};

function startServer() {
  return new Promise(resolve => {
    const server = http.createServer((req, res) => {
      let urlPath = req.url.split('?')[0];
      let filePath = path.join(DIST, urlPath);

      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }
      if (!fs.existsSync(filePath)) {
        filePath = path.join(DIST, 'index.html');
      }

      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    });

    server.listen(PORT, () => {
      console.log(`[prerender] Servidor estático en :${PORT}`);
      resolve(server);
    });
  });
}

async function getChromiumConfig() {
  const isCI = process.env.VERCEL || process.env.CI || process.env.AWS_LAMBDA_FUNCTION_NAME;

  if (isCI) {
    console.log('[prerender] Entorno serverless detectado, usando @sparticuz/chromium...');
    const chromium = (await import('@sparticuz/chromium')).default;
    return {
      executablePath: await chromium.executablePath(),
      args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox'],
    };
  }

  // Local — usar Chrome instalado según plataforma
  const chromePaths = {
    win32:  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    linux:  '/usr/bin/google-chrome',
  };

  return {
    executablePath: chromePaths[process.platform] || chromePaths.linux,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  };
}

async function main() {
  let puppeteerCore;
  try {
    puppeteerCore = (await import('puppeteer-core')).default;
  } catch {
    console.log('[prerender] puppeteer-core no instalado — skipping (Vercel lo instala)');
    return;
  }

  const server = await startServer();
  const { executablePath, args } = await getChromiumConfig();

  const browser = await puppeteerCore.launch({
    executablePath,
    args,
    headless: true,
    defaultViewport: { width: 1280, height: 800 },
  });

  console.log('[prerender] ✅ Chromium lanzado');

  let ok = 0;
  let errors = 0;

  for (const route of ROUTES) {
    const page = await browser.newPage();

    try {
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'domcontentloaded',
        timeout: 30000,
      });

      // Esperar a que React renderice contenido
      await page.waitForSelector('#root > *', { timeout: 10000 }).catch(() => {});
      await new Promise(r => setTimeout(r, 800));

      const html = await page.content();

      // Guardar como dist/ruta.html (NO dist/ruta/index.html) — cleanUrls en vercel.json lo sirve
      let outPath;
      if (route === '/') {
        outPath = path.join(DIST, 'index.html');
      } else {
        outPath = path.join(DIST, route.slice(1).replace(/\//g, path.sep) + '.html');
      }

      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html, 'utf-8');
      console.log(`[prerender] ✅ ${route}`);
      ok++;
    } catch (err) {
      console.error(`[prerender] ❌ ${route} — ${err.message}`);
      errors++;
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();

  console.log(`[prerender] Listo. ${ok} OK / ${errors} errores.`);
  if (errors > 0) process.exit(1);
}

main().catch(err => {
  console.error('[prerender] Error fatal:', err.message);
  process.exit(1);
});
