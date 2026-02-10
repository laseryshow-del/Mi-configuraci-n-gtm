<?php
/**
 * DK Laserman Theme - Functions
 * @package DK_Laserman
 * @version 2026.02
 * ACTUALIZADO: Integrado con Data Layer GTM + Stape + Meta CAPI
 */

if (!defined('ABSPATH')) exit;

/**
 * Theme Setup
 */
function dk_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));

    register_nav_menus(array(
        'primary' => __('Menu Principal', 'dk-laserman'),
    ));
}
add_action('after_setup_theme', 'dk_setup');

/**
 * Enqueue Scripts & Styles
 */
function dk_scripts() {
    // Google Fonts
    wp_enqueue_style('dk-fonts', 'https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&family=DM+Sans:wght@100..1000&display=swap', array(), null);

    // Tailwind CSS
    wp_enqueue_script('tailwindcss', 'https://cdn.tailwindcss.com', array(), '3.4', false);

    // Theme styles
    wp_enqueue_style('dk-style', get_stylesheet_uri(), array(), '2026.02');

    // Tailwind config
    wp_add_inline_script('tailwindcss', "
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['DM Sans', 'sans-serif'],
                        display: ['Unbounded', 'sans-serif'],
                    },
                    colors: {
                        neon: '#00ff1d',
                        dark: '#090f0a',
                        surface: '#0c140d'
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        },
                        glowPulse: {
                            '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 29, 0.3)' },
                            '50%': { boxShadow: '0 0 40px rgba(0, 255, 29, 0.6)' },
                        }
                    }
                }
            }
        }
    ");
}
add_action('wp_enqueue_scripts', 'dk_scripts');

/**
 * Site Data Configuration
 */
function dk_get_site_data() {
    $uploads = 'https://laserman.com.ar/wp-content/uploads/2025';
    $uploads_old = 'https://laserman.com.ar/inicio/wp-content/uploads/2025/08';

    return array(
        'whatsapp' => '+5492995920418',
        'whatsapp_display' => '299 592 0418',
        'email' => 'info@laserman.com.ar',
        'phone' => '+54 9 299 592 0418',
        'location' => 'Neuquen, Patagonia Argentina',
        'instagram' => 'https://www.instagram.com/laseryshow/',
        'hero_image' => 'https://laserman.com.ar/wp-content/uploads/2026/01/Video_Realista_Backstage_Subida_Escenario.mp4_snapshot_00.07.721.jpg',
        'tuneles_image' => $uploads . '/12/Imagen-de-WhatsApp-2025-05-12-a-las-20.07.43_2440bd38.jpg',
        'mapping_image' => $uploads . '/12/IMG-20251104-WA0002.jpg',
        'sponsors_image' => $uploads . '/12/IMG-20250809-WA00121.jpg',
        'custom_image' => $uploads . '/12/Generated-Image-October-29-2025-8_45AM-e1765355240381.png',
        'laserman_video' => 'https://youtube.com/shorts/UejPB4htjps',
        'tuneles_video' => 'https://youtube.com/shorts/ToSEWX40VYk',
        'logo_rionegro' => 'https://laserman.com.ar/wp-content/uploads/2026/01/LOGO-rio-negro.png',
        'logo_misiones' => 'https://laserman.com.ar/wp-content/uploads/2026/01/LOGO-misiones.png',
        'logo_formosa' => 'https://laserman.com.ar/wp-content/uploads/2026/01/LOGO-formosa.png',
        'logo_neuquen' => 'https://laserman.com.ar/wp-content/uploads/2026/01/LOGO-NEUQUEN2.png',
        'brand_logos' => array(
            $uploads_old . '/klipartz.com_.png',
            $uploads_old . '/sancor-2-scaled.png',
            $uploads_old . '/banco-patagonia.png',
            $uploads_old . '/bpn-nuestro.png',
            $uploads_old . '/logo-casinos-del-rio.png',
        ),
        'stats' => array(
            array('number' => '15+', 'label' => 'Anos'),
            array('number' => '50+', 'label' => 'Fiestas Nacionales'),
            array('number' => '∞', 'label' => 'Momentos Unicos'),
        ),
        'services' => array(
            array(
                'id' => 'laserman',
                'icon' => '',
                'title' => 'Show Laserman',
                'description' => 'El unico en Argentina - Performance futurista con rayos laser en vivo',
                'image' => 'https://laserman.com.ar/wp-content/uploads/2026/01/ChatGPT-Image-20-ene-2026-05_23_02-p.m.png',
            ),
            array(
                'id' => 'tuneles',
                'icon' => '',
                'title' => 'Tuneles de Ingreso',
                'description' => 'Transforma la entrada en una experiencia inmersiva de luz',
                'image' => $uploads . '/12/Imagen-de-WhatsApp-2025-05-12-a-las-20.07.43_2440bd38.jpg',
            ),
            array(
                'id' => 'proyecciones',
                'icon' => '',
                'title' => 'Proyecciones de Alto Impacto',
                'description' => 'Logos, animaciones y mensajes proyectados en edificios y montanas',
                'image' => $uploads . '/12/IMG-20250809-WA00121.jpg',
            ),
        ),
    );
}

