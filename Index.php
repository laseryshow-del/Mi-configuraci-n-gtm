<?php
/**
 * Main Template - DK Laserman
 * Landing Page de Venta Optimizada para Conversion
 */
get_header();
$data = dk_get_site_data();
?>

<style>
/* Secciones expandibles de servicios */
.service-expanded {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
}
.service-expanded.active {
    max-height: 3000px;
    transition: max-height 0.8s ease-in;
}
/* Efecto de color en scroll para mobile */
.scroll-colorize {
    transition: filter 0.6s ease;
}
.scroll-colorize.in-view {
    filter: grayscale(0) !important;
}
@media (min-width: 768px) {
    .scroll-colorize:hover {
        filter: grayscale(0) !important;
    }
}
/* Botones segmentados con estetica laser */
.laser-btn {
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(0, 255, 29, 0.3);
    background: linear-gradient(135deg, rgba(0, 255, 29, 0.05) 0%, rgba(0, 255, 29, 0.02) 100%);
    transition: all 0.3s ease;
}
.laser-btn:hover {
    border-color: #00ff1d;
    background: linear-gradient(135deg, rgba(0, 255, 29, 0.15) 0%, rgba(0, 255, 29, 0.05) 100%);
    box-shadow: 0 0 30px rgba(0, 255, 29, 0.3), inset 0 0 20px rgba(0, 255, 29, 0.1);
}
.laser-btn::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent 30%, rgba(0, 255, 29, 0.1) 50%, transparent 70%);
    transform: rotate(45deg);
    animation: laser-sweep 3s infinite;
}
@keyframes laser-sweep {
    0% { transform: translateX(-100%) rotate(45deg); }
    100% { transform: translateX(100%) rotate(45deg); }
}
/* Variantes sutiles para cada tipo */
.laser-btn-solid::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 29, 0.2), transparent);
    transition: left 0.5s;
}
.laser-btn-solid:hover::after {
    left: 100%;
}
.laser-btn-dashed {
    border-style: dashed;
    border-width: 2px;
}
.laser-btn-double {
    border-style: double;
    border-width: 3px;
}
/* Lineas decorativas laser */
.laser-line {
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, #00ff1d 50%, transparent 100%);
    opacity: 0.3;
    animation: pulse-line 2s infinite;
}
@keyframes pulse-line {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.7; }
}
/* Decoracion de esquinas */
.corner-laser {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 1px solid rgba(0, 255, 29, 0.5);
    pointer-events: none;
}
.corner-laser-tl { top: -1px; left: -1px; border-right: none; border-bottom: none; }
.corner-laser-tr { top: -1px; right: -1px; border-left: none; border-bottom: none; }
.corner-laser-bl { bottom: -1px; left: -1px; border-right: none; border-top: none; }
.corner-laser-br { bottom: -1px; right: -1px; border-left: none; border-top: none; }
/* Embudo visual */
.funnel-step {
    clip-path: polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%);
    transition: all 0.3s ease;
}
.funnel-step:hover {
    filter: brightness(1.2);
}
/* Video container responsive */
.video-container {
    position: relative;
    padding-bottom: 177.78%; /* 9:16 for shorts */
    height: 0;
    overflow: hidden;
    max-width: 100%;
    max-height: 500px;
}
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>

<!-- ============================================ -->
<!-- HERO + 3 BOTONES DE SEGMENTO -->
<!-- ============================================ -->
<section id="inicio" class="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 relative overflow-hidden pt-24 md:pt-0">
    <img src="<?php echo esc_url($data['hero_image']); ?>"
         class="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
         alt="Hero Background">
    <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
    <div class="relative z-10 max-w-5xl">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            El Futuro de los<br>
            <span class="text-neon neon-glow">Espectaculos en Argentina</span>
        </h1>
        <p class="text-lg md:text-xl text-zinc-300 mb-12 max-w-3xl mx-auto font-light">
            El unico espectaculo de Laserman en Latinoamerica + Tuneles inmersivos + Proyecciones de alto impacto
        </p>
        <div class="laser-line w-32 mx-auto mb-8"></div>
        <p class="text-xs text-zinc-500 uppercase tracking-widest mb-4">Selecciona tu tipo de evento</p>
        <div class="flex flex-col gap-4 justify-center max-w-2xl mx-auto relative">
            <div class="corner-laser corner-laser-tl"></div>
            <div class="corner-laser corner-laser-tr"></div>
            <div class="corner-laser corner-laser-bl"></div>
            <div class="corner-laser corner-laser-br"></div>
            <a href="#contacto" data-segment="boliche" class="laser-btn laser-btn-solid relative px-12 py-5 text-neon text-base font-bold tracking-wide uppercase text-center group segment-btn">
                <span class="relative z-10">DISCOTECA / BOLICHE</span>
            </a>
            <a href="#contacto" data-segment="politico" class="laser-btn laser-btn-dashed relative px-12 py-5 text-neon text-base font-bold tracking-wide uppercase text-center group segment-btn">
                <span class="relative z-10">GOBIERNO / POLITICOS</span>
            </a>
            <a href="#contacto" data-segment="productor" class="laser-btn laser-btn-double relative px-12 py-5 text-neon text-base font-bold tracking-wide uppercase text-center group segment-btn">
                <span class="relative z-10">PRODUCTOR / EMPRESA</span>
            </a>
        </div>
        <div class="laser-line w-32 mx-auto mt-8"></div>
    </div>
