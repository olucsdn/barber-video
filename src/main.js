import { barbershopConfig, getWhatsAppBookingUrl } from './data.js';
import { icons } from './icons.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroVideo();
  renderAboutHighlights();
  renderServices();
  renderGallery();
  renderDifferentials();
  initWhatsAppButtons();
  initFooter();
});

/**
 * 1. NAVBAR & MENU MOBILE
 */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileDrawerBackdrop = document.getElementById('mobile-drawer-backdrop');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const navLinks = document.querySelectorAll('.nav-link-item');

  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('bg-dark-950/95', 'backdrop-blur-md', 'py-4', 'border-b', 'border-zinc-850', 'shadow-xl');
      navbar.classList.remove('py-6', 'bg-transparent');
    } else {
      navbar.classList.remove('bg-dark-950/95', 'backdrop-blur-md', 'py-4', 'border-b', 'border-zinc-850', 'shadow-xl');
      navbar.classList.add('py-6', 'bg-transparent');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  const toggleMenu = (open) => {
    if (open) {
      mobileDrawer.classList.remove('translate-x-full');
      mobileDrawerBackdrop.classList.remove('opacity-0', 'pointer-events-none');
      document.body.style.overflow = 'hidden';
    } else {
      mobileDrawer.classList.add('translate-x-full');
      mobileDrawerBackdrop.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = '';
    }
  };

  if (menuBtn) menuBtn.addEventListener('click', () => toggleMenu(true));
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', () => toggleMenu(false));
  if (mobileDrawerBackdrop) mobileDrawerBackdrop.addEventListener('click', () => toggleMenu(false));

  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
}

/**
 * 2. HERO BACKGROUND VIDEO
 */
function initHeroVideo() {
  const video = document.getElementById('hero-video');
  if (!video) return;

  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;

  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.warn("Autoplay prevenido pelo navegador:", error);
    });
  }
}

/**
 * 3. SOBRE - DESTAQUES EDITORIAIS (SEM CARDS EM BLOCO)
 */
function renderAboutHighlights() {
  const container = document.getElementById('about-highlights-grid');
  if (!container) return;

  container.innerHTML = barbershopConfig.about.highlights.map((item, index) => {
    return `
      <div class="py-4 border-b border-zinc-850 sm:border-b-0 sm:py-0">
        <div class="flex items-center gap-2.5">
          <span class="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
          <h4 class="font-display font-semibold text-white text-base tracking-wide">${item.title}</h4>
        </div>
        <p class="text-red-400 text-sm mt-1.5 leading-relaxed pl-4">${item.desc}</p>
      </div>
    `;
  }).join('');
}

/**
 * 4. SERVIÇOS & PREÇOS (MENU EDITORIAL DE BARBEARIA)
 */
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  container.innerHTML = barbershopConfig.services.map((service) => {
    const bookingUrl = getWhatsAppBookingUrl(service.name);
    const badgeHtml = service.featured && service.badge
      ? `<span class="inline-block text-[10px] font-mono uppercase tracking-wider text-red-300 border border-zinc-700 px-2 py-0.5 rounded">${service.badge}</span>`
      : '';

    return `
      <div class="group py-6 border-b border-zinc-800/80 hover:border-zinc-600 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        <!-- Info do Serviço -->
        <div class="flex-1 pr-0 md:pr-8">
          <div class="flex items-center flex-wrap gap-2.5">
            <h3 class="font-display text-lg sm:text-xl font-bold text-white group-hover:text-zinc-100 transition-colors">
              ${service.name}
            </h3>
            <span class="text-xs text-red-400 font-mono flex items-center gap-1">
              ${icons.clock}
              ${service.duration}
            </span>
            ${badgeHtml}
          </div>
          <p class="text-red-400 text-xs sm:text-sm mt-1.5 leading-relaxed max-w-2xl font-light">
            ${service.description}
          </p>
        </div>

        <!-- Preço e Botão WhatsApp -->
        <div class="flex items-center justify-between md:justify-end gap-6 shrink-0 pt-2 md:pt-0">
          <div class="text-left md:text-right">
            <span class="block text-[10px] uppercase font-mono tracking-wider text-red-400">Valor</span>
            <span class="font-display text-2xl font-bold text-white tracking-tight">${service.price}</span>
          </div>

          <a href="${bookingUrl}" target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-850 hover:bg-whatsapp text-zinc-200 hover:text-white border border-zinc-750 hover:border-whatsapp text-xs font-semibold tracking-wider uppercase transition-all duration-200">
            <span>Agendar</span>
            ${icons['arrow-right']}
          </a>
        </div>

      </div>
    `;
  }).join('');
}