/**
 * =============================================================================
 * TRACKING SCRIPTS - INTEGRADO CON DATA LAYER GTM
 * Todos los eventos van al dataLayer -> GTM Web -> GTM Server (Stape)
 * =============================================================================
 */
function laserman_tracking_2026() {
    ?>
    <script>
    (function() {
        'use strict';

        /**
         * Helper para normalizar telefonos argentinos
         */
        function normalizePhoneAR(phone) {
            if (!phone) return '';
            phone = phone.replace(/[^0-9]/g, '');

            if (phone.startsWith('54')) return '+' + phone;
            if (phone.startsWith('0')) return '+54' + phone.substring(1);
            if (phone.length >= 10 && !phone.startsWith('54')) return '+54' + phone;

            return phone;
        }

        document.addEventListener('DOMContentLoaded', function() {

            // =========================================================
            // 1. TRACKING DE SEGMENTOS - Los 3 botones principales
            //    boliche / politico / productor
            // =========================================================
            document.querySelectorAll('.segment-btn, a[data-segment]').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    var segment = this.getAttribute('data-segment');
                    if (segment && typeof window.trackCustomEvent === 'function') {
                        window.trackCustomEvent('segment_click', {
                            segment_type: segment,
                            content_category: 'segmentacion',
                            content_name: 'Boton_Segmento_' + segment
                        });
                    }
                });
            });

            // =========================================================
            // 2. TRACKING DE SECCIONES POR SCROLL (IntersectionObserver)
            //    Reemplaza el trigger por URL que nunca disparaba
            // =========================================================
            var sectionsSeen = {};
            var sectionObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var sectionName = entry.target.getAttribute('data-section');
                        if (sectionName && !sectionsSeen[sectionName]) {
                            sectionsSeen[sectionName] = true;
                            if (typeof window.trackCustomEvent === 'function') {
                                window.trackCustomEvent('section_view', {
                                    content_name: sectionName,
                                    content_category: 'seccion',
                                    value: sectionName === 'show-laserman' ? 500 : 300,
                                    currency: 'ARS'
                                });
                            }
                        }
                    }
                });
            }, { threshold: 0.3 });

            document.querySelectorAll('[data-section]').forEach(function(section) {
                sectionObserver.observe(section);
            });

            // =========================================================
            // 3. TRACKING DE WHATSAPP
            // =========================================================
            document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(function(link) {
                link.addEventListener('click', function() {
                    var location = this.closest('section')?.id || this.closest('footer') ? 'footer' : 'unknown';
                    if (typeof window.trackCustomEvent === 'function') {
                        window.trackCustomEvent('whatsapp_click', {
                            button_location: location,
                            contact_method: 'whatsapp',
                            content_name: 'WhatsApp_' + location,
                            value: 1000,
                            currency: 'ARS'
                        });
                    }
                });
            });

            // =========================================================
            // 4. TRACKING DE FORMULARIO DE CONTACTO
            // =========================================================
            var contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();

                    var nombre = contactForm.querySelector('#nombre');
                    var email = contactForm.querySelector('#email');
                    var telefono = contactForm.querySelector('#telefono');
                    var servicio = contactForm.querySelector('#servicio');

                    var formData = {
                        firstName: nombre ? nombre.value : '',
                        email: email ? email.value : '',
                        phone: normalizePhoneAR(telefono ? telefono.value : ''),
                        lastName: '',
                        servicio: servicio ? servicio.value : ''
                    };

                    // Push al Data Layer para GTM
                    if (typeof window.trackFormSubmit === 'function') {
                        window.trackFormSubmit(formData);
                    }

                    // Tambien push del segmento si selecciono servicio
                    if (formData.servicio && typeof window.trackCustomEvent === 'function') {
                        window.trackCustomEvent('form_segment', {
                            segment_type: formData.servicio,
                            content_category: 'formulario',
                            content_name: 'Formulario_' + formData.servicio
                        });
                    }

                    // Enviar formulario via fetch
                    var fd = new FormData(contactForm);
                    fetch(contactForm.action || window.location.href, {
                        method: 'POST',
                        body: fd
                    })
                    .catch(function(error) {
                        console.error('Error enviando formulario:', error);
                    })
                    .finally(function() {
                        setTimeout(function() {
                            window.location.href = 'https://laserman.com.ar/gracias';
                        }, 500);
                    });
                });
            }

            // =========================================================
            // 5. TRACKING DE CONTACTO POR TELEFONO
            // =========================================================
            document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
                link.addEventListener('click', function() {
                    if (typeof window.trackCustomEvent === 'function') {
                        window.trackCustomEvent('phone_click', {
                            contact_method: 'phone',
                            content_name: 'Telefono',
                            value: 800,
                            currency: 'ARS'
                        });
                    }
                });
            });

            // =========================================================
            // 6. TRACKING DE INSTAGRAM
            // =========================================================
            document.querySelectorAll('a[href*="instagram.com"]').forEach(function(link) {
                link.addEventListener('click', function() {
                    if (typeof window.trackCustomEvent === 'function') {
                        window.trackCustomEvent('social_click', {
                            platform: 'instagram',
                            content_name: 'Instagram_Click'
                        });
                    }
                });
            });

            // =========================================================
            // 7. MOBILE MENU
            // =========================================================
            window.toggleMobileMenu = function() {
                var menu = document.getElementById('mobileMenu');
                if (menu) menu.classList.toggle('open');
            };

            // =========================================================
            // 8. SMOOTH SCROLL
            // =========================================================
            document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
                anchor.addEventListener('click', function(e) {
                    var href = this.getAttribute('href');
                    if (href === '#' || href === '#!') return;

                    var target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

                        var mobileMenu = document.getElementById('mobileMenu');
                        if (mobileMenu && mobileMenu.classList.contains('open')) {
                            mobileMenu.classList.remove('open');
                        }
                    }
                });
            });

            // =========================================================
            // 9. ANIMACIONES FADE-UP + SCROLL COLORIZE
            // =========================================================
            var fadeObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

            document.querySelectorAll('.fade-up').forEach(function(element) {
                fadeObserver.observe(element);
            });

            var colorizeObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            }, { threshold: 0.5 });

            document.querySelectorAll('.scroll-colorize').forEach(function(element) {
                colorizeObserver.observe(element);
            });

            // =========================================================
            // 10. AUTO-SELECCIONAR SERVICIO EN FORMULARIO SEGUN BOTON
            // =========================================================
            document.querySelectorAll('.segment-btn').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    var segment = this.getAttribute('data-segment');
                    var select = document.getElementById('servicio');
                    if (select && segment) {
                        // Mapear data-segment a value del select
                        var map = {
                            'boliche': 'boliche',
                            'politico': 'gobierno',
                            'productor': 'productor'
                        };
                        if (map[segment]) {
                            select.value = map[segment];
                        }
                    }
                });
            });

        });
    })();
    </script>
    <?php
}
add_action('wp_footer', 'laserman_tracking_2026', 20);

/**
 * Helpers
 */
function dk_whatsapp_url($message = '') {
    $data = dk_get_site_data();
    $phone = preg_replace('/[^0-9]/', '', $data['whatsapp']);
    $url = 'https://wa.me/' . $phone;
    if ($message) $url .= '?text=' . urlencode($message);
    return $url;
}

function dk_body_classes($classes) {
    $classes[] = 'bg-dark';
    $classes[] = 'text-white';
    $classes[] = 'font-sans';
    return $classes;
}
add_filter('body_class', 'dk_body_classes');

/**
 * Security & Performance
 */
add_filter('xmlrpc_enabled', '__return_false');
remove_action('wp_head', 'wp_generator');

function dk_disable_emojis() {
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_styles', 'print_emoji_styles');
}
add_action('init', 'dk_disable_emojis');
