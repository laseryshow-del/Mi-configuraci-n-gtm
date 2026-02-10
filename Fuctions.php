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
        'primary' => __('Menú Principal', 'dk-laserman'),
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
        'location' => 'Neuquén, Patagonia Argentina',
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
            array('number' => '15+', 'label' => 'Años'),
            array('number' => '50+', 'label' => 'Fiestas Nacionales'),
            array('number' => '∞', 'label' => 'Momentos Únicos'),
        ),
        'services' => array(
            array(
                'id' => 'laserman',
                'icon' => '⚡',
                'title' => 'Show Laserman',
                'description' => 'El único en Argentina - Performance futurista con rayos láser en vivo',
                'image' => 'https://laserman.com.ar/wp-content/uploads/2026/01/ChatGPT-Image-20-ene-2026-05_23_02-p.m.png',
            ),
            array(
                'id' => 'tuneles',
                'icon' => '🚪',
                'title' => 'Túneles de Ingreso',
                'description' => 'Transformá la entrada en una experiencia inmersiva de luz',
                'image' => $uploads . '/12/Imagen-de-WhatsApp-2025-05-12-a-las-20.07.43_2440bd38.jpg',
            ),
        ),
    );
}

/**
 * =============================================================================
 * TRACKING SCRIPTS - INTEGRADO CON DATA LAYER
 * =============================================================================
 */
function laserman_tracking_2026() {
    ?>
    <script>
    (function() {
        'use strict';

        /**
         * Helper para normalizar teléfonos argentinos
         */
        function normalizePhoneAR(phone) {
            if (!phone) return '';
            phone = phone.replace(/[^0-9]/g, '');
            
            if (phone.startsWith('54')) return '+' + phone;
            if (phone.startsWith('0')) return '+54' + phone.substring(1);
            if (phone.length >= 10 && !phone.startsWith('54')) return '+54' + phone;
            
            return phone;
        }

        /**
         * Tracking de selección de segmento
         */
        window.trackSegmentSelection = function(segment) {
            if (typeof window.trackCustomEvent === 'function') {
                window.trackCustomEvent('segment_selection', {
                    segment: segment,
                    content_category: 'segmentation'
                });
            }
        };

        /**
         * Tracking de click en WhatsApp
         */
        window.trackWhatsAppClick = function(location) {
            if (typeof window.trackCustomEvent === 'function') {
                window.trackCustomEvent('whatsapp_click', {
                    button_location: location || 'unknown',
                    contact_method: 'whatsapp'
                });
            }
        };

        document.addEventListener('DOMContentLoaded', function() {
            
            // Tracking de segmentos
            document.querySelectorAll('a[href*="#contacto"]').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    var text = btn.textContent.toLowerCase();
                    var segment = 'general';
                    
                    if (text.includes('discoteca') || text.includes('boliche')) segment = 'entretenimiento';
                    else if (text.includes('municipalidad') || text.includes('gobierno')) segment = 'institucional';
                    else if (text.includes('productor') || text.includes('empresa')) segment = 'corporativo';
                    
                    trackSegmentSelection(segment);
                });
            });

            // Tracking de WhatsApp
            document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(function(link) {
                link.addEventListener('click', function() {
                    var location = this.getAttribute('data-location') || this.closest('section')?.id || 'unknown';
                    trackWhatsAppClick(location);
                });
            });

            // Tracking de formularios
            var forms = document.querySelectorAll('form[action*="contact"], form.contact-form, form#contact-form');
            
            forms.forEach(function(form) {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    var nombreField = form.querySelector('[name*="nombre"], [name*="name"]');
                    var emailField = form.querySelector('[name*="email"], [name*="mail"]');
                    var telefonoField = form.querySelector('[name*="telefono"], [name*="phone"], [name*="tel"]');
                    
                    var formData = {
                        firstName: nombreField?.value || '',
                        email: emailField?.value || '',
                        phone: normalizePhoneAR(telefonoField?.value || ''),
                        lastName: ''
                    };
                    
                    if (!formData.email && !formData.phone) {
                        submitFormAndRedirect(form);
                        return;
                    }
                    
                    if (typeof window.trackFormSubmit === 'function') {
                        window.trackFormSubmit(formData);
                        console.log('✅ Formulario enviado al Data Layer:', formData);
                    }
                    
                    submitFormAndRedirect(form);
                });
            });

            function submitFormAndRedirect(form) {
                var formData = new FormData(form);
                
                fetch(form.action || window.location.href, {
                    method: form.method || 'POST',
                    body: formData
                })
                .catch(function(error) {
                    console.error('❌ Error:', error);
                })
                .finally(function() {
                    setTimeout(function() {
                        window.location.href = 'https://laserman.com.ar/gracias';
                    }, 500);
                });
            }

            window.toggleMobileMenu = function() {
                var menu = document.getElementById('mobileMenu');
                if (menu) menu.classList.toggle('open');
            };

            // Smooth scroll
            document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
                anchor.addEventListener('click', function(e) {
                    var href = this.getAttribute('href');
                    if (href === '#' || href === '#!') return;
                    
                    var target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        
                        var mobileMenu = document.getElementById('mobileMenu');
                        if (mobileMenu?.classList.contains('open')) {
                            mobileMenu.classList.remove('open');
                        }
                    }
                });
            });

            // Animaciones fade-up
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) entry.target.classList.add('visible');
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

            document.querySelectorAll('.fade-up').forEach(function(element) {
                observer.observe(element);
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
