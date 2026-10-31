import { barbershopConfig, getWhatsAppBookingUrl } from './data.js';
import { icons } from './icons.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroVideo();
  renderAboutHighlights();
  renderServices();
  renderGallery();
  renderDifferentials();
  initFinalCta();
  initFloatingWhatsApp();
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

  // Sticky scroll effect
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('bg-barber-black/95', 'backdrop-blur-md', 'py-4', 'border-b', 'border-white/10', 'shadow-2xl');
      navbar.classList.remove('py-6', 'bg-transparent');
    } else {
      navbar.classList.remove('bg-barber-black/95', 'backdrop-blur-md', 'py-4', 'border-b', 'border-white/10', 'shadow-2xl');
      navbar.classList.add('py-6', 'bg-transparent');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile Drawer Toggle
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

  if (menuBtn) {
    menuBtn.addEventListener('click', () => toggleMenu(true));
  }
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', () => toggleMenu(false));
  }
  if (mobileDrawerBackdrop) {
    mobileDrawerBackdrop.addEventListener('click', () => toggleMenu(false));
  }

  // Close drawer when clicking any link
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

  // Garante autoplay sem som
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;

  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.warn("Autoplay prevenido pelo navegador:", error);
      // Se o autoplay foi bloqueado, o poster fotográfico já garante a experiência visual
    });
  }
}

/**
 * 3. SOBRE A BARBEARIA - DESTAQUES
 */
function renderAboutHighlights() {
  const container = document.getElementById('about-highlights-grid');
  if (!container) return;

  container.innerHTML = barbershopConfig.about.highlights.map((item, index) => {
    const isRed = index % 2 === 0;
    const iconColor = isRed ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    const hoverBorder = isRed ? 'hover:border-red-500/30' : 'hover:border-blue-500/30';
    return `
      <div class="flex items-start gap-4 p-4 rounded-xl bg-barber-surface/60 border border-white/5 ${hoverBorder} transition-colors">
        <div class="w-10 h-10 rounded-lg ${iconColor} border flex items-center justify-center shrink-0">
          ${icons['check-circle']}
        </div>
        <div>
          <h4 class="font-display font-semibold text-white text-base tracking-wide">${item.title}</h4>
          <p class="text-zinc-400 text-sm mt-1 leading-relaxed">${item.desc}</p>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * 4. SERVIÇOS & CARDS ELEGANTES
 */
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  container.innerHTML = barbershopConfig.services.map((service, index) => {
    const bookingUrl = getWhatsAppBookingUrl(service.name);
    const isRedCard = service.id === 'degra-fade' || (index % 2 === 0 && !service.featured);
    const accentText = isRedCard ? 'text-red-400' : 'text-blue-400';
    
    // Featured badges & styling
    let ringClass = '';
    let badgeHtml = '';
    // White button styling with dark text for high contrast & luxury feel
    let btnClass = 'bg-white hover:bg-zinc-200 text-barber-black font-bold border border-white shadow-md shadow-white/10';

    if (service.id === 'degra-fade') {
      ringClass = 'ring-1 ring-red-500/50 shadow-lg shadow-red-500/10';
      badgeHtml = `<div class="absolute -top-3 right-6 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-xs tracking-wider uppercase px-3 py-1 rounded-full shadow-lg">Mais Pedido</div>`;
      btnClass = 'bg-white hover:bg-zinc-200 text-barber-black font-extrabold border border-white shadow-lg shadow-white/20';
    } else if (service.id === 'combo-corte-barba') {
      ringClass = 'ring-1 ring-blue-500/50 shadow-lg shadow-blue-500/10';
      badgeHtml = `<div class="absolute -top-3 right-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-xs tracking-wider uppercase px-3 py-1 rounded-full shadow-lg">Mais Escolhido</div>`;
      btnClass = 'bg-white hover:bg-zinc-200 text-barber-black font-extrabold border border-white shadow-lg shadow-white/20';
    }

    return `
      <div class="card-luxury rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group ${ringClass}">
        ${badgeHtml}

        <div>
          <h3 class="font-display text-xl font-bold text-white group-hover:text-zinc-100 transition-colors">
            ${service.name}
          </h3>

          <p class="text-zinc-400 text-sm mt-2.5 leading-relaxed">
            ${service.description}
          </p>
        </div>

        <div class="pt-6 mt-6 border-t border-white/5 flex items-center justify-between gap-4">
          <div>
            <span class="block text-[11px] uppercase tracking-wider text-zinc-400">Valor</span>
            <span class="font-display text-2xl font-bold ${accentText} tracking-tight">${service.price}</span>
          </div>

          <a href="${bookingUrl}" target="_blank" rel="noopener noreferrer"
             class="btn-shine inline-flex items-center gap-2 px-4 py-2.5 rounded-xl ${btnClass} text-xs font-bold tracking-wider uppercase transition-all duration-300">
            <span>Agendar</span>
            ${icons['arrow-right']}
          </a>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * 5. GALERIA DE CORTES COM CATEGORIAS E LIGHTBOX
 */
let currentCategory = 'todos';
let currentLightboxIndex = 0;
let filteredGallery = [];

function renderGallery() {
  const tabsContainer = document.getElementById('gallery-tabs');
  const gridContainer = document.getElementById('gallery-grid');
  if (!gridContainer) return;

  // Render Tabs if container exists
  if (tabsContainer) {
    tabsContainer.innerHTML = barbershopConfig.galleryCategories.map(cat => `
      <button data-category="${cat.id}"
              class="gallery-filter-btn px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${cat.id === currentCategory ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'bg-barber-card/80 text-zinc-400 hover:text-white border border-white/5 hover:border-blue-500/30'}">
        ${cat.name}
      </button>
    `).join('');

    // Tab click event
    tabsContainer.querySelectorAll('.gallery-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cat = e.currentTarget.getAttribute('data-category');
        currentCategory = cat;
        renderGallery();
      });
    });
  }

  // Filter items
  filteredGallery = currentCategory === 'todos'
    ? barbershopConfig.galleryItems
    : barbershopConfig.galleryItems.filter(item => item.category === currentCategory);

  // Render Grid
  gridContainer.innerHTML = filteredGallery.map((item, index) => {
    const isRed = index % 2 === 0;
    const badgeColor = isRed ? 'text-red-400 border-red-500/30' : 'text-blue-400 border-blue-500/30';
    const hoverBorder = isRed ? 'hover:border-red-500/40' : 'hover:border-blue-500/40';

    return `
      <div data-index="${index}" class="gallery-card group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer bg-barber-card border border-white/5 ${hoverBorder} transition-all duration-500 shadow-xl">
        <img src="${item.thumbnailUrl}" alt="${item.title}" loading="lazy"
             class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-95 group-hover:brightness-105" />
        
        <div class="absolute inset-0 bg-gradient-to-t from-barber-black via-barber-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        
        <div class="absolute top-4 left-4">
          <span class="text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-barber-black/80 ${badgeColor} border backdrop-blur-md">
            ${item.categoryName}
          </span>
        </div>

        <div class="absolute bottom-0 inset-x-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h4 class="font-display font-bold text-white text-lg tracking-wide group-hover:text-zinc-100 transition-colors">
            ${item.title}
          </h4>
          <p class="text-zinc-300 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
            ${item.description}
          </p>
        </div>
      </div>
    `;
  }).join('');

  // Attach Lightbox Trigger
  gridContainer.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      openLightbox(idx);
    });
  });

  initLightbox();
}

