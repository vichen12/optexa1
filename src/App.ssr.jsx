/* SSR entry — mirrors App.jsx routes with static imports (renderToString
   no soporta lazy()). HomePage y el schema se importan del App real para
   que el HTML prerenderizado salga traducido por idioma. */
import { Routes, Route, StaticRouter } from 'react-router-dom';
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
import { TecnologiaASRSPage } from './pages/TecnologiaASRSPage';
import { PreguntasFrecuentesPage } from './pages/PreguntasFrecuentesPage';
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
import { localizePath } from './lib/slugMap';

function App() {
  const lang = i18next.language;
  /* Shared inner routes — reused for /, /en, /zh con slugs localizados (same shape as App.jsx) */
  const inner = (routeLang) => {
    const lp = (path) => (routeLang === 'es' ? path : localizePath(path, routeLang));
    return [
      <Route key="home" index element={<HomePage />} />,
      <Route key="catalogo" path={lp("catalogo")} element={<CatalogPage />} />,
      <Route key="catalogo-asrs" path={lp("catalogo/asrs")} element={<CatalogoASRSPage />} />,
      <Route key="catalogo-robots" path={lp("catalogo/robots-manipulacion")} element={<CatalogoRobotsPage />} />,
      <Route key="catalogo-vertical" path={lp("catalogo/almacenamiento-vertical")} element={<CatalogoVerticalPage />} />,
      <Route key="catalogo-transport" path={lp("catalogo/equipo-transporte")} element={<CatalogoTransportePage />} />,
      <Route key="catalogo-software" path={lp("catalogo/software")} element={<CatalogoSoftwarePage />} />,
      <Route key="catalogo-producto" path={lp("catalogo/:categoria/:producto")} element={<ProductoPage />} />,
      <Route key="soluciones" path={lp("soluciones")} element={<SolucionesPage />} />,
      <Route key="industrias" path={lp("industrias")} element={<IndustriasPage />} />,
      <Route key="industria-detail" path={lp("industrias/:slug")} element={<IndustriaDetailPage />} />,
      <Route key="beneficios" path={lp("beneficios-fiscales")} element={<BeneficiosFiscalesPage />} />,
      <Route key="como-trabajamos" path={lp("como-trabajamos")} element={<ComoTrabajamosPage />} />,
      <Route key="nosotros" path={lp("nosotros")} element={<NosotrosPage />} />,
      <Route key="contacto" path={lp("contacto")} element={<ContactPage />} />,
      <Route key="tec-asrs" path={lp("tecnologia-asrs")} element={<TecnologiaASRSPage />} />,
      <Route key="faq" path={lp("preguntas-frecuentes")} element={<PreguntasFrecuentesPage />} />,
      <Route key="alt-asrs" path={lp("alternativa-economica-asrs")} element={<AlternativaEconomicaASRSPage />} />,
      <Route key="casos" path={lp("casos-de-exito")} element={<CasosDeExitoPage />} />,
      <Route key="recursos" path={lp("recursos")} element={<RecursosHub />} />,
      <Route key="glosario" path={lp("recursos/glosario")} element={<GlosarioPage />} />,
      <Route key="comparador" path={lp("recursos/comparador-sistemas")} element={<ComparadorPage />} />,
      <Route key="roi" path={lp("recursos/roi-automatizacion")} element={<ROIPage />} />,
      <Route key="articulo" path={lp("recursos/:slug")} element={<ArticuloPage />} />,
      <Route key="autostore" path={lp("catalogo/asrs/autostore-alternativa")} element={<AutoStoreAlternativaPage />} />,
      <Route key="chile" path={lp("chile")} element={<ChilePage />} />,
      <Route key="zona-bsas" path={lp("automatizacion-almacenes-buenos-aires")} element={<ZonaPage zona="buenos-aires" />} />,
      <Route key="zona-mendoza" path={lp("automatizacion-almacenes-mendoza")} element={<ZonaPage zona="mendoza" />} />,
      <Route key="zona-cordoba" path={lp("automatizacion-almacenes-cordoba")} element={<ZonaPage zona="cordoba" />} />,
      <Route key="zona-rosario" path={lp("automatizacion-almacenes-rosario")} element={<ZonaPage zona="rosario" />} />,
    ];
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({ ...ORGANIZATION_SCHEMA, inLanguage: lang, description: i18next.t('schema.orgDesc'), knowsAbout: i18next.t('schema.knowsAbout', { returnObjects: true }) })}</script>
      </Helmet>
      <Routes>
        <Route path="/">{inner('es')}</Route>
        <Route path="/en">{inner('en')}</Route>
        <Route path="/zh">{inner('zh')}</Route>
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