</section>

<!-- ============================================ -->
<!-- STATS + LOGOS GOBIERNOS -->
<!-- ============================================ -->
<section class="py-20 px-4 md:px-6 bg-zinc-950 border-y border-zinc-900">
    <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div class="text-center border border-zinc-900 p-8 hover:border-neon transition-colors fade-up">
                <div class="text-5xl md:text-6xl font-display font-black text-neon mb-3 neon-glow">15+</div>
                <div class="text-xs text-zinc-400 uppercase tracking-widest">Anos de Experiencia</div>
            </div>
            <div class="text-center border border-zinc-900 p-8 hover:border-neon transition-colors fade-up">
                <div class="text-5xl md:text-6xl font-display font-black text-neon mb-3 neon-glow">50+</div>
                <div class="text-xs text-zinc-400 uppercase tracking-widest">Shows Realizados</div>
            </div>
            <div class="text-center border border-zinc-900 p-8 hover:border-neon transition-colors fade-up">
                <div class="text-5xl md:text-6xl font-display font-black text-neon mb-3 neon-glow">8</div>
                <div class="text-xs text-zinc-400 uppercase tracking-widest">Fiestas Nacionales</div>
            </div>
            <div class="text-center border border-zinc-900 p-8 hover:border-neon transition-colors fade-up">
                <div class="text-5xl md:text-6xl font-display font-black text-neon mb-3 neon-glow">43</div>
                <div class="text-xs text-zinc-400 uppercase tracking-widest">Ciudades Recorridas</div>
            </div>
        </div>
        <div class="text-center">
            <p class="text-[10px] text-zinc-600 uppercase tracking-[0.5em] mb-8">Gobiernos que confiaron en nosotros</p>
            <div class="grid grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
                <img src="https://laserman.com.ar/wp-content/uploads/2026/01/LOGO-rio-negro.png" alt="Rio Negro" class="h-32 md:h-40 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity">
                <img src="https://laserman.com.ar/wp-content/uploads/2026/01/LOGO-misiones.png" alt="Misiones" class="h-32 md:h-40 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity">
                <img src="https://laserman.com.ar/wp-content/uploads/2026/01/LOGO-formosa.png" alt="Formosa" class="h-32 md:h-40 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity">
                <img src="https://laserman.com.ar/wp-content/uploads/2026/01/LOGO-NEUQUEN2.png" alt="Neuquen" class="h-32 md:h-40 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity">
            </div>
        </div>
    </div>
</section>

