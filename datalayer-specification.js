/**
 * =============================================================================
 * DATA LAYER SPECIFICATION - laserman.com.ar
 * =============================================================================
 *
 * Este archivo define la estructura completa del Data Layer que debe
 * implementarse en el sitio web ANTES de la inicializacion de GTM.
 *
 * IMPORTANTE: El dataLayer.push() con los datos del usuario y la pagina
 * debe ejecutarse ANTES del snippet de GTM para que las variables esten
 * disponibles en el primer page_view.
 *
 * Dominio: laserman.com.ar
 * GTM Web Container: GTM-TNM9JZ3S
 * GTM Server Container: GTM-T2ZQP7WV
 * Stape Server URL: https://marremix.laserman.com.ar
 * =============================================================================
 */

// =============================================================================
// 1. INICIALIZACION DEL DATA LAYER (ANTES del snippet de GTM)
// =============================================================================

window.dataLayer = window.dataLayer || [];

/**
 * Push inicial con datos de la pagina y consentimiento por defecto.
 * Este push DEBE ejecutarse ANTES del <script> de GTM.
 */
window.dataLayer.push({
  'event': 'dl_ready',
  'pageCategory': 'home',          // Valores: 'home', 'show', 'presupuesto', 'dk', 'contacto', 'otro'
  'pageType': 'landing',           // Valores: 'landing', 'formulario', 'gracias', 'seccion'
  'siteDomain': 'laserman.com.ar',
  'siteLanguage': 'es-AR',
  'currency': 'ARS'
});

// =============================================================================
// 2. FUNCION GENERADORA DE EVENT ID (Deduplicacion Web <-> Server)
// =============================================================================

/**
 * Genera un event_id unico para deduplicacion entre el pixel del navegador
 * y la Conversions API del servidor. Cada evento debe tener su propio ID.
 *
 * Formato: timestamp_randomString
 */
function generateEventId() {
  var timestamp = Date.now();
  var random = Math.random().toString(36).substring(2, 12);
  return timestamp + '_' + random;
}

// =============================================================================
// 3. DATOS DE USUARIO (cuando esten disponibles)
// =============================================================================

/**
 * Push de datos de usuario. Ejecutar cuando se disponga de datos del usuario
 * (login, formulario completado, etc.)
 *
 * IMPORTANTE: Los datos de usuario se envian en texto plano. El hashing
 * SHA-256 se realiza en el servidor (Stape/CAPI) automaticamente.
 */
window.dataLayer.push({
  'event': 'user_data_ready',
  'userId': '',                     // ID interno del usuario (si aplica)
  'em': '',                         // Email del usuario (ej: usuario@email.com)
  'ph': '',                         // Telefono con codigo pais (ej: +5491155551234)
  'fn': '',                         // Nombre (ej: Juan)
  'ln': '',                         // Apellido (ej: Perez)
  'event_id': generateEventId()     // ID unico para deduplicacion
});

// =============================================================================
// 4. EVENTOS ESTANDAR
// =============================================================================

// -----------------------------------------------------------------------------
// 4.1 PAGE VIEW - Se dispara automaticamente con el trigger de GTM
//     No requiere push manual. GTM lo maneja con el trigger "All Pages".
//     El event_id se genera en GTM via Custom JavaScript Variable.
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 4.2 SECTION VIEW - Se dispara cuando el usuario hace scroll a una seccion
//     NOTA: Reemplaza los triggers por URL (PV - Show, PV - Home) porque
//     el sitio es una SINGLE PAGE en "/" - los triggers por URL nunca disparaban.
//     Implementado via IntersectionObserver en Fuctions.php
// -----------------------------------------------------------------------------
// trackCustomEvent('section_view', {
//   content_name: 'show-laserman',    // servicios, show-laserman, videos, contacto, clientes
//   content_category: 'seccion',
//   value: 500,                       // show-laserman=500, otros=300
//   currency: 'ARS'
// });

// -----------------------------------------------------------------------------
// 4.3 SEGMENT CLICK - Se dispara cuando el usuario hace click en un boton de segmento
//     Los 3 publicos: boliche, politico, productor
// -----------------------------------------------------------------------------
// trackCustomEvent('segment_click', {
//   segment_type: 'boliche',          // 'boliche', 'politico', 'productor'
//   content_category: 'segmentacion',
//   content_name: 'Boton_Segmento_boliche'
// });

