<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>

    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Show de manipulación láser único en Latinoamérica. 15 años transformando fiestas nacionales, eventos corporativos y festivales con tecnología de vanguardia.">
    
    <meta property="og:title" content="DK LASERMAN | El Show Láser #1 de Argentina">
    <meta property="og:description" content="El único espectáculo de manipulación láser en vivo de Latinoamérica para eventos de alto nivel.">
    <meta property="og:image" content="https://laserman.com.ar/wp-content/uploads/2025/12/Video_Realista_Backstage_Subida_Escenario.mp4_snapshot_00.07.721.jpg">
    <meta property="og:type" content="website">

    <?php wp_head(); ?>
    
    <!-- =================================================================== -->
    <!-- DATA LAYER INITIALIZATION - ANTES DE GTM -->
    <!-- =================================================================== -->
    <script>
    (function() {
      'use strict';
      
      // Inicializar dataLayer
      window.dataLayer = window.dataLayer || [];

      // Detectar tipo de página automáticamente
      function detectPageCategory() {
        var path = window.location.pathname.toLowerCase();
        
        if (path === '/' || path === '/index.php' || path === '/inicio') {
          return 'home';
        } else if (path.indexOf('show') !== -1) {
          return 'show';
        } else if (path.indexOf('presupuesto') !== -1) {
          return 'presupuesto';
        } else if (path.indexOf('/dk') !== -1) {
          return 'dk';
        } else if (path.indexOf('contacto') !== -1) {
          return 'contacto';
        }
        return 'otro';
      }

      function detectPageType() {
        var path = window.location.pathname.toLowerCase();
        
        if (path === '/' || path.indexOf('inicio') !== -1) {
          return 'landing';
        } else if (path.indexOf('gracias') !== -1 || path.indexOf('thank') !== -1) {
          return 'gracias';
        } else if (path.indexOf('formulario') !== -1 || path.indexOf('contacto') !== -1) {
          return 'formulario';
        }
        return 'seccion';
      }

      // Push inicial del Data Layer
      window.dataLayer.push({
        'event': 'dl_ready',
        'pageCategory': detectPageCategory(),
        'pageType': detectPageType(),
        'siteDomain': 'laserman.com.ar',
        'siteLanguage': 'es-AR',
        'currency': 'ARS'
      });

      // Función generadora de Event ID (para deduplicación)
      window.generateEventId = function() {
        var timestamp = Date.now();
        var random = Math.random().toString(36).substring(2, 12);
        return timestamp + '_' + random;
      };

      // Tracking de formularios
      window.trackFormSubmit = function(formData) {
        var eventId = window.generateEventId();
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
      };

      // Push de datos de usuario
      window.pushUserData = function(userData) {
        window.dataLayer.push({
          'event': 'user_data_ready',
          'userId': userData.userId || '',
          'em': userData.email || '',
          'ph': userData.phone || '',
          'fn': userData.firstName || '',
          'ln': userData.lastName || '',
          'event_id': window.generateEventId()
        });
      };

      // Eventos personalizados
      window.trackCustomEvent = function(eventName, eventData) {
        var eventId = window.generateEventId();
        var pushData = {
          'event': eventName,
          'event_id': eventId
        };

        for (var key in eventData) {
          if (eventData.hasOwnProperty(key)) {
            pushData[key] = eventData[key];
          }
        }

        window.dataLayer.push(pushData);
      };

      // Actualización de consentimiento
      window.updateConsent = function(consentOptions) {
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
      };

    })();
    </script>
    
    <!-- =================================================================== -->
    <!-- GOOGLE CONSENT MODE V2 DEFAULT -->
    <!-- =================================================================== -->
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}

      gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'granted',
        'functionality_storage': 'granted',
        'personalization_storage': 'granted',
        'security_storage': 'granted',
        'wait_for_update': 500
      });
    </script>

    <!-- =================================================================== -->
    <!-- GOOGLE TAG MANAGER -->
    <!-- =================================================================== -->
    <script>
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://marremix.laserman.com.ar/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TNM9JZ3S');
    </script>
    <!-- End Google Tag Manager -->
    
    <style>
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        body {
            background-color: #090f0a;
            color: #ffffff;
            font-family: 'DM Sans', sans-serif;
            overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 {
            letter-spacing: -0.02em;
        }

        .neon-glow {
            text-shadow: 0 0 10px rgba(0, 255, 29, 0.5), 0 0 20px rgba(0, 255, 29, 0.3);
        }
        .neon-box {
            box-shadow: 0 0 30px rgba(0, 255, 29, 0.2);
        }
        
        .bg-pattern {
            background-image: 
                radial-gradient(circle at 20% 50%, rgba(0, 255, 29, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, rgba(0, 255, 29, 0.03) 0%, transparent 50%);
        }
        
        .fade-up {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-up.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .card-hover {
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .card-hover:hover {
            transform: translateY(-8px);
        }
        
        .mobile-menu {
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            pointer-events: none;
        }
        .mobile-menu.open {
            transform: translateX(0);
            pointer-events: auto;
        }

        @media (max-width: 767px) {
            .section-mobile-adjust {
                padding-left: 1rem !important;
                padding-right: 1rem !important;
            }
            .grid-mobile-adjust {
                gap: 0.5rem !important;
            }
            .card-mobile-adjust {
                padding: 1.25rem !important;
            }
        }
        
        @keyframes glowPulse {
            0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 29, 0.3); }
            50% { box-shadow: 0 0 40px rgba(0, 255, 29, 0.6); }
        }
        .animate-glow-pulse {
            animation: glowPulse 2s ease-in-out infinite;
        }
        
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #090f0a; }
        ::-webkit-scrollbar-thumb { background: #00ff1d33; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #00ff1d66; }
    </style>
</head>

<body <?php body_class('bg-pattern'); ?>>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://marremix.laserman.com.ar/ns.html?id=GTM-TNM9JZ3S"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<?php wp_body_open(); ?>

<?php $data = dk_get_site_data(); ?>

<header id="header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" class="flex items-center gap-3 group">
            <div class="w-2 h-2 bg-neon rounded-full animate-pulse shadow-[0_0_10px_#00ff1d]"></div>
            <span class="font-display font-bold text-lg tracking-wider">
                DK <span class="text-neon neon-glow">LASERMAN</span>
            </span>
        </a>
        
        <nav class="hidden md:flex items-center gap-8">
            <a href="#servicios" class="text-[10px] text-white/40 hover:text-neon transition-colors uppercase tracking-[0.3em]">Servicios</a>
            <a href="#galeria" class="text-[10px] text-white/40 hover:text-neon transition-colors uppercase tracking-[0.3em]">Videos</a>
            <a href="#clientes" class="text-[10px] text-white/40 hover:text-neon transition-colors uppercase tracking-[0.3em]">Trayectoria</a>
            <a href="#contacto" class="px-6 py-2 bg-neon text-black text-[9px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
                Cotizar
            </a>
        </nav>
        
        <button class="md:hidden text-white p-2" onclick="toggleMobileMenu()">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
    </div>
</header>

<div id="mobileMenu" class="mobile-menu fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center gap-8">
    <button onclick="toggleMobileMenu()" class="absolute top-6 right-6 text-white/50 hover:text-neon transition-colors">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    </button>
    <a href="#servicios" onclick="toggleMobileMenu()" class="text-2xl font-display font-bold text-white hover:text-neon transition-colors">Servicios</a>
    <a href="#galeria" onclick="toggleMobileMenu()" class="text-2xl font-display font-bold text-white hover:text-neon transition-colors">Videos</a>
    <a href="#clientes" onclick="toggleMobileMenu()" class="text-2xl font-display font-bold text-white hover:text-neon transition-colors">Trayectoria</a>
    <a href="#testimonios" onclick="toggleMobileMenu()" class="text-2xl font-display font-bold text-white hover:text-neon transition-colors">Testimonios</a>
    <a href="#contacto" onclick="toggleMobileMenu()" class="px-8 py-3 bg-neon text-black font-bold uppercase tracking-wide hover:bg-white transition-colors">Cotizar Ahora</a>
</div>

<main>
