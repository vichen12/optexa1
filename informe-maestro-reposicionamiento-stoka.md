# INFORME MAESTRO — REPOSICIONAMIENTO STOKA
## De "Sistemas ASRS" a "Automatizá tu depósito": posicionar con las palabras que la gente usa
## + Cambio global de "Representantes" a "Aliado estratégico"
### Documento de trabajo para Claude Code — Vincenzo y Chat son los TL que aprueban cada sprint
### Julio 2026 · Basado en datos reales de GSC + investigación de mercado

---

# ÍNDICE

1. Resumen ejecutivo y dinámica de trabajo
2. La investigación: cómo busca la gente de verdad (evidencia)
3. El banco de keywords simples (mapeado por página)
4. Cambio global: "Representantes" → "Aliado estratégico" (todas las ubicaciones)
5. Reconstrucción del index, sección por sección
6. Cambios en el resto de las páginas clave
7. Reglas de oro (lo que NO se toca)
8. Plan de sprints con checkpoints (dinámica TL)
9. Qué archivos subirle a Claude Code
10. PROMPT EJECUTABLE — Sprint 1

---

# 1. RESUMEN EJECUTIVO Y DINÁMICA DE TRABAJO

## El problema que resolvemos

El sitio de STOKA está técnicamente impecable (Ahrefs 92/100, multiidioma, schema completo), pero **habla en el idioma del ingeniero, no del cliente**. El H1 dice "Automatización de almacenes con tecnología DELIE" — pero el dueño de un depósito en Argentina no busca eso. Busca:

- "cómo optimizar el depósito"
- "el depósito se me queda chico"
- "automatizar depósito"
- "ahorrar espacio en el depósito"
- "reducir errores de picking"

**La evidencia está en nuestros propios datos de Search Console:** la página más vista del sitio es "/recursos/que-es-un-transelevador" (120 impresiones) — lenguaje educativo simple. Las queries que traen impresiones son "transelevadores para cajas", "que es un transelevador", "que es wms" — nadie llega por "ASRS" solo.

## Qué vamos a hacer

1. **Reposicionar todo el lenguaje visible** del sitio hacia las palabras simples que la gente usa, SIN borrar el vocabulario técnico (que se mantiene en segundo plano para el ingeniero que valida).
2. **Cambiar "Representantes" por "Aliado estratégico"** en todo el sitio, con una fórmula que no pierda la señal de legitimidad de "oficial".
3. **Reconstruir el orden del mensaje en el index:** primero el problema del cliente, después la solución, después la validación técnica.

## Dinámica de trabajo (importante — leer primero)

**Roles:**
- **Vincenzo + Chat = Tech Leads (TL).** Definimos el qué, aprobamos cada entrega, decidimos los cambios de rumbo.
- **Claude Code = Ejecutor.** Implementa sprint por sprint. NO avanza al siguiente sprint sin el OK de los TL.

**Reglas de la dinámica:**
1. Claude Code ejecuta UN sprint por vez y reporta al terminar: qué cambió, en qué archivos, y el resultado del build.
2. Los TL revisan (Vincenzo mira el sitio, Chat verifica con fetch) y dan OK o piden ajustes.
3. Si Claude Code encuentra algo inesperado (texto que no está donde se indica, estructura distinta), FRENA y pregunta — no improvisa.
4. Todo cambio es SOLO en español (es.json) en esta fase. EN y ZH se replican en una fase posterior, cuando el español esté validado.
5. Después de cada sprint deployado, Vincenzo pide re-indexación de las páginas tocadas en Search Console.

---

# 2. LA INVESTIGACIÓN: CÓMO BUSCA LA GENTE DE VERDAD

## 2.1 Evidencia de nuestros propios datos (Search Console, julio 2026)

Estos son datos REALES de qué está trayendo impresiones al sitio hoy:

