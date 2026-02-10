<?php
/**
 * Main Template - DK Laserman  
 * Landing Page de Venta Optimizada para Conversión
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
/* Botones segmentados con estética láser */
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
/* Líneas decorativas láser */
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
/* Decoración de esquinas */
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
</style>

<section id="inicio" class="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 relative overflow-hidden pt-24 md:pt-0">
    <img src="<?php echo esc_url($data['hero_image']); ?>"
         class="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
         alt="Hero Background">
    <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
    <div class="relative z-10 max-w-5xl">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            El Futuro de los<br>
            <span class="text-neon neon-glow">Espectáculos en Argentina</span>
        </h1>
        <p class="text-lg md:text-xl text-zinc-300 mb-12 max-w-3xl mx-auto font-light">
            El único espectáculo de Laserman en Latinoamérica + Túneles inmersivos + Proyecciones de alto impacto
        </p>
        <div class="laser-line w-32 mx-auto mb-8"></div>
        <div class="flex flex-col gap-4 justify-center max-w-2xl mx-auto relative">
            <div class="corner-laser corner-laser-tl"></div>
            <div class="corner-laser corner-laser-tr"></div>
            <div class="corner-laser corner-laser-bl"></div>
            <div class="corner-laser corner-laser-br"></div>
            <a href="#contacto" class="laser-btn laser-btn-solid relative px-12 py-5 text-neon text-base font-bold tracking-wide uppercase text-center group">
                <span class="relative z-10">⚡ DISCOTECA / BOLICHE</span>
            </a>
            <a href="#contacto" class="laser-btn laser-btn-dashed relative px-12 py-5 text-neon text-base font-bold tracking-wide uppercase text-center group">
                <span class="relative z-10">🏛️ MUNICIPALIDAD / CULTURA</span>
            </a>
            <a href="#contacto" class="laser-btn laser-btn-double relative px-12 py-5 text-neon text-base font-bold tracking-wide uppercase text-center group">
                <span class="relative z-10">💼 PRODUCTOR / EMPRESA</span>
            </a>
        </div>
        <div class="laser-line w-32 mx-auto mt-8"></div>
    </div>
</section>

<section class="py-20 px-4 md:px-6 bg-zinc-950 border-y border-zinc-900">
    <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div class="text-center border border-zinc-900 p-8 hover:border-neon transition-colors">
                <div class="text-5xl md:text-6xl font-display font-black text-neon mb-3 neon-glow">15+</div>
                <div class="text-xs text-zinc-400 uppercase tracking-widest">Años de Experiencia</div>
            </div>
            <div class="text-center border border-zinc-900 p-8 hover:border-neon transition-colors">
                <div class="text-5xl md:text-6xl font-display font-black text-neon mb-3 neon-glow">50+</div>
                <div class="text-xs text-zinc-400 uppercase tracking-widest">Shows Realizados</div>
            </div>
            <div class="text-center border border-zinc-900 p-8 hover:border-neon transition-colors">
                <div class="text-5xl md:text-6xl font-display font-black text-neon mb-3 neon-glow">8</div>
                <div class="text-xs text-zinc-400 uppercase tracking-widest">Fiestas Nacionales</div>
            </div>
            <div class="text-center border border-zinc-900 p-8 hover:border-neon transition-colors">
                <div class="text-5xl md:text-6xl font-display font-black text-neon mb-3 neon-glow">43</div>
                <div class="text-xs text-zinc-400 uppercase tracking-widest">Ciudades Recorridas</div>
            </div>
        </div>
        <div class="text-center">
            <p class="text-[10px] text-zinc-600 uppercase tracking-[0.5em] mb-8">Gobiernos que confiaron en nosotros</p>
            <div class="grid grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
                <img src="https://laserman.com.ar/wp-content/uploads/2026/01/LOGO-rio-negro.png" alt="Río Negro" class="h-32 md:h-40 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity">
                <img src="https://laserman.com.ar/wp-content/uploads/2026/01/LOGO-misiones.png" alt="Misiones" class="h-32 md:h-40 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity">
                <img src="https://laserman.com.ar/wp-content/uploads/2026/01/LOGO-formosa.png" alt="Formosa" class="h-32 md:h-40 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity">
                <img src="https://laserman.com.ar/wp-content/uploads/2026/01/LOGO-NEUQUEN2.png" alt="Neuquén" class="h-32 md:h-40 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity">
            </div>
        </div>
    </div>