<!-- ============================================ -->
<!-- SERVICIOS (4 servicios expandibles) -->
<!-- ============================================ -->
<section id="servicios" class="py-32 px-3 md:px-6 bg-dark" data-section="servicios">
    <div class="max-w-7xl mx-auto">
        <div class="mb-20 text-center">
            <span class="text-neon font-display text-[10px] tracking-[0.6em] block mb-4">QUE OFRECEMOS</span>
            <h2 class="text-4xl md:text-6xl font-display font-bold uppercase leading-tight">
                4 Formas de Transformar<br>
                <span class="text-neon font-light">tu Evento</span>
            </h2>
            <div class="h-[1px] w-20 bg-neon mt-8 mx-auto"></div>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-6 gap-px bg-zinc-900 border border-zinc-900">
            <!-- SERVICIO 1: SHOW LASERMAN -->
            <div class="relative bg-dark lg:col-span-4 flex flex-col" data-section="show-laserman">
                <div class="p-4 md:p-10 group hover:bg-zinc-900/30 transition-all">
                    <div class="absolute top-6 right-6 bg-neon text-black px-4 py-1 text-[9px] font-black tracking-widest z-10">
                        MAS PEDIDO
                    </div>
                    <div class="mb-6">
                        <img src="<?php echo esc_url($data['services'][0]['image']); ?>"
                             class="w-full aspect-video object-cover scroll-colorize"
                             style="filter: grayscale(1);"
                             alt="Show Laserman">
                    </div>
                    <h3 class="text-3xl font-display font-bold uppercase mb-2 text-neon">Show Laserman</h3>
                    <p class="text-xs text-zinc-500 uppercase tracking-widest mb-4">El unico en Argentina</p>
                    <p class="text-sm text-zinc-300 leading-relaxed mb-6">
                        Un artista manipula rayos laser en vivo. Performance futurista que combina musica, coreografia y tecnologia.
                        <span class="text-white font-bold">Altamente viral - cada asistente filma y comparte.</span>
                    </p>
                    <button onclick="toggleService('laserman')" class="inline-block text-neon text-xs uppercase tracking-widest hover:underline mb-4">
                        MAS INFO &rarr;
                    </button>
                </div>
                <div id="service-laserman" class="service-expanded border-t border-zinc-900">
                    <div class="p-4 md:p-10 bg-zinc-900/50">
                        <h4 class="text-2xl font-display font-bold text-white mb-6">Galeria Show Laserman</h4>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="row-span-2">
                                <img src="https://laserman.com.ar/wp-content/uploads/2026/01/Generated-Image-November-25-2025-8_20PM-1.png"
                                     class="w-full h-full object-cover" alt="Laserman 1">
                            </div>
                            <img src="https://laserman.com.ar/wp-content/uploads/2026/01/dale-m-s-realismo-de-movimiento-humano--e1769290346532.png"
                                 class="w-full aspect-square object-cover" alt="Laserman 2">
                            <img src="https://laserman.com.ar/wp-content/uploads/2026/01/LASERMAN-007_4_2_2-frame-at-0m16s-1-e1769288168804.jpg"
                                 class="w-full aspect-square object-cover" alt="Laserman 3">
                            <img src="https://laserman.com.ar/wp-content/uploads/2026/01/grok-video-d4940b4d-eda5-483b-befd-e28384c7cfda-3-frame-at-0m5s.jpg"
                                 class="w-full aspect-video object-cover col-span-2" alt="Laserman 4">
                        </div>
                        <a href="#contacto" class="mt-6 inline-block px-8 py-3 bg-neon text-black font-bold uppercase text-sm hover:bg-white transition">
                            Cotizar Show Laserman
                        </a>
                    </div>
                </div>
            </div>

            <!-- SERVICIO 2: TUNELES INMERSIVOS -->
            <div class="relative bg-dark lg:col-span-2 flex flex-col lg:justify-end">
                <div class="p-4 md:p-10 group hover:bg-zinc-900/30 transition-all">
                    <div class="hidden lg:block mb-2">
                        <img src="https://laserman.com.ar/wp-content/uploads/2026/01/20260120_1455_Image-Generation_remix_01kfe8psxjfnpr1q4b3whv7k3d-e1769828290796.png"
                             class="w-full aspect-video object-cover scroll-colorize"
                             style="filter: grayscale(1);"
                             alt="Tunel preview">
                    </div>
                    <div class="mb-6 lg:mb-2">
                        <img src="https://laserman.com.ar/wp-content/uploads/2026/01/b.jpg"
                             class="w-full aspect-video object-cover scroll-colorize"
                             style="filter: grayscale(1);"
                             alt="Tuneles">
                    </div>
                    <h3 class="text-2xl font-display font-bold uppercase mb-2">Tuneles Inmersivos</h3>
                    <p class="text-xs text-zinc-500 uppercase tracking-widest mb-4">Efecto WOW garantizado</p>
                    <p class="text-sm text-zinc-300 leading-relaxed mb-6">
                        Entrada espectacular para tu evento. Ideal para recepciones, fiestas de 15, casamientos y activaciones de marca.
                    </p>
                    <button onclick="toggleService('tuneles')" class="inline-block text-neon text-xs uppercase tracking-widest hover:underline mb-4">
                        MAS INFO &rarr;
                    </button>
                </div>
                <div id="service-tuneles" class="service-expanded border-t border-zinc-900">
                    <div class="p-4 md:p-10 bg-zinc-900/50">
                        <h4 class="text-2xl font-display font-bold text-white mb-6">Galeria Tuneles</h4>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="row-span-2">
                                <img src="https://laserman.com.ar/wp-content/uploads/2026/01/task_01kfe7ne94frmsjd5kj4ty3can_1768930654_img_0.webp"
                                     class="w-full h-full object-cover" alt="Tunel 1">
                            </div>
                            <img src="https://laserman.com.ar/wp-content/uploads/2025/12/Captura-de-Pantalla-2024-09-22-a-las-05.50.08-e1765383365353.png"
                                 class="w-full aspect-video object-cover" alt="Tunel 2">
                            <img src="https://laserman.com.ar/wp-content/uploads/2026/01/VID_20250818_052243_191-frame-at-0m4s.jpg"
                                 class="w-full aspect-video object-cover" alt="Tunel 3">
                            <img src="https://laserman.com.ar/wp-content/uploads/2026/01/corrientes-01.jpg"
                                 class="w-full aspect-video object-cover col-span-2" alt="Tunel 4">
                        </div>
                        <a href="#contacto" class="mt-6 inline-block px-8 py-3 bg-neon text-black font-bold uppercase text-sm hover:bg-white transition">
                            Cotizar Tuneles
                        </a>
                    </div>
                </div>
            </div>

            <!-- SERVICIO 3: PROYECCIONES LASER -->
            <div class="relative bg-dark lg:col-span-3 flex flex-col">
                <div class="p-4 md:p-10 group hover:bg-zinc-900/30 transition-all">
                    <div class="mb-6">
                        <img src="https://laserman.com.ar/wp-content/uploads/2025/12/IMG-20250809-WA00121.jpg"
                             class="w-full aspect-video object-cover scroll-colorize"
                             style="filter: grayscale(1);"
                             alt="Proyecciones">
                    </div>
                    <h3 class="text-2xl font-display font-bold uppercase mb-2">Proyecciones de Alto Impacto</h3>
                    <p class="text-xs text-zinc-500 uppercase tracking-widest mb-4">Tu marca en grande</p>
                    <p class="text-sm text-zinc-300 leading-relaxed mb-6">
                        Logos, animaciones y mensajes proyectados en edificios, montanas o cualquier superficie. Visible a kilometros.
                    </p>
                    <button onclick="toggleService('proyecciones')" class="inline-block text-neon text-xs uppercase tracking-widest hover:underline mb-4">
                        MAS INFO &rarr;
                    </button>
                </div>
                <div id="service-proyecciones" class="service-expanded border-t border-zinc-900">
                    <div class="p-4 md:p-10 bg-zinc-900/50">
                        <h4 class="text-2xl font-display font-bold text-white mb-6">Galeria Proyecciones</h4>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="row-span-2">
                                <img src="https://laserman.com.ar/wp-content/uploads/2025/12/baja-DEOPAnRTAMENTO.jpg"
                                     class="w-full h-full object-cover" alt="Proyeccion 1">
                            </div>
                            <img src="https://laserman.com.ar/wp-content/uploads/2025/12/GOPR1347_1691738660171-scaled.jpg"
                                 class="w-full aspect-video object-cover" alt="Proyeccion 2">
                            <img src="https://laserman.com.ar/inicio/wp-content/uploads/2025/08/Artboard-3-e1755670756831.jpg"
                                 class="w-full aspect-video object-cover" alt="Proyeccion 3">
                            <img src="https://laserman.com.ar/wp-content/uploads/2025/12/IMG-20250809-WA00121.jpg"
                                 class="w-full aspect-video object-cover col-span-2" alt="Proyeccion 4">
                        </div>
                        <a href="#contacto" class="mt-6 inline-block px-8 py-3 bg-neon text-black font-bold uppercase text-sm hover:bg-white transition">
                            Cotizar Proyecciones
                        </a>
                    </div>
                </div>
            </div>

            <!-- SERVICIO 4: PAQUETE COMPLETO -->
            <div class="relative bg-dark lg:col-span-3 flex flex-col">
                <div class="p-4 md:p-10 group hover:bg-zinc-900/30 transition-all">
                    <div class="absolute top-6 right-6 bg-neon/20 text-neon border border-neon px-4 py-1 text-[9px] font-black tracking-widest z-10">
                        MEJOR VALOR
                    </div>
                    <div class="mb-6">
                        <img src="https://laserman.com.ar/wp-content/uploads/2026/01/corrientes-01.jpg"
                             class="w-full aspect-video object-cover scroll-colorize"
                             style="filter: grayscale(1);"
                             alt="Paquete Completo">
                    </div>
                    <h3 class="text-2xl font-display font-bold uppercase mb-2">Experiencia Completa</h3>
                    <p class="text-xs text-zinc-500 uppercase tracking-widest mb-4">Todo en uno</p>
                    <p class="text-sm text-zinc-300 leading-relaxed mb-6">
                        Combina Laserman + Tuneles + Proyecciones para un evento que nadie va a olvidar. Consulta por paquetes.
                    </p>
                    <button onclick="toggleService('paquete')" class="inline-block text-neon text-xs uppercase tracking-widest hover:underline mb-4">
                        MAS INFO &rarr;
                    </button>
                </div>
                <div id="service-paquete" class="service-expanded border-t border-zinc-900">
                    <div class="p-4 md:p-10 bg-zinc-900/50">
                        <h4 class="text-2xl font-display font-bold text-white mb-6">Paquete Completo</h4>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="row-span-2">
                                <img src="https://laserman.com.ar/inicio/wp-content/uploads/2025/08/300x100_03.jpg"
                                     class="w-full h-full object-cover" alt="Paquete 1">
                            </div>
                            <img src="https://laserman.com.ar/wp-content/uploads/2026/01/Generated-Image-November-25-2025-8_20PM-1.png"
                                 class="w-full aspect-video object-cover" alt="Paquete 2">
                            <img src="https://laserman.com.ar/wp-content/uploads/2026/01/corrientes-01.jpg"
                                 class="w-full aspect-video object-cover" alt="Paquete 3">
                        </div>
                        <a href="#contacto" class="mt-6 inline-block px-8 py-3 bg-neon text-black font-bold uppercase text-sm hover:bg-white transition">
                            Cotizar Paquete Completo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ============================================ -->