// -----------------------------------------------------------------------------
// 4.4 VIDEO PLAY - Se dispara cuando el usuario inicia un video
// -----------------------------------------------------------------------------
// trackCustomEvent('video_play', {
//   content_name: 'Show Laserman',
//   content_category: 'video',
//   video_id: 'laserman'
// });

// -----------------------------------------------------------------------------
// 4.5 VIDEO PROGRESS - Se dispara en milestones 25%, 50%, 75%, 100%
// -----------------------------------------------------------------------------
// trackCustomEvent('video_progress', {
//   content_name: 'Show Laserman',
//   content_category: 'video',
//   video_id: 'laserman',
//   video_percent: 100,               // 25, 50, 75, 100
//   value: 500,                       // 100=500, 75=300, 50=200, 25=100
//   currency: 'ARS'
// });

// -----------------------------------------------------------------------------
// 4.6 WHATSAPP CLICK
//     GTM tambien lo maneja con Click - WhatsApp (Click URL contains "wa.me")
// -----------------------------------------------------------------------------
// trackCustomEvent('whatsapp_click', {
//   button_location: 'contacto',
//   contact_method: 'whatsapp',
//   content_name: 'WhatsApp_contacto',
//   value: 1000,
//   currency: 'ARS'
// });

// -----------------------------------------------------------------------------
// 4.7 LEAD - Envio de formulario
//     Disparar cuando el usuario completa y envia un formulario de contacto.
// -----------------------------------------------------------------------------
function trackFormSubmit(formData) {
  var eventId = generateEventId();
  window.dataLayer.push({
    'event': 'form_submit',
    'event_id': eventId,
    'em': formData.email || '',
    'ph': formData.phone || '',
    'fn': formData.firstName || '',
    'ln': formData.lastName || '',
    'content_name': 'Formulario Web',
    'content_category': 'formulario',
    'currency': 'ARS',
    'value': 0
  });
}

// Ejemplo de uso:
// trackFormSubmit({
//   email: 'usuario@email.com',
//   phone: '+5491155551234',
//   firstName: 'Juan',
//   lastName: 'Perez'
// });

// -----------------------------------------------------------------------------
// 4.8 PHONE CLICK - Click en numero de telefono
// -----------------------------------------------------------------------------
// trackCustomEvent('phone_click', {
//   contact_method: 'phone',
//   content_name: 'Telefono',
//   value: 800,
//   currency: 'ARS'
// });

// -----------------------------------------------------------------------------
// 4.9 SOCIAL CLICK - Click en redes sociales
// -----------------------------------------------------------------------------
// trackCustomEvent('social_click', {
//   platform: 'instagram',
//   content_name: 'Instagram_Click'
// });

// -----------------------------------------------------------------------------
// 4.10 SERVICE EXPAND - Cuando el usuario expande info de un servicio
// -----------------------------------------------------------------------------
// trackCustomEvent('service_expand', {
//   content_name: 'laserman',         // laserman, tuneles, proyecciones, paquete
//   content_category: 'servicios'
// });

// =============================================================================
// 5. EVENTOS PERSONALIZADOS
// =============================================================================

/**
 * Funcion generica para disparar eventos custom a traves del Data Layer.
 *
 * @param {string} eventName - Nombre del evento
 * @param {object} eventData - Datos adicionales del evento
 */
function trackCustomEvent(eventName, eventData) {
  var eventId = generateEventId();
  var pushData = {
    'event': eventName,
    'event_id': eventId
  };

  // Merge eventData into pushData
  for (var key in eventData) {
    if (eventData.hasOwnProperty(key)) {
      pushData[key] = eventData[key];
    }
  }

  window.dataLayer.push(pushData);
}

// =============================================================================
// 6. SNIPPET DE INSTALACION DE GTM (colocar despues de los pushes iniciales)
// =============================================================================

