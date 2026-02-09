// ============================================================
// DATA LAYER PARA LASERMAN.COM.AR
// Este codigo va en WPCode como snippet de Header
// ============================================================

// 1. GENERAR EVENT_ID UNICO (fundamental para deduplicacion)
// Sin esto, Meta no puede deduplicar Browser vs Server = eventos dobles
function generateEventId() {
    return Date.now().toString(36) + '.' + Math.random().toString(36).substr(2, 9);
}

// 2. OBTENER COOKIES DE FACEBOOK (fbp y fbc)
function getFbp() {
    var match = document.cookie.match(/(^|;)\s*_fbp=([^;]+)/);
    return match ? match[2] : '';
}

function getFbc() {
    var match = document.cookie.match(/(^|;)\s*_fbc=([^;]+)/);
    if (match) return match[2];
    // Si no hay cookie _fbc, intentar construirla desde fbclid en la URL
    var params = new URLSearchParams(window.location.search);
    var fbclid = params.get('fbclid');
    if (fbclid) {
        return 'fb.1.' + Date.now() + '.' + fbclid;
    }
    return '';
}

// 3. INICIALIZAR DATA LAYER
window.dataLayer = window.dataLayer || [];

// 4. PUSH INICIAL EN CADA PAGINA (antes de que GTM cargue)
// Esto alimenta las variables DL - Event ID, DL - fbp, DL - fbc, etc.
(function() {
    var pageEventId = generateEventId();

    window.dataLayer.push({
        'event_id': pageEventId,
        'fbp': getFbp(),
        'fbc': getFbc(),
        'user_agent': navigator.userAgent,
        'page_type': document.location.pathname === '/' ? 'home' : 'page',
        'page_title': document.title
    });
})();

// ============================================================
// 5. FUNCIONES PARA DISPARAR EVENTOS CUSTOM
// Cada evento genera su propio event_id unico
// ============================================================

// Clic en WhatsApp
function trackWhatsApp() {
    window.dataLayer.push({
        'event': 'contact_whatsapp_click',
        'event_id': generateEventId(),
        'content_name': 'WhatsApp_Home',
        'value': 1000,
        'currency': 'ARS'
    });
}

// Envio de formulario (se llama desde el form handler)
function trackFormSubmit(userData) {
    window.dataLayer.push({
        'event': 'form_submit',
        'event_id': generateEventId(),
        'em': userData.email || '',
        'ph': userData.phone || '',
        'fn': userData.firstName || '',
        'ln': userData.lastName || '',
        'content_name': 'Formulario_Web',
        'value': 0,
        'currency': 'ARS'
    });
}

// ============================================================
// 6. DETECTAR CLICS EN WHATSAPP AUTOMATICAMENTE
// Busca links a wa.me y botones de WhatsApp
// ============================================================
document.addEventListener('DOMContentLoaded', function() {

    // Detectar clics en links de WhatsApp (wa.me o api.whatsapp.com)
    document.addEventListener('click', function(e) {
        var target = e.target.closest('a');
        if (target) {
            var href = target.getAttribute('href') || '';
            if (href.indexOf('wa.me') !== -1 || href.indexOf('whatsapp.com') !== -1) {
                trackWhatsApp();
            }
        }
    });

    // Detectar clic en widget flotante de WhatsApp (boton verde)
    // Esto cubre widgets como WhatsApp Chat, Joinchat, etc.
    document.addEventListener('click', function(e) {
        var el = e.target;
        // Buscar en el elemento y sus padres
        for (var i = 0; i < 5; i++) {
            if (!el) break;
            var classes = (el.className || '').toString().toLowerCase();
            var id = (el.id || '').toLowerCase();
            var href = (el.getAttribute('href') || '').toLowerCase();
            if (classes.indexOf('whatsapp') !== -1 ||
                id.indexOf('whatsapp') !== -1 ||
                classes.indexOf('wa-chat') !== -1 ||
                classes.indexOf('joinchat') !== -1 ||
                href.indexOf('wa.me') !== -1 ||
                href.indexOf('whatsapp') !== -1) {
                trackWhatsApp();
                return;
            }
            el = el.parentElement;
        }
    });

    // Detectar clics en los 3 botones de segmento
    document.addEventListener('click', function(e) {
        var target = e.target.closest('a, button, [role="button"]');
        if (!target) return;
        var text = (target.textContent || '').trim();

        if (text.indexOf('BOLICHE') !== -1 || text.indexOf('DISCOTECA') !== -1) {
            window.dataLayer.push({
                'event': 'segment_click',
                'event_id': generateEventId(),
                'content_name': 'Segmento_Boliche',
                'segment_type': 'boliche'
            });
        }
        if (text.indexOf('CULTURA') !== -1 || text.indexOf('MUNICIPALIDAD') !== -1) {
            window.dataLayer.push({
                'event': 'segment_click',
                'event_id': generateEventId(),
                'content_name': 'Segmento_Cultura',
                'segment_type': 'cultura'
            });
        }
        if (text.indexOf('PRODUCTOR') !== -1 || text.indexOf('EMPRESA') !== -1) {
            window.dataLayer.push({
                'event': 'segment_click',
                'event_id': generateEventId(),
                'content_name': 'Segmento_Productor',
                'segment_type': 'productor'
            });
        }
    });
});