<!-- VIDEOS - Con tracking de progreso -->
<!-- ============================================ -->
<section id="galeria" class="py-32 px-4 md:px-6 bg-zinc-950 border-y border-zinc-900" data-section="videos">
    <div class="max-w-5xl mx-auto">
        <div class="mb-20 text-center">
            <span class="text-neon font-display text-[10px] tracking-[0.6em] block mb-4">MIRALO EN ACCION</span>
            <h2 class="text-4xl md:text-6xl font-display font-bold uppercase leading-tight">
                Videos de<br>
                <span class="text-neon font-light">Nuestros Shows</span>
            </h2>
            <div class="h-[1px] w-20 bg-neon mt-8 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
            <!-- Video 1: Show Laserman -->
            <div class="fade-up">
                <div class="bg-zinc-900 border border-zinc-800 overflow-hidden">
                    <div id="video-laserman-container" class="relative" style="padding-bottom:177.78%; height:0; max-height:500px; overflow:hidden;">
                        <iframe id="yt-player-laserman"
                                src="https://www.youtube.com/embed/UejPB4htjps?enablejsapi=1&origin=https://laserman.com.ar&rel=0"
                                class="absolute top-0 left-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                title="Show Laserman"></iframe>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-display font-bold text-neon mb-1">Show Laserman en Vivo</h3>
                        <p class="text-xs text-zinc-500">Performance completa de manipulacion laser</p>
                        <!-- Barra de progreso visual del video -->
                        <div class="mt-3 w-full bg-zinc-800 h-1 rounded">
                            <div id="progress-laserman" class="bg-neon h-1 rounded transition-all duration-300" style="width:0%"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Video 2: Tuneles Inmersivos -->
            <div class="fade-up">
                <div class="bg-zinc-900 border border-zinc-800 overflow-hidden">
                    <div id="video-tuneles-container" class="relative" style="padding-bottom:177.78%; height:0; max-height:500px; overflow:hidden;">
                        <iframe id="yt-player-tuneles"
                                src="https://www.youtube.com/embed/ToSEWX40VYk?enablejsapi=1&origin=https://laserman.com.ar&rel=0"
                                class="absolute top-0 left-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                title="Tuneles Inmersivos"></iframe>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-display font-bold text-neon mb-1">Tuneles Inmersivos</h3>
                        <p class="text-xs text-zinc-500">Entrada espectacular para eventos</p>
                        <div class="mt-3 w-full bg-zinc-800 h-1 rounded">
                            <div id="progress-tuneles" class="bg-neon h-1 rounded transition-all duration-300" style="width:0%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ============================================ -->
