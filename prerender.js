import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'fs';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';
import mime from 'mime-types';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, 'dist');
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

function startStaticServer() {
  return new Promise((resolve, reject) => {
    const server = createServer((req, res) => {
      const urlPath = req.url.split('?')[0];
      let filePath = join(DIST, urlPath);

      if (existsSync(filePath) && statSync(filePath).isDirectory()) {
        filePath = join(filePath, 'index.html');
      }
      if (!existsSync(filePath)) {
        filePath = join(DIST, 'index.html');
      }

      const contentType = mime.lookup(filePath) || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(readFileSync(filePath));
    });

    server.listen(PORT, () => {
      console.log(`[prerender] Servidor estático en http://localhost:${PORT}`);
      resolve(server);
    });

    server.on('error', reject);
  });
}

async function getBrowserConfig() {
  const isServerless = process.env.VERCEL === '1' || process.env.CI === 'true';

  if (isServerless) {
    console.log('[prerender] Entorno serverless detectado — usando @sparticuz/chromium');
    const executablePath = await chromium.executablePath();
    console.log(`[prerender] executablePath: ${executablePath}`);
    return {
      executablePath,
      args: chromium.args,
      headless: chromium.headless,
      defaultViewport: chromium.defaultViewport,
    };
  }

  const localPaths = {
    win32:  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    linux:  '/usr/bin/google-chrome-stable',
  };
  const executablePath = localPaths[process.platform] ?? localPaths.linux;
  console.log(`[prerender] Chrome local: ${executablePath}`);
  return {
    executablePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    headless: true,
    defaultViewport: { width: 1280, height: 800 },
  };
}

async function main() {
  const server = await startStaticServer();
  const config = await getBrowserConfig();

  const browser = await puppeteer.launch(config);
  console.log('[prerender] ✅ Chromium lanzado');

  let ok = 0;
  let errors = 0;

  for (const route of ROUTES) {
    const page = await browser.newPage();
    try {
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });

      const html = await page.content();

      const outPath = route === '/'
        ? join(DIST, 'index.html')
        : join(DIST, route.slice(1).replace(/\//g, '/') + '.html');

      const outDir = dirname(outPath);
      if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
      writeFileSync(outPath, html, 'utf-8');

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

  console.log(`\n[prerender] Listo. ${ok} OK / ${errors} errores.`);
  if (errors > 0) process.exit(1);
}

main().catch(err => {
  console.error('[prerender] Error fatal:', err.message);
  process.exit(1);
});
