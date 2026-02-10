/**
 * =============================================================================
 * DATA LAYER SPECIFICATION - laserman.com.ar
 * =============================================================================
 *
 * Este archivo define la estructura completa del Data Layer que debe
 * implementarse en el sitio web ANTES de la inicialización de GTM.
 *
 * IMPORTANTE: El dataLayer.push() con los datos del usuario y la página
 * debe ejecutarse ANTES del snippet de GTM para que las variables estén
 * disponibles en el primer page_view.
 *
 * Dominio: laserman.com.ar
 * GTM Web Container: GTM-TNM9JZ3S
 * GTM Server Container: GTM-T2ZQP7WV
 * Stape Server URL: https://marremix.laserman.com.ar
 * =============================================================================
 */

// =============================================================================
// 1. INICIALIZACIÓN DEL DATA LAYER (ANTES del snippet de GTM)
// =============================================================================

window.dataLayer = window.dataLayer || [];

/**
 * Push inicial con datos de la página y consentimiento por defecto.
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
// 2. FUNCIÓN GENERADORA DE EVENT ID (Deduplicación Web <-> Server)
// =============================================================================

/**
 * Genera un event_id único para deduplicación entre el pixel del navegador
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
// 3. DATOS DE USUARIO (cuando estén disponibles)
// =============================================================================

/**
 * Push de datos de usuario. Ejecutar cuando se disponga de datos del usuario
 * (login, formulario completado, etc.)
 *
 * IMPORTANTE: Los datos de usuario se envían en texto plano. El hashing
 * SHA-256 se realiza en el servidor (Stape/CAPI) automáticamente.
 * Si prefieres enviar hasheados desde el cliente, aplica SHA-256 lowercase
 * antes del push.
 */
window.dataLayer.push({
  'event': 'user_data_ready',
  'userId': '',                     // ID interno del usuario (si aplica)
  'em': '',                         // Email del usuario (ej: usuario@email.com)
  'ph': '',                         // Teléfono con código país (ej: +5491155551234)
  'fn': '',                         // Nombre (ej: Juan)
  'ln': '',                         // Apellido (ej: Pérez)
  'event_id': generateEventId()     // ID único para deduplicación
});

// =============================================================================
// 4. EVENTOS ESTÁNDAR
// =============================================================================

// -----------------------------------------------------------------------------
// 4.1 PAGE VIEW - Se dispara automáticamente con el trigger de GTM
//     No requiere push manual. GTM lo maneja con el trigger "All Pages".
//     El event_id se genera en GTM via Custom JavaScript Variable.
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 4.2 VIEW CONTENT - HOME (se dispara al cargar la página Home "/")
//     GTM lo maneja con el trigger PV - Home (Page Path = "/")
//     No requiere push manual.
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 4.3 VIEW CONTENT - SHOW (se dispara al cargar páginas con "show" en la URL)
//     GTM lo maneja con el trigger PV - Show Section (Page Path contains "show")
//     No requiere push manual.
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 4.4 CONTACT - WHATSAPP
//     GTM lo maneja con el trigger Click - WhatsApp (Click URL contains "wa.me")
//     No requiere push manual.
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 4.5 LEAD - Envío de formulario
//     Disparar cuando el usuario completa y envía un formulario de contacto.
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
//   lastName: 'Pérez'
// });

// -----------------------------------------------------------------------------
// 4.6 LEAD DK - Página de presentación DK
//     GTM lo maneja con el trigger PV - DK (Page Path contains "/dk/")
//     No requiere push manual.
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 4.7 PURCHASE - Presupuesto
//     GTM lo maneja con el trigger PV - Presupuesto (Page Path contains "presupuesto2026")
//     No requiere push manual.
// -----------------------------------------------------------------------------

// =============================================================================
// 5. EVENTOS PERSONALIZADOS (para uso futuro)
// =============================================================================

/**
 * Función genérica para disparar eventos custom a través del Data Layer.
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

// Ejemplo:
// trackCustomEvent('video_play', { content_name: 'Video Show Laser', value: 100 });

// =============================================================================
// 6. SNIPPET DE INSTALACIÓN DE GTM (colocar después de los pushes iniciales)
// =============================================================================

/**
 * Colocar en el <head> del sitio, DESPUÉS del dataLayer.push inicial:
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
 * Colocar en el <body> (justo después de la apertura):
 *
 * <!-- Google Tag Manager (noscript) -->
 * <noscript><iframe src="https://marremix.laserman.com.ar/ns.html?id=GTM-TNM9JZ3S"
 * height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
 * <!-- End Google Tag Manager (noscript) -->
 */

// =============================================================================
// 7. ACTUALIZACIÓN DE CONSENTIMIENTO (cuando el usuario acepta cookies)
// =============================================================================

/**
 * Llamar esta función cuando el usuario acepte las cookies/consentimiento.
 * Típicamente se integra con el banner de cookies (CookieBot, OneTrust, etc.)
 */
function updateConsent(consentOptions) {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  gtag('consent', 'update', {
    'ad_storage': consentOptions.adStorage || 'denied',
    'ad_user_data': consentOptions.adUserData || 'denied',
    'ad_personalization': consentOptions.adPersonalization || 'denied',
    'analytics_storage': consentOptions.analyticsStorage || 'granted'
  });

  // Disparar evento para que GTM sepa que se actualizó el consentimiento
  window.dataLayer.push({
    'event': 'consent_update'
  });
}

// Ejemplo cuando el usuario acepta todo:
// updateConsent({
//   adStorage: 'granted',
//   adUserData: 'granted',
//   adPersonalization: 'granted',
//   analyticsStorage: 'granted'
// });

// =============================================================================
// 8. TABLA DE VARIABLES CONSTANTES
// =============================================================================
/**
 * Las siguientes variables están configuradas como CONSTANTES en GTM.
 * NO se definen en el Data Layer sino directamente en GTM.
 * Se listan aquí como referencia:
 *
 * ┌──────────────────────────────┬────────────────────────────────────────────┐
 * │ NOMBRE EN GTM                │ VALOR                                     │
 * ├──────────────────────────────┼────────────────────────────────────────────┤
 * │ CONST - Facebook Pixel ID    │ 25699472449663830                         │
 * │ CONST - GA4 Measurement ID   │ G-J4JTN4JRE0                             │
 * │ CONST - Stape Server URL     │ https://marremix.laserman.com.ar          │
 * │ CONST - Cookie Domain        │ laserman.com.ar                           │
 * │ CONST - Currency Default     │ ARS                                       │
 * ├──────────────────────────────┼────────────────────────────────────────────┤
 * │ SOLO EN SERVER CONTAINER:    │                                           │
 * │ CONST - FB API Access Token  │ EAA0D5fYG7HQ... (token completo en GTM)  │
 * │ CONST - Facebook Pixel ID    │ 25699472449663830                         │
 * │ CONST - GA4 Measurement ID   │ G-J4JTN4JRE0                             │
 * │ CONST - Cookie Domain        │ laserman.com.ar                           │
 * │ CONST - Stape Server URL     │ https://marremix.laserman.com.ar          │
 * └──────────────────────────────┴────────────────────────────────────────────┘
 */