<!-- EMBUDO DE VENTAS VISUAL -->
<!-- ============================================ -->
<section id="embudo" class="py-20 px-4 md:px-6 bg-dark">
    <div class="max-w-4xl mx-auto">
        <div class="mb-16 text-center">
            <span class="text-neon font-display text-[10px] tracking-[0.6em] block mb-4">TU CAMINO</span>
            <h2 class="text-3xl md:text-5xl font-display font-bold uppercase">
                Del Interes a tu <span class="text-neon">Evento Inolvidable</span>
            </h2>
        </div>
        <div class="flex flex-col items-center gap-2">
            <!-- Paso 1 -->
            <div class="w-full max-w-2xl bg-neon/10 border border-neon/30 py-4 px-6 text-center" style="clip-path: polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%);">
                <div class="text-neon font-display font-bold text-lg">1. Elegis tu tipo de evento</div>
                <div class="text-xs text-zinc-400 mt-1">Boliche / Gobierno / Productor</div>
            </div>
            <div class="w-4 h-4 border-l-2 border-b-2 border-neon/50 transform rotate-[-45deg]"></div>
            <!-- Paso 2 -->
            <div class="w-full max-w-xl bg-neon/8 border border-neon/25 py-4 px-6 text-center" style="clip-path: polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%);">
                <div class="text-neon font-display font-bold text-lg">2. Miras los videos</div>
                <div class="text-xs text-zinc-400 mt-1">Shows reales para que veas la calidad</div>
            </div>
            <div class="w-4 h-4 border-l-2 border-b-2 border-neon/50 transform rotate-[-45deg]"></div>
            <!-- Paso 3 -->
            <div class="w-full max-w-md bg-neon/6 border border-neon/20 py-4 px-6 text-center" style="clip-path: polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%);">
                <div class="text-neon font-display font-bold text-lg">3. Nos contactas</div>
                <div class="text-xs text-zinc-400 mt-1">WhatsApp o formulario - respondemos en 24hs</div>
            </div>
            <div class="w-4 h-4 border-l-2 border-b-2 border-neon/50 transform rotate-[-45deg]"></div>
            <!-- Paso 4 -->
            <div class="w-full max-w-sm bg-neon/20 border-2 border-neon py-5 px-6 text-center neon-box" style="clip-path: polygon(6% 0%, 94% 0%, 100% 100%, 0% 100%);">
                <div class="text-neon font-display font-bold text-xl neon-glow">4. Tu evento es INOLVIDABLE</div>
                <div class="text-xs text-white mt-1 font-bold">Cotizacion personalizada sin compromiso</div>
            </div>
        </div>
        <div class="text-center mt-12">
            <a href="#contacto" class="inline-block px-10 py-4 bg-neon text-black font-bold uppercase tracking-wide text-sm hover:bg-white transition-colors neon-box animate-glow-pulse">
                Empeza Ahora - Cotiza Gratis
            </a>
        </div>
    </div>
