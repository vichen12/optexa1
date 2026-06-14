/* SSR entry — mirrors App.jsx routes with static imports (renderToString
   no soporta lazy()). HomePage y el schema se importan del App real para
   que el HTML prerenderizado salga traducido por idioma. */
import { Routes, Route, Navigate, StaticRouter } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { renderToString } from 'react-dom/server';
import i18next from './i18n/ssr.js';
import { HomePage, ORGANIZATION_SCHEMA } from './App.jsx';
import { LeadPopup } from './components/LeadPopup';
import { CatalogPage } from './pages/CatalogPage';
import { SolucionesPage } from './pages/SolucionesPage';
import { NosotrosPage } from './pages/NosotrosPage';
import { ComoTrabajamosPage } from './pages/ComoTrabajamosPage';
import { BeneficiosFiscalesPage } from './pages/BeneficiosFiscalesPage';
import { IndustriasPage } from './pages/IndustriasPage';
import { IndustriaDetailPage } from './pages/IndustriaDetailPage';
import { ContactPage } from './pages/ContactPage';
import { CatalogoASRSPage } from './pages/catalogo/CatalogoASRSPage';
import { CatalogoRobotsPage } from './pages/catalogo/CatalogoRobotsPage';
import { CatalogoVerticalPage } from './pages/catalogo/CatalogoVerticalPage';
import { CatalogoTransportePage } from './pages/catalogo/CatalogoTransportePage';
import { CatalogoSoftwarePage } from './pages/catalogo/CatalogoSoftwarePage';
import { ProductoPage } from './pages/catalogo/ProductoPage';
import { AlternativaDeliePage } from './pages/AlternativaDeliePage';
import { AlternativaEconomicaASRSPage } from './pages/AlternativaEconomicaASRSPage';
import { RecursosHub } from './pages/recursos/RecursosHub';
import { ArticuloPage } from './pages/recursos/ArticuloPage';
import { GlosarioPage } from './pages/recursos/GlosarioPage';
import { ComparadorPage } from './pages/recursos/ComparadorPage';
import { CasosDeExitoPage } from './pages/CasosDeExitoPage';
import { ROIPage } from './pages/recursos/ROIPage';
import { AutoStoreAlternativaPage } from './pages/catalogo/AutoStoreAlternativaPage';
import { ChilePage } from './pages/ChilePage';
import { ZonaPage } from './pages/ZonaPage';

function App() {
  const lang = i18next.language;
  /* Shared inner routes — reused for /, /en, /zh (same shape as App.jsx) */
  const inner = [
    <Route key="home" index element={<HomePage />} />,
    <Route key="catalogo" path="catalogo" element={<CatalogPage />} />,
    <Route key="catalogo-asrs" path="catalogo/asrs" element={<CatalogoASRSPage />} />,
    <Route key="catalogo-robots" path="catalogo/robots-manipulacion" element={<CatalogoRobotsPage />} />,
    <Route key="catalogo-vertical" path="catalogo/almacenamiento-vertical" element={<CatalogoVerticalPage />} />,
    <Route key="catalogo-transport" path="catalogo/equipo-transporte" element={<CatalogoTransportePage />} />,
    <Route key="catalogo-software" path="catalogo/software" element={<CatalogoSoftwarePage />} />,
    <Route key="catalogo-producto" path="catalogo/:categoria/:producto" element={<ProductoPage />} />,
    <Route key="soluciones" path="soluciones" element={<SolucionesPage />} />,
    <Route key="industrias" path="industrias" element={<IndustriasPage />} />,
    <Route key="industria-detail" path="industrias/:slug" element={<IndustriaDetailPage />} />,
    <Route key="beneficios" path="beneficios-fiscales" element={<BeneficiosFiscalesPage />} />,
    <Route key="como-trabajamos" path="como-trabajamos" element={<ComoTrabajamosPage />} />,
    <Route key="nosotros" path="nosotros" element={<NosotrosPage />} />,
    <Route key="contacto" path="contacto" element={<ContactPage />} />,
    <Route key="delie-ar" path="delie-argentina" element={<AlternativaDeliePage />} />,
    <Route key="alt-asrs" path="alternativa-economica-asrs" element={<AlternativaEconomicaASRSPage />} />,
    <Route key="alt-delie-redir" path="alternativa-delie-argentina" element={<Navigate to="delie-argentina" replace />} />,
    <Route key="casos" path="casos-de-exito" element={<CasosDeExitoPage />} />,
    <Route key="recursos" path="recursos" element={<RecursosHub />} />,
    <Route key="glosario" path="recursos/glosario" element={<GlosarioPage />} />,
    <Route key="comparador" path="recursos/comparador-sistemas" element={<ComparadorPage />} />,
    <Route key="roi" path="recursos/roi-automatizacion" element={<ROIPage />} />,
    <Route key="articulo" path="recursos/:slug" element={<ArticuloPage />} />,
    <Route key="autostore" path="catalogo/asrs/autostore-alternativa" element={<AutoStoreAlternativaPage />} />,
    <Route key="chile" path="chile" element={<ChilePage />} />,
    <Route key="zona-bsas" path="automatizacion-almacenes-buenos-aires" element={<ZonaPage zona="buenos-aires" />} />,
    <Route key="zona-mendoza" path="automatizacion-almacenes-mendoza" element={<ZonaPage zona="mendoza" />} />,
    <Route key="zona-cordoba" path="automatizacion-almacenes-cordoba" element={<ZonaPage zona="cordoba" />} />,
    <Route key="zona-rosario" path="automatizacion-almacenes-rosario" element={<ZonaPage zona="rosario" />} />,
  ];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({ ...ORGANIZATION_SCHEMA, inLanguage: lang })}</script>
      </Helmet>
      <Routes>
        <Route path="/">{inner}</Route>
        <Route path="/en">{inner}</Route>
        <Route path="/zh">{inner}</Route>
      </Routes>
      <LeadPopup />
    </>
  );
}

export async function render(url) {
  const lang =
    url === '/en' || url.startsWith('/en/') ? 'en' :
    url === '/zh' || url.startsWith('/zh/') ? 'zh' : 'es';
  await i18next.changeLanguage(lang);

  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );
  return { html, helmet: helmetContext.helmet, lang };
}

export default App;
