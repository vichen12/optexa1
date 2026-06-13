import { Helmet } from 'react-helmet-async';
import { useSeoUrls } from './i18n-utils';

/**
 * Drop-in replacement for the SEO block inside <Helmet>.
 * Handles canonical + hreflang automatically.
 *
 * Usage:
 *   <SeoHead
 *     title="Page title"
 *     description="Meta description"
 *     ogImage="/some-image.jpg"   // optional
 *     basePath="/catalogo/asrs"   // optional, auto-detected from URL if omitted
 *   />
 *
 * You can still add extra <Helmet> children alongside this component
 * for page-specific tags (ld+json schemas, etc.).
 */
export function SeoHead({ title, description, ogImage, basePath, noIndex }) {
  const { canonical, hreflangs } = useSeoUrls(basePath);

  const BASE = 'https://www.stokagroup.com';
  // og:image debe ser absoluta; si llega relativa, anteponer el dominio.
  const absoluteOgImage = ogImage
    ? (ogImage.startsWith('http') ? ogImage : `${BASE}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`)
    : `${BASE}/stoka_og_image_1200x630.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex
        ? <meta name="robots" content="noindex, nofollow" />
        : <meta name="robots" content="index, follow" />
      }

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* hreflang — tells Google about all language versions */}
      {hreflangs.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hreflang={lang} href={url} />
      ))}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="STOKA" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:alt" content={title} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />
    </Helmet>
  );
}