</section>

<!-- ============================================ -->
<!-- TRAYECTORIA / CLIENTES -->
<!-- ============================================ -->
<section id="clientes" class="py-20 px-4 md:px-6 bg-zinc-950 border-y border-zinc-900" data-section="clientes">
    <div class="max-w-7xl mx-auto text-center">
        <span class="text-neon font-display text-[10px] tracking-[0.6em] block mb-4">TRAYECTORIA</span>
        <h2 class="text-3xl md:text-5xl font-display font-bold uppercase mb-12">
            Marcas que <span class="text-neon">Confiaron</span>
        </h2>
        <div class="grid grid-cols-3 md:grid-cols-5 gap-8 items-center max-w-4xl mx-auto mb-16">
            <?php foreach ($data['brand_logos'] as $logo): ?>
            <img src="<?php echo esc_url($logo); ?>" alt="Cliente" class="h-16 md:h-20 w-auto mx-auto opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <?php endforeach; ?>
        </div>
        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="bg-zinc-900/50 border border-zinc-800 p-8 fade-up">
                <div class="text-neon text-4xl mb-4">"</div>
                <p class="text-sm text-zinc-300 mb-4">Impresionante. La gente no paraba de filmar. El show de laser fue lo mas comentado de toda la fiesta.</p>
                <p class="text-xs text-zinc-500 uppercase tracking-widest">- Fiesta Nacional del Puestero, Neuquen</p>
            </div>
            <div class="bg-zinc-900/50 border border-zinc-800 p-8 fade-up">
                <div class="text-neon text-4xl mb-4">"</div>
                <p class="text-sm text-zinc-300 mb-4">Profesionales de primera. El tunel de ingreso dejo a todos con la boca abierta. Lo volveriamos a contratar sin dudarlo.</p>
                <p class="text-xs text-zinc-500 uppercase tracking-widest">- Gobierno de Misiones</p>
            </div>
            <div class="bg-zinc-900/50 border border-zinc-800 p-8 fade-up">
                <div class="text-neon text-4xl mb-4">"</div>
                <p class="text-sm text-zinc-300 mb-4">Le dieron un nivel increible a nuestro evento corporativo. Las proyecciones sobre el edificio fueron epicas.</p>
                <p class="text-xs text-zinc-500 uppercase tracking-widest">- Evento Corporativo, Buenos Aires</p>
            </div>
        </div>
    </div>