/**
 * LIGHTBOX MODAL
 */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  if (!modal) return;

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-backdrop')) {
      closeModal();
    }
  });

  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length;
    updateLightboxContent();
  });

  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredGallery.length;
    updateLightboxContent();
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (modal.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') prevBtn?.click();
    if (e.key === 'ArrowRight') nextBtn?.click();
  });
}

function openLightbox(index) {
  const modal = document.getElementById('lightbox-modal');
  if (!modal || !filteredGallery[index]) return;

  currentLightboxIndex = index;
  updateLightboxContent();
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function updateLightboxContent() {
  const item = filteredGallery[currentLightboxIndex];
  if (!item) return;

  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const desc = document.getElementById('lightbox-desc');
  const cat = document.getElementById('lightbox-category');
  const counter = document.getElementById('lightbox-counter');
  const cta = document.getElementById('lightbox-cta');

  if (img) img.src = item.imageUrl;
  if (title) title.textContent = item.title;
  if (desc) desc.textContent = item.description;
  if (cat) cat.textContent = item.categoryName;
  if (counter) counter.textContent = `${currentLightboxIndex + 1} / ${filteredGallery.length}`;
  if (cta) {
    const text = encodeURIComponent(`Olá! Vi o corte "${item.title}" na sua galeria e gostaria de fazer esse estilo.`);
    cta.href = `https://wa.me/5538988399608?text=${text}`;
  }
}

/**
 * 6. DIFERENCIAIS
 */
function renderDifferentials() {
  const container = document.getElementById('differentials-grid');
  if (!container) return;

  container.innerHTML = barbershopConfig.differentials.map((diff, index) => {
    const isRed = index % 2 === 0;
    const numColor = isRed ? 'text-red-500/60' : 'text-blue-500/60';
    const borderHover = isRed ? 'hover:border-red-500/40' : 'hover:border-blue-500/40';
    const titleHover = isRed ? 'group-hover:text-red-300' : 'group-hover:text-blue-300';

    return `
      <div class="p-8 rounded-2xl bg-barber-card/60 border border-white/5 ${borderHover} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl">
        <div>
          <span class="text-xs font-mono ${numColor} font-semibold tracking-wider">0${index + 1}</span>
          <h3 class="font-display text-xl font-bold text-white mt-3 ${titleHover} transition-colors">
            ${diff.title}
          </h3>
          <p class="text-zinc-400 text-sm mt-3 leading-relaxed">
            ${diff.description}
          </p>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * 7. CHAMADA FINAL (CTA)
 */
function initFinalCta() {
  const ctaBtn = document.getElementById('final-cta-btn');
  if (ctaBtn) {
    ctaBtn.href = getWhatsAppBookingUrl();
  }
}

/**
 * 8. BOTÃO FLUTUANTE DO WHATSAPP
 */
function initFloatingWhatsApp() {
  const btn = document.getElementById('floating-whatsapp');
  if (btn) {
    btn.href = getWhatsAppBookingUrl();
  }
}

/**
 * 9. RODAPÉ & ANO
 */
function initFooter() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