| Query real | Impresiones | Posición | Qué nos dice |
|---|---|---|---|
| que es un transelevador (página) | 120 | 39 | La gente busca EDUCATIVO SIMPLE |
| transelevadores para cajas | 40 | 38.7 | Busca por función ("para cajas"), no por sigla |
| wms / que es wms / wms que es | ~70 | 65-87 | Busca "qué es", no specs |
| autostore asrs | 26 | 26 | Busca comparando marcas conocidas |
| transelevador / transelevadores | ~40 | 31-50 | La palabra en criollo, no "stacker crane" |
| stoka | 166 | 6.4 | La marca ya genera búsqueda |

**Conclusión 1:** el tráfico real entra por lenguaje simple y educativo. Ninguna query top es "ASRS" a secas.

## 2.2 Evidencia del mercado argentino (investigación web, julio 2026)

Analizamos cómo escriben los referentes del sector para el público argentino:

**Hallazgo A — "Depósito" es LA palabra argentina.** Mecalux (líder mundial) tiene su sitio argentino (.com.ar) escrito con "depósito" en todos sus contenidos: "cómo optimizar el espacio en el depósito", "organizar tu depósito", "depósito eficiente", "el depósito se queda pequeño". En España usan "almacén"; en Argentina, "depósito". Nuestro sitio debe liderar con "depósito" y usar "almacén"/"bodega" como variantes.

**Hallazgo B — El lenguaje de problema que usa el mercado:**
- "el depósito se queda chico / pequeño"
- "falta de espacio en el depósito" (descrito como "uno de los problemas más importantes y comunes")
- "perder tiempo y dinero"
- "ordenar el depósito" / "organizar el depósito"
- "aprovechar el espacio vertical" / "que los metros cuadrados no sean un obstáculo"
- "reducir errores en el picking"
- "control de stock" / "inventario muerto" / "exceso de stock"
- "centro de costos ocultos" (el depósito como costo silencioso)

**Hallazgo C — Datos duros del contexto argentino (usables en el sitio):**
- En Argentina, los costos logísticos representan entre el 20% y el 30% del valor final de un producto (fuente: consultoras del sector, 2026).
- Un rediseño eficiente de depósito puede liberar hasta un 30% del área total, evitando ampliaciones costosas.
- Estos números respaldan el mensaje "el depósito te está costando más de lo que creés".

**Hallazgo D — "Aliado estratégico" es lenguaje natural argentino.** Aparece en contenido comercial argentino del rubro ("un aliado estratégico para emprendedores"). No es un invento: es como se habla acá. Validado.

## 2.3 El mapa mental del cliente (síntesis)

El decisor argentino (dueño, gerente de operaciones, CFO) recorre este camino mental:

1. **Siente el problema:** "no me entra más nada", "el alquiler me mata", "perdemos tiempo buscando cosas", "nos equivocamos en los pedidos"
2. **Googlea el problema:** "cómo optimizar el depósito", "falta de espacio depósito", "reducir errores picking"
3. **Descubre que existe una solución:** "qué es un depósito automatizado", "qué es un transelevador", "cuánto cuesta automatizar"
4. **Compara y valida:** "asrs vs autostore", "mejores sistemas", specs técnicas
5. **Decide:** busca quién lo hace en Argentina, precios, confianza

**Hoy nuestro sitio arranca en el paso 4 (specs, siglas).** Este reposicionamiento lo hace arrancar en el paso 1-2, que es donde está el 90% del mercado, sin perder los pasos 3-5 que ya están cubiertos.

---

# 3. EL BANCO DE KEYWORDS SIMPLES (mapeado por página)

## 3.1 Las familias de keywords simples (por intención)

### FAMILIA 1 — Problema de espacio (la más fuerte)
automatizar deposito, deposito lleno, falta de espacio en el deposito, el deposito se queda chico, aprovechar espacio deposito, optimizar espacio deposito, ganar espacio en el deposito, aprovechar altura deposito, espacio vertical deposito, deposito chico soluciones, ampliar deposito sin obra, no me entra mas mercaderia

### FAMILIA 2 — Problema de tiempo y errores
ahorrar tiempo en el deposito, preparar pedidos mas rapido, reducir errores de picking, errores en los pedidos, control de stock, no perder mercaderia, inventario sin errores, trazabilidad de stock, perder tiempo buscando productos, agilizar el deposito