</section>

<section id="servicios" class="py-32 px-3 md:px-6 bg-dark">
    <div class="max-w-7xl mx-auto">
        <div class="mb-20 text-center">
            <span class="text-neon font-display text-[10px] tracking-[0.6em] block mb-4">QUÉ OFRECEMOS</span>
            <h2 class="text-4xl md:text-6xl font-display font-bold uppercase leading-tight">
                4 Formas de Transformar<br>
                <span class="text-neon font-light">tu Evento</span>
            </h2>
            <div class="h-[1px] w-20 bg-neon mt-8 mx-auto"></div>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-6 gap-px bg-zinc-900 border border-zinc-900">
            <!-- SERVICIO 1: SHOW LASERMAN ⭐ -->
            <div class="relative bg-dark lg:col-span-4 flex flex-col">
                <div class="p-4 md:p-10 group hover:bg-zinc-900/30 transition-all">
                    <div class="absolute top-6 right-6 bg-neon text-black px-4 py-1 text-[9px] font-black tracking-widest z-10">
                        ⭐ MÁS PEDIDO
                    </div>
                    <div class="mb-6">
                        <img src="<?php echo esc_url($data['services'][0]['image']); ?>"
                             class="w-full aspect-video object-cover scroll-colorize"
                             style="filter: grayscale(1);"
                             alt="Show Laserman">
                    </div>
                    <h3 class="text-3xl font-display font-bold uppercase mb-2 text-neon">Show Laserman</h3>
                    <p class="text-xs text-zinc-500 uppercase tracking-widest mb-4">El único en Argentina</p>
                    <p class="text-sm text-zinc-300 leading-relaxed mb-6">
                        Un artista manipula rayos láser en vivo. Performance futurista que combina música, coreografía y tecnología.
                        <span class="text-white font-bold">Altamente viral - cada asistente filma y comparte.</span>
                    </p>
                    <button onclick="toggleService('laserman')" class="inline-block text-neon text-xs uppercase tracking-widest hover:underline mb-4">
                        MÁS INFO →
                    </button>
                </div>
                <div id="service-laserman" class="service-expanded border-t border-zinc-900">
                    <div class="p-4 md:p-10 bg-zinc-900/50">
                        <h4 class="text-2xl font-display font-bold text-white mb-6">Galería Show Laserman</h4>
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
            
            <!-- SERVICIO 2: TÚNELES INMERSIVOS -->
            <div class="relative bg-dark lg:col-span-2 flex flex-col lg:justify-end">
                <div class="p-4 md:p-10 group hover:bg-zinc-900/30 transition-all">
                    <!-- Foto adicional solo en desktop -->
                    <div class="hidden lg:block mb-2">
                        <img src="https://laserman.com.ar/wp-content/uploads/2026/01/20260120_1455_Image-Generation_remix_01kfe8psxjfnpr1q4b3whv7k3d-e1769828290796.png"
                             class="w-full aspect-video object-cover scroll-colorize"
                             style="filter: grayscale(1);"
                             alt="Túnel preview">
                    </div>
                    <div class="mb-6 lg:mb-2">
                        <img src="https://laserman.com.ar/wp-content/uploads/2026/01/b.jpg"
                             class="w-full aspect-video object-cover scroll-colorize"
                             style="filter: grayscale(1);"
                             alt="Túneles">
                    </div>
                    <h3 class="text-2xl font-display font-bold uppercase mb-2">Túneles Inmersivos</h3>
                    <p class="text-xs text-zinc-500 uppercase tracking-widest mb-4">Efecto WOW garantizado</p>
                    <p class="text-sm text-zinc-300 leading-relaxed mb-6">
                        Entrada espectacular para tu evento. Ideal para recepciones, fiestas de 15, casamientos y activaciones de marca.
                    </p>
                    <button onclick="toggleService('tuneles')" class="inline-block text-neon text-xs uppercase tracking-widest hover:underline mb-4">
                        MÁS INFO →
                    </button>
                </div>
                <div id="service-tuneles" class="service-expanded border-t border-zinc-900">
                    <div class="p-4 md:p-10 bg-zinc-900/50">
                        <h4 class="text-2xl font-display font-bold text-white mb-6">Galería Túneles</h4>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="row-span-2">
                                <img src="https://laserman.com.ar/wp-content/uploads/2026/01/task_01kfe7ne94frmsjd5kj4ty3can_1768930654_img_0.webp"
                                     class="w-full h-full object-cover" alt="Túnel 1">
                            </div>
                            <img src="https://laserman.com.ar/wp-content/uploads/2025/12/Captura-de-Pantalla-2024-09-22-a-las-05.50.08-e1765383365353.png"
                                 class="w-full aspect-video object-cover" alt="Túnel 2">
                            <img src="https://laserman.com.ar/wp-content/uploads/2026/01/VID_20250818_052243_191-frame-at-0m4s.jpg"
                                 class="w-full aspect-video object-cover" alt="Túnel 3">
                            <img src="https://laserman.com.ar/wp-content/uploads/2026/01/corrientes-01.jpg"
                                 class="w-full aspect-video object-cover col-span-2" alt="Túnel 4">
                        </div>
                        <a href="#contacto" class="mt-6 inline-block px-8 py-3 bg-neon text-black font-bold uppercase text-sm hover:bg-white transition">
                            Cotizar Túneles
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- SERVICIO 3: PROYECCIONES LÁSER -->
            <div class="relative bg-dark lg:col-span-3 flex flex-col">
                <div class="p-4 md:p-10 group hover:bg-zinc-900/30 transition-all">
                    <div class="mb-6">
                        <img src="<?php echo esc_url($data['services'][2]['image']); ?>"
                             class="w-full aspect-video object-cover scroll-colorize"
                             style="filter: grayscale(1);"
                             alt="Proyecciones">
                    </div>
                    <h3 class="text-2xl font-display font-bold uppercase mb-2">Proyecciones de Alto Impacto</h3>
                    <p class="text-xs text-zinc-500 uppercase tracking-widest mb-4">Tu marca en grande</p>
                    <p class="text-sm text-zinc-300 leading-relaxed mb-6">
                        Logos, animaciones y mensajes proyectados en edificios, montañas o cualquier superficie. Visible a kilómetros.
                    </p>
                    <button onclick="toggleService('proyecciones')" class="inline-block text-neon text-xs uppercase tracking-widest hover:underline mb-4">
                        MÁS INFO →
                    </button>
                </div>
                <div id="service-proyecciones" class="service-expanded border-t border-zinc-900">
                    <div class="p-4 md:p-10 bg-zinc-900/50">
                        <h4 class="text-2xl font-display font-bold text-white mb-6">Galería Proyecciones</h4>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="row-span-2">
                                <img src="https://laserman.com.ar/wp-content/uploads/2025/12/baja-DEOPAnRTAMENTO.jpg"
                                     class="w-full h-full object-cover" alt="Proyección 1">
                            </div>
                            <img src="https://laserman.com.ar/wp-content/uploads/2025/12/GOPR1347_1691738660171-scaled.jpg"
                                 class="w-full aspect-video object-cover" alt="Proyección 2">
                            <img src="https://laserman.com.ar/inicio/wp-content/uploads/2025/08/Artboard-3-e1755670756831.jpg"
                                 class="w-full aspect-video object-cover" alt="Proyección 3">
                            <img src="https://laserman.com.ar/wp-content/uploads/2025/12/IMG-20250809-WA00121.jpg"
                                 class="w-full aspect-video object-cover col-span-2" alt="Proyección 4">
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
                        💰 MEJOR VALOR
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
                        Combiná Laserman + Túneles + Proyecciones para un evento que nadie va a olvidar. Consultá por paquetes.
                    </p>
                    <button onclick="toggleService('paquete')" class="inline-block text-neon text-xs uppercase tracking-widest hover:underline mb-4">
                        MÁS INFO →
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
                            <img src="https://lase
