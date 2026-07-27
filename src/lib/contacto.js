// Único punto de verdad para el contacto de STOKA.
// Si cambia el número, se cambia solo acá.

export const WPP_NUMBER = '5492613419061';
export const WPP_DISPLAY = '+54 9 261 341-9061';
export const WPP_TEL = '+5492613419061';

export const wppLink = (texto) =>
  `https://wa.me/${WPP_NUMBER}${texto ? `?text=${encodeURIComponent(texto)}` : ''}`;