### FAMILIA 3 — Problema de costos
reducir costos del deposito, bajar costos logisticos, ahorrar en el deposito, el alquiler del deposito, costo de almacenamiento, deposito mas barato, ahorrar alquiler galpon, costos ocultos deposito

### FAMILIA 4 — Acción/solución en simple
automatizar el deposito, automatizar deposito precio, ordenar el deposito, organizar el deposito, mejorar el deposito, modernizar el deposito, deposito automatico, deposito inteligente, deposito robotizado, sistema para deposito, estanterias automaticas, deposito eficiente

### FAMILIA 5 — Educativas (ya validadas por GSC)
que es un transelevador, que es un wms, que es un deposito automatizado, como funciona un deposito automatico, cuanto cuesta automatizar un deposito, conviene automatizar, tipos de estanterias automaticas, que es picking

### FAMILIA 6 — Las técnicas QUE SE MANTIENEN (no se tocan)
sistema asrs, asrs argentina, transelevador, miniload, pallet shuttle, agv, amr, wms, wcs, almacen automatizado, automatizacion de almacenes, DELIE

## 3.2 Mapeo: qué familia va en qué página

| Página | Familia principal | Familias secundarias |
|---|---|---|
| **/ (home)** | 1 (espacio) + 4 (acción) | 2, 3, 6 |
| /catalogo | 4 (solución simple) | 6 |
| /catalogo/asrs | 6 (técnica) + 4 | 1 |
| /soluciones | 1 + 2 + 3 (los 3 problemas) | 4 |
| /recursos/que-es-un-transelevador | 5 | 6 |
| /recursos/como-aprovechar-espacio-almacen | 1 | 3 |
| /recursos/reducir-costos-logisticos | 3 | 2 |
| /recursos/falta-de-espacio-deposito-soluciones | 1 | 4 |
| /recursos/cuando-conviene-automatizar-almacen | 4 + 5 | 3 |
| /contacto | 4 (acción: "cotizá automatizar tu depósito") | — |
| /nosotros | marca + aliado estratégico | — |
| Industrias (7) | su vertical + 1-2-3 adaptadas | 6 |

**Regla de densidad:** cada página lidera con SU familia principal en H1/title/primer párrafo. Las secundarias aparecen naturalmente en el body. Máximo 1 keyword principal + 4-6 secundarias por página. CERO stuffing.

---

# 4. CAMBIO GLOBAL: "REPRESENTANTES" → "ALIADO ESTRATÉGICO"

## 4.1 La fórmula (nota de TL Chat — leer antes de ejecutar)

"Representante oficial exclusivo" tiene un valor que no conviene tirar del todo: (a) es la verdad legal/comercial frente a DELIE, (b) captura la búsqueda "representante DELIE argentina", (c) "oficial" y "exclusivo" son señales de legitimidad que un comprador B2B valora.

**La fórmula que adoptamos:** "Aliado estratégico" pasa a ser el término principal visible, y "oficial de DELIE" se conserva como calificador donde aporta legitimidad. Así ganamos el tono de partnership sin perder la señal de autorización.

- Frase larga (lugares principales): **"Aliado estratégico oficial de DELIE en Argentina"**
- Frase corta (lugares secundarios): **"Aliado estratégico de DELIE"**
- El footer legal (copyright) conserva una única mención de "Representación oficial" por precisión jurídica — o si Vincenzo prefiere, también se cambia (decisión de TL en el checkpoint).

## 4.2 Todas las ubicaciones detectadas (mapa de reemplazo exacto)

Relevadas del sitio en producción (julio 2026):

