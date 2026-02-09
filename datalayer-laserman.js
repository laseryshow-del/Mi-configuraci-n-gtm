// ============================================================
// DATA LAYER COMPLETO PARA LASERMAN.COM.AR
// Va en WPCode como snippet JavaScript en el HEADER
// Prioridad: ALTA (debe cargar ANTES que GTM)
//
// Basado en documentacion oficial de Stape:
// - https://stape.io/blog/end-to-end-guide-on-data-layer-in-google-tag-manager
// - https://stape.io/blog/how-to-set-up-facebook-event-deduplication-in-google-tag-manager
// ============================================================

// INICIALIZAR DATA LAYER (debe ir antes del script de GTM)
window.dataLayer = window.dataLayer || [];

// -----------------------------------------------------------
// FUNCION: Generar Event ID unico para deduplicacion
// Meta necesita el MISMO event_id en Pixel (browser) y CAPI (server)
// Sin esto, la deduplicacion da 0%
// Formato recomendado por Stape: timestamp.random
// -----------------------------------------------------------
function stapeGenerateEventId() {
    return Date.now().toString(36) + '.' + Math.random().toString(36).substring(2, 11);
}

// -----------------------------------------------------------
// FUNCION: Leer cookie por nombre
// -----------------------------------------------------------
function stapeGetCookie(name) {
    var match = document.cookie.match(new RegExp('(^|;\\s*)' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : '';
}

// -----------------------------------------------------------
// FUNCION: Obtener fbclid desde la URL (para construir _fbc)
// -----------------------------------------------------------
function stapeGetFbc() {
    var fbc = stapeGetCookie('_fbc');
    if (fbc) return fbc;
    try {
        var params = new URLSearchParams(window.location.search);
        var fbclid = params.get('fbclid');
        if (fbclid) {
            return 'fb.1.' + Date.now() + '.' + fbclid;
        }
    } catch(e) {}
    return '';
}

// -----------------------------------------------------------
// PUSH INICIAL: datos base para TODAS las paginas
// Esto alimenta las variables de GTM:
//   {{DL - Event ID}} → event_id
//   {{DL - fbp}}      → _fbp cookie
//   {{DL - fbc}}      → _fbc cookie
//   {{JS - User Agent}} → user_agent
// -----------------------------------------------------------
(function() {
    var pageEventId = stapeGenerateEventId();
    var pagePath = window.location.pathname;
    var fbp = stapeGetCookie('_fbp');
    var fbc = stapeGetFbc();

    // Push base con event_id para el PageView
    window.dataLayer.push({
        'event_id': pageEventId,
        'user_agent': navigator.userAgent,
        'page_location': window.location.href,
        'page_path': pagePath,
        'page_title': document.title,
        'page_hostname': window.location.hostname,
        'page_referrer': document.referrer,
        'fbp': fbp,
        'fbc': fbc,
        'currency': 'ARS'
    });

    // -----------------------------------------------------------
    // EVENTOS AUTOMATICOS BASADOS EN LA PAGINA
    // Se disparan segun la URL que visita el usuario
    // -----------------------------------------------------------

    // HOME: ViewContent Home
    if (pagePath === '/' || pagePath === '/index.html' || pagePath === '/index.php') {
        window.dataLayer.push({
            'event': 'view_content_home',
            'event_id': stapeGenerateEventId(),
            'content_name': 'Home_General',
            'value': 300,
            'currency': 'ARS'
        });
    }

    // SHOW SECTION: ViewContent Show
    if (pagePath.indexOf('show') !== -1 || pagePath.indexOf('/show') !== -1) {
        window.dataLayer.push({
            'event': 'view_content_show',
            'event_id': stapeGenerateEventId(),
            'content_name': 'Seccion_Show',
            'value': 500,
            'currency': 'ARS'
        });
    }

    // DK: Lead DK
    if (pagePath.indexOf('/dk/') !== -1 || pagePath.indexOf('/dk') !== -1) {
        window.dataLayer.push({
            'event': 'lead_dk',
            'event_id': stapeGenerateEventId(),
            'content_name': 'Presentacion_DK',
            'value': 1200,
            'currency': 'ARS'
        });
    }

    // PRESUPUESTO: Purchase Presupuesto
    if (pagePath.indexOf('presupuesto') !== -1) {
        window.dataLayer.push({
            'event': 'purchase_presupuesto',
            'event_id': stapeGenerateEventId(),
            'content_name': 'Presupuesto_2026',
            'value': 2000,
            'currency': 'ARS'
        });
    }
})();

// -----------------------------------------------------------
// DETECCION DE CLICS (se activa cuando el DOM esta listo)
// -----------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {

    // -------------------------------------------------------
    // CLIC EN WHATSAPP
    // Detecta: links a wa.me, api.whatsapp.com, y widgets flotantes
    // -------------------------------------------------------
    document.addEventListener('click', function(e) {
        var el = e.target;

        // Buscar en el elemento y hasta 7 niveles de padres
        for (var i = 0; i < 7; i++) {
            if (!el) break;

            var href = (el.getAttribute && el.getAttribute('href')) || '';
            var classes = (el.className || '').toString().toLowerCase();
            var id = (el.id || '').toLowerCase();
            var ariaLabel = (el.getAttribute && el.getAttribute('aria-label')) || '';

            // Detectar por href (links directos)
            if (href.indexOf('wa.me') !== -1 ||
                href.indexOf('whatsapp.com') !== -1 ||
                href.indexOf('api.whatsapp') !== -1) {
                window.dataLayer.push({
                    'event': 'contact_whatsapp',
                    'event_id': stapeGenerateEventId(),
                    'content_name': 'WhatsApp_Home',
                    'value': 1000,
                    'currency': 'ARS'
                });
                return;
            }

            // Detectar por clase o ID (widgets flotantes)
            if (classes.indexOf('whatsapp') !== -1 ||
                id.indexOf('whatsapp') !== -1 ||
                classes.indexOf('wa-chat') !== -1 ||
                classes.indexOf('joinchat') !== -1 ||
                classes.indexOf('wa_btn') !== -1 ||
                classes.indexOf('wh-widget') !== -1 ||
                ariaLabel.toLowerCase().indexOf('whatsapp') !== -1) {
                window.dataLayer.push({
                    'event': 'contact_whatsapp',
                    'event_id': stapeGenerateEventId(),
                    'content_name': 'WhatsApp_Home',
                    'value': 1000,
                    'currency': 'ARS'
                });
                return;
            }

            el = el.parentElement;
        }
    });

    // -------------------------------------------------------
    // CLICS EN LOS 3 BOTONES DE SEGMENTO
    // Boliche / Cultura / Productor
    // -------------------------------------------------------
    document.addEventListener('click', function(e) {
        var el = e.target;
        for (var i = 0; i < 5; i++) {
            if (!el) break;
            var text = (el.textContent || '').toUpperCase().trim();

            if (text.indexOf('BOLICHE') !== -1 || text.indexOf('DISCOTECA') !== -1) {
                window.dataLayer.push({
                    'event': 'segment_click',
                    'event_id': stapeGenerateEventId(),
                    'content_name': 'Segmento_Boliche',
                    'segment_type': 'boliche',
                    'value': 0,
                    'currency': 'ARS'
                });
                return;
            }
            if (text.indexOf('CULTURA') !== -1 || text.indexOf('MUNICIPALIDAD') !== -1) {
                window.dataLayer.push({
                    'event': 'segment_click',
                    'event_id': stapeGenerateEventId(),
                    'content_name': 'Segmento_Cultura',
                    'segment_type': 'cultura',
                    'value': 0,
                    'currency': 'ARS'
                });
                return;
            }
            if (text.indexOf('PRODUCTOR') !== -1 || text.indexOf('EMPRESA') !== -1) {
                window.dataLayer.push({
                    'event': 'segment_click',
                    'event_id': stapeGenerateEventId(),
                    'content_name': 'Segmento_Productor',
                    'segment_type': 'productor',
                    'value': 0,
                    'currency': 'ARS'
                });
                return;
            }
            el = el.parentElement;
        }
    });

    // -------------------------------------------------------
    // ENVIO DE FORMULARIO
    // Captura datos del usuario para mejorar EMQ
    // -------------------------------------------------------
    document.addEventListener('submit', function(e) {
        var form = e.target;
        var emailField = form.querySelector('input[type="email"], input[name*="email"], input[name*="correo"]');
        var phoneField = form.querySelector('input[type="tel"], input[name*="phone"], input[name*="tel"], input[name*="celular"]');
        var nameField = form.querySelector('input[name*="name"], input[name*="nombre"]');

        window.dataLayer.push({
            'event': 'form_submit',
            'event_id': stapeGenerateEventId(),
            'em': emailField ? emailField.value : '',
            'ph': phoneField ? phoneField.value : '',
            'fn': nameField ? nameField.value.split(' ')[0] : '',
            'ln': nameField && nameField.value.split(' ').length > 1 ? nameField.value.split(' ').slice(1).join(' ') : '',
            'content_name': 'Formulario_Web',
            'value': 0,
            'currency': 'ARS'
        });
    });
});