</section>

<!-- ============================================ -->
<!-- FORMULARIO DE CONTACTO -->
<!-- ============================================ -->
<section id="contacto" class="py-32 px-4 md:px-6 bg-dark relative" data-section="contacto">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-neon/5 to-transparent pointer-events-none"></div>
    <div class="max-w-3xl mx-auto relative z-10">
        <div class="mb-16 text-center">
            <span class="text-neon font-display text-[10px] tracking-[0.6em] block mb-4">CONTACTO</span>
            <h2 class="text-4xl md:text-6xl font-display font-bold uppercase leading-tight">
                Cotiza tu <span class="text-neon neon-glow">Evento</span>
            </h2>
            <p class="text-zinc-400 mt-4 text-sm">Completa el formulario y te respondemos en menos de 24 horas</p>
        </div>

        <form id="contact-form" action="<?php echo esc_url(get_template_directory_uri() . '/Procesar-formulario.php'); ?>" method="POST" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
                <div>
                    <label for="nombre" class="block text-xs text-zinc-400 uppercase tracking-widest mb-2">Nombre *</label>
                    <input type="text" id="nombre" name="nombre" required
                           class="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder-zinc-600 focus:border-neon focus:outline-none transition-colors"
                           placeholder="Tu nombre">
                </div>
                <div>
                    <label for="email" class="block text-xs text-zinc-400 uppercase tracking-widest mb-2">Email *</label>
                    <input type="email" id="email" name="email" required
                           class="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder-zinc-600 focus:border-neon focus:outline-none transition-colors"
                           placeholder="tu@email.com">
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-6">
                <div>
                    <label for="telefono" class="block text-xs text-zinc-400 uppercase tracking-widest mb-2">Telefono / WhatsApp</label>
                    <input type="tel" id="telefono" name="telefono"
                           class="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder-zinc-600 focus:border-neon focus:outline-none transition-colors"
                           placeholder="+54 9 299 123 4567">
                </div>
                <div>
                    <label for="servicio" class="block text-xs text-zinc-400 uppercase tracking-widest mb-2">Tipo de evento</label>
                    <select id="servicio" name="servicio"
                            class="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white focus:border-neon focus:outline-none transition-colors">
                        <option value="">Selecciona...</option>
                        <option value="boliche">Discoteca / Boliche</option>
                        <option value="gobierno">Gobierno / Politicos</option>
                        <option value="productor">Productor / Empresa</option>
                        <option value="show_laserman">Show Laserman</option>
                        <option value="tuneles">Tuneles Inmersivos</option>
                        <option value="proyecciones">Proyecciones</option>
                        <option value="paquete_completo">Paquete Completo</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
            </div>
            <div>
                <label for="mensaje" class="block text-xs text-zinc-400 uppercase tracking-widest mb-2">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows="4"
                          class="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder-zinc-600 focus:border-neon focus:outline-none transition-colors resize-none"
                          placeholder="Contanos sobre tu evento: fecha, lugar, tipo de espectaculo que buscas..."></textarea>
            </div>
            <div class="text-center">
                <button type="submit"
                        class="px-12 py-4 bg-neon text-black font-bold uppercase tracking-wide text-sm hover:bg-white transition-colors neon-box w-full md:w-auto">
                    Enviar Consulta
                </button>
            </div>
        </form>

        <div class="mt-12 text-center">
            <p class="text-xs text-zinc-500 uppercase tracking-widest mb-4">O escribinos directo</p>
            <a href="<?php echo dk_whatsapp_url('Hola, vi su pagina y me interesa cotizar un evento'); ?>" target="_blank"
               class="inline-flex items-center gap-3 px-8 py-3 border-2 border-neon/30 text-neon font-bold uppercase text-sm hover:border-neon hover:bg-neon/10 transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/></svg>
                WhatsApp Directo
            </a>
        </div>
    </div>
