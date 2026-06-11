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
  '/catalogo/asrs',
  '/catalogo/robots-manipulacion',
  '/catalogo/almacenamiento-vertical',
  '/catalogo/equipo-transporte',
  '/catalogo/software',
  '/industrias',
  '/industrias/e-commerce-retail',
  '/industrias/logistica-3pl',
  '/industrias/manufactura',
  '/industrias/alimentos-bebidas',
  '/industrias/farmaceutica',
  '/industrias/mineria-oil-gas',
  '/industrias/cadena-frio',
  '/catalogo/asrs/unit-load',
  '/catalogo/asrs/miniload',
  '/catalogo/asrs/shuttle',
  '/catalogo/asrs/camara-frio',
  '/catalogo/robots-manipulacion/paletizado',
  '/catalogo/robots-manipulacion/picking',
  '/catalogo/robots-manipulacion/agv-amr',
  '/catalogo/almacenamiento-vertical/vlm',
  '/catalogo/almacenamiento-vertical/carruseles',
  '/catalogo/equipo-transporte/transportadores',
  '/catalogo/equipo-transporte/sorters',
  '/catalogo/software/wms',
  '/catalogo/software/wcs',
  '/beneficios-fiscales',
  '/como-trabajamos',
  '/nosotros',
  '/contacto',
  '/delie-argentina',
  '/alternativa-economica-asrs',
  '/casos-de-exito',
  '/recursos',
  '/recursos/glosario',
  '/recursos/comparador-sistemas',
  '/recursos/que-es-un-sistema-asrs',
  '/recursos/cuanto-cuesta-automatizar-almacen',
  '/recursos/transelevador-vs-shuttle',
  '/recursos/rimi-2026-automatizacion',
  '/recursos/agv-vs-amr',
  '/recursos/wms-vs-wcs',
  '/recursos/automatizacion-bodegas-chile',
  '/recursos/asrs-vs-autostore',
  '/recursos/que-es-un-transelevador',
  '/recursos/que-es-un-wms',
  '/recursos/roi-automatizacion',
  '/catalogo/asrs/autostore-alternativa',
  '/chile',
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
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-extensions',
      '--disable-background-networking',
      '--disable-sync',
      '--metrics-recording-only',
      '--no-first-run',
    ],
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
        waitUntil: 'networkidle2',
        timeout: 60000,
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
