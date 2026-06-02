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
  '.woff2': 'font/woff2',
  '.woff':  'font/woff',
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
      console.log(`[prerender] Servidor en :${PORT}`);
      resolve(server);
    });
  });
}

async function getLaunchOptions() {
  const isCI = !!(process.env.VERCEL || process.env.CI);
  console.log(`[prerender] Entorno: ${isCI ? 'CI/Vercel' : 'local'} | platform: ${process.platform}`);
  console.log(`[prerender] VERCEL=${process.env.VERCEL} CI=${process.env.CI}`);

  const BASE_ARGS = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-gpu',
    '--no-first-run',
    '--no-zygote',
    '--single-process',
  ];

  if (isCI) {
    // En Vercel: usar @sparticuz/chromium
    const chromium = (await import('@sparticuz/chromium')).default;
    const executablePath = await chromium.executablePath();
    console.log(`[prerender] executablePath (sparticuz): ${executablePath}`);
    console.log(`[prerender] existe: ${fs.existsSync(executablePath)}`);
    return {
      executablePath,
      args: [...chromium.args, ...BASE_ARGS],
      headless: chromium.headless,
      defaultViewport: { width: 1280, height: 800 },
    };
  }

  // Local: usar Chrome del sistema
  const localPaths = {
    win32:  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    linux:  '/usr/bin/google-chrome-stable',
  };
  const executablePath = localPaths[process.platform] ?? localPaths.linux;
  console.log(`[prerender] executablePath (local): ${executablePath}`);
  return { executablePath, args: BASE_ARGS, headless: true, defaultViewport: { width: 1280, height: 800 } };
}

async function main() {
  // Importar puppeteer-core dinámicamente para fallar graciosamente si no está
  let puppeteer;
  try {
    puppeteer = (await import('puppeteer-core')).default;
    console.log('[prerender] puppeteer-core importado OK');
  } catch (e) {
    console.warn('[prerender] puppeteer-core no disponible — prerender omitido');
    console.warn('[prerender] Error:', e.message);
    return;
  }

  const server = await startServer();

  let launchOpts;
  try {
    launchOpts = await getLaunchOptions();
  } catch (e) {
    console.error('[prerender] Error obteniendo configuración de Chromium:', e.message);
    server.close();
    process.exit(1);
  }

  let browser;
  try {
    browser = await puppeteer.launch(launchOpts);
    console.log('[prerender] ✅ Chromium lanzado');
  } catch (e) {
    console.error('[prerender] ❌ No se pudo lanzar Chromium:', e.message);
    server.close();
    process.exit(1);
  }

  let ok = 0;
  let errors = 0;

  for (const route of ROUTES) {
    const page = await browser.newPage();
    try {
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'domcontentloaded',
        timeout: 30000,
      });
      await page.waitForSelector('#root > *', { timeout: 10000 }).catch(() => {});
      await new Promise(r => setTimeout(r, 800));

      const html = await page.content();

      const outPath = route === '/'
        ? path.join(DIST, 'index.html')
        : path.join(DIST, route.slice(1).replace(/\//g, path.sep) + '.html');

      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html, 'utf-8');
      console.log(`[prerender] ✅ ${route} → ${path.relative(DIST, outPath)}`);
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
  console.log(`\n[prerender] Resultado: ${ok} OK / ${errors} errores`);
  if (errors > 0) process.exit(1);
}

main().catch(err => {
  console.error('[prerender] Error fatal:', err.message);
  process.exit(1);
});