</section>

<!-- ============================================ -->
<!-- SCRIPTS DE PAGINA -->
<!-- ============================================ -->
<script>
// Toggle de secciones expandibles de servicios
function toggleService(serviceId) {
    var el = document.getElementById('service-' + serviceId);
    if (!el) return;
    el.classList.toggle('active');

    // Track en dataLayer
    if (typeof window.trackCustomEvent === 'function') {
        window.trackCustomEvent('service_expand', {
            content_name: serviceId,
            content_category: 'servicios'
        });
    }
}
</script>

<!-- YouTube IFrame API para tracking de video -->
<script>
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var ytPlayers = {};
var videoMilestones = {};

function onYouTubeIframeAPIReady() {
    ytPlayers['laserman'] = new YT.Player('yt-player-laserman', {
        events: {
            'onStateChange': function(e) { onPlayerStateChange(e, 'laserman', 'Show Laserman'); }
        }
    });
    ytPlayers['tuneles'] = new YT.Player('yt-player-tuneles', {
        events: {
            'onStateChange': function(e) { onPlayerStateChange(e, 'tuneles', 'Tuneles Inmersivos'); }
        }
    });
}

function onPlayerStateChange(event, videoId, videoName) {
    if (event.data === YT.PlayerState.PLAYING) {
        // Iniciar tracking de progreso
        if (!videoMilestones[videoId]) {
            videoMilestones[videoId] = { 25: false, 50: false, 75: false, 100: false };
            // Track video_play
            if (typeof window.trackCustomEvent === 'function') {
                window.trackCustomEvent('video_play', {
                    content_name: videoName,
                    content_category: 'video',
                    video_id: videoId
                });
            }
        }
        startProgressTracking(videoId, videoName);
    }
    if (event.data === YT.PlayerState.ENDED) {
        // Video completado al 100%
        if (videoMilestones[videoId] && !videoMilestones[videoId][100]) {
            videoMilestones[videoId][100] = true;
            trackVideoMilestone(videoId, videoName, 100);
            updateProgressBar(videoId, 100);
        }
    }
}

function startProgressTracking(videoId, videoName) {
    var interval = setInterval(function() {
        var player = ytPlayers[videoId];
        if (!player || !player.getDuration) { clearInterval(interval); return; }

        var duration = player.getDuration();
        var currentTime = player.getCurrentTime();
        if (duration <= 0) return;

        var percent = Math.round((currentTime / duration) * 100);
        updateProgressBar(videoId, percent);

        var milestones = [25, 50, 75, 100];
        for (var i = 0; i < milestones.length; i++) {
            var m = milestones[i];
            if (percent >= m && videoMilestones[videoId] && !videoMilestones[videoId][m]) {
                videoMilestones[videoId][m] = true;
                trackVideoMilestone(videoId, videoName, m);
            }
        }

        // Detener si terminó o se pausó
        var state = player.getPlayerState();
        if (state !== YT.PlayerState.PLAYING) {
            clearInterval(interval);
        }
    }, 1000);
}

function trackVideoMilestone(videoId, videoName, percent) {
    if (typeof window.trackCustomEvent === 'function') {
        window.trackCustomEvent('video_progress', {
            content_name: videoName,
            content_category: 'video',
            video_id: videoId,
            video_percent: percent,
            value: percent === 100 ? 500 : percent === 75 ? 300 : percent === 50 ? 200 : 100,
            currency: 'ARS'
        });
    }
}

function updateProgressBar(videoId, percent) {
    var bar = document.getElementById('progress-' + videoId);
    if (bar) bar.style.width = Math.min(percent, 100) + '%';
}
</script>

<?php get_footer(); ?>