/**
 * Colocar en el <head> del sitio, DESPUES del dataLayer.push inicial:
 *
 * <!-- Google Consent Mode v2 Default -->
 * <script>
 *   window.dataLayer = window.dataLayer || [];
 *   function gtag(){dataLayer.push(arguments);}
 *
 *   gtag('consent', 'default', {
 *     'ad_storage': 'denied',
 *     'ad_user_data': 'denied',
 *     'ad_personalization': 'denied',
 *     'analytics_storage': 'granted',
 *     'functionality_storage': 'granted',
 *     'personalization_storage': 'granted',
 *     'security_storage': 'granted',
 *     'wait_for_update': 500
 *   });
 * </script>
 *
 * <!-- Google Tag Manager -->
 * <script>
 *   (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
 *   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
 *   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
 *   'https://marremix.laserman.com.ar/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
 *   })(window,document,'script','dataLayer','GTM-TNM9JZ3S');
 * </script>
 * <!-- End Google Tag Manager -->
 *
 * NOTA: El src apunta al subdominio de Stape (marremix.laserman.com.ar)
 * en lugar de www.googletagmanager.com para server-side tagging.
 *
 * Colocar en el <body> (justo despues de la apertura):
 *
 * <!-- Google Tag Manager (noscript) -->
 * <noscript><iframe src="https://marremix.laserman.com.ar/ns.html?id=GTM-TNM9JZ3S"
 * height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
 * <!-- End Google Tag Manager (noscript) -->
 */

// =============================================================================
// 7. ACTUALIZACION DE CONSENTIMIENTO (cuando el usuario acepta cookies)
// =============================================================================

function updateConsent(consentOptions) {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  gtag('consent', 'update', {
    'ad_storage': consentOptions.adStorage || 'denied',
    'ad_user_data': consentOptions.adUserData || 'denied',
    'ad_personalization': consentOptions.adPersonalization || 'denied',
    'analytics_storage': consentOptions.analyticsStorage || 'granted'
  });

  window.dataLayer.push({
    'event': 'consent_update'
  });
}

// =============================================================================
// 8. TABLA DE VARIABLES CONSTANTES
// =============================================================================
/**
 * Las siguientes variables estan configuradas como CONSTANTES en GTM.
 * NO se definen en el Data Layer sino directamente en GTM.
 *
 * +---------------------------------+--------------------------------------------+
 * | NOMBRE EN GTM                   | VALOR                                      |
 * +---------------------------------+--------------------------------------------+
 * | CONST - Facebook Pixel ID       | 25699472449663830                          |
 * | CONST - GA4 Measurement ID      | G-J4JTN4JRE0                              |
 * | CONST - Stape Server URL        | https://marremix.laserman.com.ar           |
 * | CONST - Cookie Domain           | laserman.com.ar                            |
 * | CONST - Currency Default        | ARS                                        |
 * +---------------------------------+--------------------------------------------+
 * | SOLO EN SERVER CONTAINER:       |                                            |
 * | CONST - FB API Access Token     | EAA0D5fYG7HQ... (token completo en GTM)   |
 * +---------------------------------+--------------------------------------------+
 */

// =============================================================================
// 9. FLUJO DE DATOS COMPLETO
// =============================================================================
/**
 * Usuario interactua en la pagina
 *     |
 *     v
 * JavaScript push al dataLayer (con event_id unico)
 *     |
 *     v
 * GTM Web Container (GTM-TNM9JZ3S) recibe el evento
 *     |
 *     +---> GA4 Tag envia a marremix.laserman.com.ar (Stape)
 *     |         |
 *     |         v
 *     |     GTM Server Container (GTM-T2ZQP7WV) recibe
 *     |         |
 *     |         +---> GA4 (Google Analytics 4)
 *     |         +---> Meta CAPI (Conversions API con mismo event_id)
 *     |
 *     +---> Meta Pixel (browser-side, con mismo event_id)
 *
 * DEDUPLICACION: Ambos (Pixel browser + CAPI server) envian el mismo event_id.
 * Meta reconoce el duplicado y cuenta solo una vez.
 *
 * SEGMENTOS TRACKEADOS:
 * - boliche: Duenos de discotecas/boliches
 * - politico: Gobiernos/municipalidades/politicos
 * - productor: Productores/empresas
 *
 * EMBUDO DE CONVERSION:
 * 1. page_view (llega a la pagina)
 * 2. segment_click (elige su tipo: boliche/politico/productor)
 * 3. section_view (ve las secciones de servicios/show)
 * 4. video_play -> video_progress 25% -> 50% -> 75% -> 100%
 * 5. whatsapp_click o form_submit (contacta)
 * 6. page_view /gracias (conversion completada)
 */