| # | Ubicación | Texto actual | Texto nuevo |
|---|---|---|---|
| 1 | Navbar (logo/claim) | "STOKA — Representantes oficiales DELIE en Argentina" | "STOKA — Aliado estratégico oficial de DELIE en Argentina" |
| 2 | Hero, badge superior | "Representación Oficial DELIE · Argentina" | "Aliado Estratégico Oficial DELIE · Argentina" |
| 3 | Home, sección SEO (H2 largo) | "Representante oficial exclusivo de DELIE — uno de los fabricantes..." | "Aliado estratégico oficial y exclusivo de DELIE — uno de los fabricantes..." |
| 4 | Home, kicker de esa sección | "STOKA · Representantes DELIE en Argentina" | "STOKA · Aliado estratégico de DELIE en Argentina" |
| 5 | Footer, descripción | "Representantes oficiales exclusivos de DELIE en Argentina y Chile. Soporte técnico 100% local." | "Aliado estratégico oficial y exclusivo de DELIE en Argentina y Chile. Soporte técnico 100% local." |
| 6 | Footer, copyright | "© 2026 STOKA — Representación oficial DELIE en Argentina" | "© 2026 STOKA — Aliado estratégico oficial de DELIE en Argentina" (o conservar — decisión TL) |
| 7 | /nosotros, title | "Nosotros \| Representantes Oficiales DELIE en Argentina y Chile \| STOKA Group" | "Nosotros \| Aliado Estratégico Oficial de DELIE \| STOKA" |
| 8 | /nosotros, contenido | Todas las menciones "representante/representantes/representación" | "aliado estratégico" (conservando UNA mención de "representación oficial y exclusiva" para la legitimidad comercial) |
| 9 | /delie-argentina | Menciones de "representante" | Misma fórmula que #8 |
| 10 | Schema Organization, description | "Representantes oficiales exclusivos de DELIE en Argentina..." | "Aliado estratégico oficial y exclusivo de DELIE en Argentina..." |
| 11 | Meta descriptions que digan "representantes" | (buscar con grep) | Misma fórmula |
| 12 | Alt del logo | "Logo STOKA — Representantes DELIE en Argentina" | "Logo STOKA — Aliado estratégico de DELIE en Argentina" |

**Instrucción para Claude Code:** hacer grep global de "representant" y "Representa" en es.json, componentes .jsx, index.html y schemas para capturar TODAS las ocurrencias (la tabla lista las vistas desde afuera; puede haber más en páginas internas). Reportar la lista completa encontrada ANTES de reemplazar, para que los TL confirmen.

**Qué NO cambiar:** las menciones en EN ("official representative") y ZH quedan como están en esta fase — se actualizan cuando repliquemos a idiomas.

---

# 5. RECONSTRUCCIÓN DEL INDEX, SECCIÓN POR SECCIÓN

Principio rector: **el orden del mensaje sigue el mapa mental del cliente** (problema → solución → prueba → confianza → acción). No se rompe el diseño ni los componentes: se cambian textos y se agrega UNA sección nueva (problemas). Todo lo técnico se conserva, reubicado en el flujo.

## SECCIÓN 1 — HERO (reescritura)

**H1 actual:** "Automatización de almacenes con tecnología DELIE en Argentina."
**H1 nuevo:** "Automatizá tu depósito: más espacio, menos costos y cero errores."

**Subtítulo actual:** "Tecnología de clase mundial, precio accesible. Sistemas ASRS, robots y software para empresas que necesitan operar mejor sin pagar precios europeos."
**Subtítulo nuevo:** "Aprovechá hasta 3 veces más tu espacio, ganá tiempo y reducí errores con sistemas automáticos de almacenamiento. Tecnología DELIE de clase mundial, a precio accesible y con soporte en Argentina."