/**
 * 5. GALERIA DE ESTILOS COM ESPAÇOS RESERVADOS PARA FOTOS REAIS
 */
function renderGallery() {
  const gridContainer = document.getElementById('gallery-grid');
  if (!gridContainer) return;

  gridContainer.innerHTML = barbershopConfig.galleryItems.map((item) => {
    const bookingUrl = getWhatsAppBookingUrl(item.title);

    return `
      <div class="group relative aspect-[4/5] rounded-xl overflow-hidden border border-zinc-800/80 hover:border-zinc-600 bg-dark-900 transition-all duration-300 flex flex-col justify-between p-6">
        
        <!-- Topo: Categoria & Indicador de Espaço -->
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-mono font-semibold tracking-widest uppercase text-red-300 border border-zinc-800 bg-dark-950/80 px-2.5 py-1 rounded">
            ${item.categoryName}
          </span>
          <span class="text-zinc-600 group-hover:text-red-400 transition-colors" title="Espaço para Foto Real">
            ${icons.camera}
          </span>
        </div>

        <!-- Centro: Marca d'água Monograma & Moldura Discreta -->
        <div class="my-auto flex flex-col items-center justify-center text-center py-6">
          <div class="w-16 h-16 rounded-xl border border-dashed border-zinc-800 flex items-center justify-center text-zinc-700 group-hover:border-zinc-700 group-hover:text-zinc-500 transition-all">
            <span class="font-display font-bold text-2xl">L</span>
          </div>
          <span class="text-[11px] font-mono tracking-wider text-red-400 uppercase mt-3">
            Espaço para Foto
          </span>
        </div>

        <!-- Rodapé: Nome do Estilo & Botão WhatsApp -->
        <div class="pt-4 border-t border-zinc-850">
          <h4 class="font-display font-bold text-white text-base tracking-wide leading-snug">
            ${item.title}
          </h4>
          <p class="text-red-400 text-xs mt-1 leading-relaxed line-clamp-2">
            ${item.description}
          </p>

          <a href="${bookingUrl}" target="_blank" rel="noopener noreferrer"
             class="mt-3.5 inline-flex items-center gap-2 text-xs font-semibold text-red-300 hover:text-whatsapp transition-colors">
            <span>Pedir esse corte no WhatsApp</span>
            ${icons['arrow-right']}
          </a>
        </div>

      </div>
    `;
  }).join('');
}

/**
 * 6. DIFERENCIAIS EDITORIAIS (SEM CAIXAS QUADRADAS DE SAAS)
 */
function renderDifferentials() {
  const container = document.getElementById('differentials-grid');
  if (!container) return;

  container.innerHTML = barbershopConfig.differentials.map((diff, index) => {
    return `
      <div class="py-8 md:py-0 border-b border-zinc-850 md:border-b-0 md:border-r last:border-r-0 md:px-8 first:pl-0 last:pr-0">
        <span class="text-3xl font-display font-light text-red-400 block">${diff.number}</span>
        <h3 class="font-display text-xl font-bold text-white mt-3 tracking-wide">
          ${diff.title}
        </h3>
        <p class="text-red-400 text-sm mt-3 leading-relaxed font-light">
          ${diff.description}
        </p>
      </div>
    `;
  }).join('');
}

/**
 * 7. BOTÕES DO WHATSAPP COM IDENTIDADE OFICIAL
 */
function initWhatsAppButtons() {
  const bookingUrl = getWhatsAppBookingUrl();

  const heroCta = document.getElementById('hero-whatsapp-btn');
  if (heroCta) {
    heroCta.href = bookingUrl;
  }

  const finalCta = document.getElementById('final-cta-btn');
  if (finalCta) {
    finalCta.href = bookingUrl;
  }

  const floatingBtn = document.getElementById('floating-whatsapp');
  if (floatingBtn) {
    floatingBtn.href = bookingUrl;
  }

  const contactBtn = document.getElementById('contact-whatsapp-btn');
  if (contactBtn) {
    contactBtn.href = bookingUrl;
  }

  const headerBtn = document.getElementById('header-whatsapp-btn');
  if (headerBtn) {
    headerBtn.href = bookingUrl;
  }
}

/**
 * 8. RODAPÉ & ANO
 */
function initFooter() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