**Badge:** "Aliado Estratégico Oficial DELIE · Argentina" (cambio #2 de la sección 4)

**CTAs:** "Solicitar consulta técnica" → "Quiero automatizar mi depósito" (primario) · "Ver catálogo de soluciones" → queda igual (secundario)

**Stats del hero:** quedan igual (1.000+ instalaciones, 15+ años, 30-50%, CE·ISO) — son prueba, funcionan.

**Title de la home:** "Automatizá tu Depósito: Más Espacio y Menos Costos | STOKA"
**Meta description:** "Automatizá tu depósito y aprovechá 3x más espacio. Reducí costos, errores y tiempos con sistemas automáticos de almacenamiento. Tecnología DELIE, soporte en Argentina."
**OG title/description:** idénticos al title/meta.

## SECCIÓN 2 — NUEVA: "¿Tu depósito llegó al límite?" (agregar después del hero)

Bloque de 3 tarjetas de problema con lenguaje del cliente. Es la sección que captura las búsquedas de problema (Familias 1-3):

**Título de sección:** "¿Tu depósito llegó al límite?"
**Bajada:** "Si te pasa alguna de estas tres cosas, la automatización se paga sola. En Argentina, los costos logísticos representan entre el 20% y el 30% del valor final de un producto — el depósito es el costo oculto más grande de tu operación."

**Tarjeta 1 — "No te entra más nada"**
"Tu depósito se quedó chico y ampliar o mudarte cuesta una fortuna. Los sistemas automáticos aprovechan la altura: hasta 3 veces más mercadería en los mismos metros cuadrados, sin obra."
→ Link: /recursos/falta-de-espacio-deposito-soluciones

**Tarjeta 2 — "Perdés tiempo y aparecen errores"**
"Buscar productos a mano, preparar pedidos caminando kilómetros, equivocarse en los envíos. Un depósito automatizado lleva la mercadería hasta el operario y prepara pedidos con 99,9% de exactitud, las 24 horas."
→ Link: /recursos/reducir-costos-logisticos (o el de errores de picking si existe)

**Tarjeta 3 — "El alquiler te come la rentabilidad"**
"Pagás cada vez más metros para guardar lo mismo. Con almacenamiento de alta densidad guardás lo mismo en hasta 85% menos superficie y dejás de pagar espacio de más."
→ Link: /recursos/como-aprovechar-espacio-almacen

## SECCIÓN 3 — ROI ("La automatización se paga sola")

Queda donde está, es el complemento perfecto de la sección de problemas. Solo un ajuste de kicker:
"Retorno de inversión" → "Cuánto ahorrás en serio"
El resto (los números de 10.000→1.500 m², USD 68.000/mes, 18-36 meses) NO SE TOCA — es de lo mejor del sitio.

## SECCIÓN 4 — CATÁLOGO ("Nuestras Categorías")

**Título actual:** "Nuestras Categorías"
**Título nuevo:** "Qué podemos automatizar en tu depósito"
Las cards de categorías quedan igual (nombres técnicos correctos), pero cada descripción corta gana una línea de beneficio simple:
- AS/RS: "Estanterías automáticas de 7 a 40 metros. Guardá más en el mismo espacio." 
- Almacenamiento vertical: "Torres automáticas que liberan hasta 90% del piso."
- Robots de manipulación: "Robots que llevan la mercadería hasta el operario."
- Equipo de transporte: "La mercadería se mueve sola entre zonas."
- Software inteligente: "Control total del stock en tiempo real, sin planillas."

## SECCIÓN 5 — "Por qué STOKA / La diferencia que importa"

Se mantiene la estructura de 3 puntos, con el punto //01 reescrito por el cambio de aliado:

**//01 actual:** "Fabricante directo — DELIE fabrica, STOKA integra..."
**//01 nuevo:** "Aliado directo del fabricante — DELIE fabrica, STOKA integra como su aliado estratégico oficial en Argentina: garantía de fábrica, piezas originales y soporte técnico local, sin cadena de intermediarios."

//02 (30-50% más económico) y //03 (ingeniería local) quedan igual.

## SECCIÓN 6 — INDUSTRIAS

Queda igual (ya está bien). Solo verificar que el kicker diga "Sectores que automatizamos" (ya lo dice).

## SECCIÓN 7 — BENEFICIOS FISCALES

Queda igual en estructura (ya corregida la precisión del arancel/RIMI). Un ajuste de título:
"Invertí con el Estado a favor" → queda (es bueno, simple y argentino).

## SECCIÓN 8 — METODOLOGÍA (6 pasos)

Queda igual. Ya es clara.

## SECCIÓN 9 — BLOQUE SEO LARGO ("Automatización de almacenes, bodegas y depósitos...")

Se conserva (es la sección que da densidad semántica) con dos ajustes:
1. El cambio de "Representante oficial exclusivo" → fórmula aliado (sección 4, cambios #3 y #4).
2. Agregar al párrafo existente una frase con Familias 1-4 en criollo: "Si tu depósito se quedó chico, si perdés tiempo preparando pedidos o si el costo del alquiler no para de subir, la automatización deja de ser un lujo: es la forma más rápida de ordenar el depósito, ganar espacio y bajar costos sin mudarte ni ampliar."

## SECCIÓN 10 — "3 desafíos históricos" + sistemas + proceso + contexto fiscal

Queda igual (ya corregido en precisión fiscal). Es contenido para el paso 4-5 del mapa mental (validación) y está bien ahí, al final.

## SECCIÓN 11 — CHILE, COBERTURA, FAQ, CTA FINAL

- Chile y Cobertura: quedan igual.
- FAQ: ya tiene 3 preguntas buenas con lenguaje simple. AGREGAR una cuarta: **"¿Cuánto cuesta automatizar un depósito?"** con respuesta honesta: "Depende del tamaño y del sistema. Hay soluciones escalables desde USD 150.000 (un módulo VLM o miniload) hasta proyectos integrales. Lo importante: con los beneficios fiscales vigentes (RIMI, aranceles reducidos) y el ahorro en alquiler y errores, el retorno típico es de 18 a 36 meses. Pedí una evaluación sin cargo y te damos el número para TU caso." → esta pregunta captura la búsqueda de mayor intención comercial de todas.
- CTA final: "Consulta sin costo" → agregar bajada "Contanos qué problema tenés en tu depósito y en 24 hs te decimos si la automatización te conviene y cuánto ahorrarías." Botón WhatsApp queda (es LA conversión).

---

# 6. CAMBIOS EN EL RESTO DE LAS PÁGINAS CLAVE

(Se ejecutan en Sprint 2, DESPUÉS de aprobar el index)

## 6.1 Títulos/metas de las 6 páginas con CTR bajo
Ya definidos en el documento "plan-mejora-seo-stoka-gsc.md" (nosotros, beneficios-fiscales, bodegas-chile, como-trabajamos, contacto, logistica-3pl). Se ejecutan tal cual están ahí, con un ajuste: donde ese documento diga "Representantes", aplicar la fórmula aliado de la sección 4.

## 6.2 /recursos/que-es-un-transelevador (la página estrella — 120 impresiones)
- Ampliar 300-400 palabras: qué es (en criollo), para qué sirve, tipos, cuánto cuesta aproximadamente, cuándo conviene.
- Agregar 2-3 FAQs: "¿Qué diferencia hay entre un transelevador y un autoelevador?", "¿Cuánto cuesta un transelevador?", "¿Sirve para un depósito chico?"
- Internal links entrantes: desde la home (sección problemas), desde /catalogo/asrs y desde el glosario.
- Objetivo: de posición 39 a página 1.

## 6.3 /soluciones
Reescribir el enfoque a "los 3 problemas" (espacio, tiempo, costos) espejando la sección nueva del index, con más profundidad. Es la página consultiva por definición.

## 6.4 /contacto
Además del title nuevo (6.1), agregar una línea sobre el formulario: "Contanos tu problema: ¿falta de espacio, errores, costos? No hace falta que sepas qué sistema necesitás — para eso estamos nosotros."

## 6.5 /nosotros y /delie-argentina
Aplicar la fórmula aliado (sección 4, cambios #7, #8, #9) manteniendo la historia y los datos de DELIE.

---

# 7. REGLAS DE ORO (lo que NO se toca)

1. **NO borrar vocabulario técnico.** ASRS, transelevador, miniload, WMS, DELIE quedan en el sitio. El lenguaje simple se AGREGA ADELANTE; el técnico queda para el paso de validación. Un H2 técnico por sección está bien.
2. **NO crear páginas nuevas.** Hay 240 URLs sin indexar. Todo este trabajo es SOBRE páginas existentes. Ni una URL nueva hasta que la indexación avance.
3. **NO tocar EN ni ZH en esta fase.** Solo es.json y componentes en español. Los otros idiomas se replican en fase posterior.
4. **NO keyword stuffing.** Las familias de keywords se usan con naturalidad. Si una frase suena forzada, se reescribe o se saca.
5. **NO tocar los números validados:** ROI 10.000→1.500 m², USD 68.000/mes, 18-36 meses, 99,9%, stats del hero, precisión fiscal (arancel "según NCM", RIMI "2 cuotas / 100% alta eficiencia"). Eso ya está correcto y costó calibrarlo.
6. **NO romper el diseño.** Cambios de texto + UNA sección nueva (problemas) usando componentes/estilos existentes.
7. **Voseo argentino siempre:** automatizá, aprovechá, ganá, reducí, contanos.
8. **Title ≤60 caracteres, meta ≤155, un solo H1 por página.**

---

# 8. PLAN DE SPRINTS CON CHECKPOINTS (dinámica TL)

## SPRINT 1 — El index + cambio de aliado (el corazón)
- Todo lo de la sección 5 (hero, sección problemas nueva, ajustes de secciones, FAQ nueva, CTA)
- Todo lo de la sección 4 (grep global + reemplazo "representantes" → fórmula aliado, con reporte previo)
- **Checkpoint:** Claude Code reporta → Vincenzo mira el sitio en producción → Chat verifica con fetch → OK o ajustes.

## SPRINT 2 — CTR + página estrella
- Los 6 títulos/metas del documento plan-mejora-seo-stoka-gsc.md (con fórmula aliado)
- Ampliación de /recursos/que-es-un-transelevador (6.2)
- **Checkpoint:** igual que Sprint 1. Además: Vincenzo pide re-indexación de las 7 páginas tocadas.

## SPRINT 3 — Soluciones + contacto + nosotros/delie
- 6.3, 6.4, 6.5
- **Checkpoint:** igual.

## SPRINT 4 — Réplica a EN y ZH (solo cuando el español esté validado y indexando)
- Traducir todos los cambios de los Sprints 1-3 a en.json y zh.json (traducción real, con la fórmula aliado adaptada: "official strategic partner of DELIE")
- **Checkpoint:** verificación de hreflang intacto + prerender completo.

## Métricas de éxito (medimos en GSC a 3-4 semanas de cada sprint)
- CTR de la home: de 6.36% → objetivo 9%+
- CTR de las 6 páginas con 0 clics: de 0% → algo (cualquier clic es victoria)
- /que-es-un-transelevador: de posición 39 → top 20 → top 10
- Aparición de queries nuevas de las Familias 1-4 en el reporte de Consultas
- Impresiones totales: tendencia creciente sostenida

---

# 9. QUÉ ARCHIVOS SUBIRLE A CLAUDE CODE

Subile estos 2 archivos al proyecto (o pegale el contenido):

1. **informe-maestro-reposicionamiento-stoka.md** (ESTE documento) — es la fuente de verdad de todo el reposicionamiento. Claude Code lo lee entero antes de tocar nada.
2. **plan-mejora-seo-stoka-gsc.md** (ya lo tenés de antes) — contiene los 6 títulos/metas del Sprint 2 con el detalle exacto.

Y en el mensaje inicial le pegás el PROMPT EJECUTABLE de la sección 10 (abajo), que le dice cómo trabajar con estos archivos.

**No le subas:** los CSVs de GSC (los datos ya están sintetizados acá), ni los documentos viejos de auditoría (podrían contradecir decisiones nuevas — este informe manda).

---

# 10. PROMPT EJECUTABLE — SPRINT 1 (pegar a Claude Code)

> Te subí el archivo **informe-maestro-reposicionamiento-stoka.md**. Leelo COMPLETO antes de tocar una línea de código — es la fuente de verdad de este trabajo. Contexto: stokagroup.com (React 19 + Vite 6, Vercel, prerender Puppeteer, multiidioma ES/EN/ZH, contenido en i18n es.json/en.json/zh.json).
>
> **Dinámica de trabajo:** Vincenzo y su asistente son los Tech Leads. Vos ejecutás UN sprint por vez y reportás al terminar. NO avanzás al siguiente sprint sin OK explícito. Si encontrás algo que no coincide con lo que el informe describe (un texto que no está, una estructura distinta), FRENÁ y preguntá — no improvises.
>
> **Ejecutá el SPRINT 1 del informe (secciones 4 y 5), en este orden:**
>
> **PASO 1 — Grep de "representantes" (reportar ANTES de cambiar):**
> Buscá todas las ocurrencias de "representant", "Representa", "representación" (case-insensitive) en: es.json, componentes .jsx, index.html, y todos los schemas JSON-LD. Pasame la lista completa (archivo + línea + texto) y ESPERÁ mi confirmación antes de reemplazar. La fórmula de reemplazo está en la sección 4.1 del informe: "Aliado estratégico oficial de DELIE" (frase larga) / "Aliado estratégico de DELIE" (corta). NO toques en.json ni zh.json.
>
> **PASO 2 — Reescritura del hero (sección 5.1 del informe):**
> - H1: "Automatizá tu depósito: más espacio, menos costos y cero errores."
> - Subtítulo, badge, CTA primario, title, meta description y OG: exactamente como los define la sección 5.1.
>
> **PASO 3 — Sección nueva "¿Tu depósito llegó al límite?" (sección 5.2):**
> Crear el bloque de 3 tarjetas de problema DESPUÉS del hero, usando componentes y estilos existentes del sitio (no inventar diseño nuevo). Los textos exactos y los links internos de cada tarjeta están en la sección 5.2.
>
> **PASO 4 — Ajustes de secciones existentes (secciones 5.3 a 5.11):**
> - Kicker ROI: "Cuánto ahorrás en serio"
> - Título catálogo: "Qué podemos automatizar en tu depósito" + las 5 descripciones nuevas de las cards
> - Punto //01 de "Por qué STOKA": el texto nuevo de la sección 5.5
> - Bloque SEO largo: los 2 ajustes de la sección 5.9
> - FAQ: agregar la 4ª pregunta "¿Cuánto cuesta automatizar un depósito?" con la respuesta exacta de la sección 5.11 (con FAQPage schema actualizado)
> - CTA final: la bajada nueva de la sección 5.11
>
> **REGLAS (sección 7 del informe — obligatorias):**
> - Solo español (es.json + componentes). EN/ZH NO se tocan.
> - No borrar vocabulario técnico: se agrega lo simple adelante, lo técnico queda.
> - No crear páginas nuevas ni rutas nuevas.
> - No tocar los números de ROI ni la precisión fiscal (ya calibrados).
> - Voseo argentino. Title ≤60, meta ≤155, un solo H1.
> - No romper diseño: solo textos + la sección nueva con componentes existentes.
>
> **VERIFICACIÓN FINAL:**
> 1. Build sin errores + prerender completo (todas las rutas)
> 2. grep final: cero ocurrencias de "representant" en es.json/componentes ES (salvo las que los TL hayan decidido conservar en el paso 1)
> 3. Verificar que el H1 nuevo aparece en el HTML prerendizado de la home
> 4. Verificar que la sección de problemas renderiza y sus 3 links funcionan
> 5. Verificar que el FAQPage schema incluye la 4ª pregunta
> 6. Push
>
> **REPORTE (obligatorio al terminar):**
> - Lista de archivos modificados con resumen de cambios
> - El resultado del grep del paso 1 y qué se reemplazó
> - Confirmación de las 6 verificaciones
> - Cualquier cosa que hayas encontrado distinta a lo que describe el informe
>
> No sigas con el Sprint 2 hasta que los TL revisen este reporte.

---

## CIERRE (nota de los TL)

Este reposicionamiento no es un cambio cosmético: es alinear el sitio con cómo piensa y busca el cliente real argentino. La evidencia (nuestro propio GSC + el mercado) dice que el tráfico entra por lenguaje simple y de problema. El sitio técnico ya está — ahora lo hacemos hablar en criollo sin perder la solidez.

El orden importa: primero el index (Sprint 1), porque es la página con más impresiones (283) y la que define el posicionamiento de todo lo demás. Después el CTR de lo que ya rankea (Sprint 2, resultado rápido), después la profundidad (Sprint 3), y recién al final los idiomas (Sprint 4).

Vincenzo: tu instinto sobre las palabras simples estaba validado por los datos antes de que lo pidieras. Esto es construir sobre esa intuición con método.
