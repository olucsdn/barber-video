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
      navbar.classList.add('bg-barber-black/90', 'backdrop-blur-md', 'py-4', 'border-b', 'border-gold-500/20', 'shadow-2xl');
      navbar.classList.remove('py-6', 'bg-transparent');
    } else {
      navbar.classList.remove('bg-barber-black/90', 'backdrop-blur-md', 'py-4', 'border-b', 'border-gold-500/20', 'shadow-2xl');
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

  container.innerHTML = barbershopConfig.about.highlights.map(item => `
    <div class="flex items-start gap-4 p-4 rounded-xl bg-barber-surface/60 border border-gold-500/10 hover:border-gold-500/30 transition-colors">
      <div class="w-10 h-10 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center shrink-0">
        ${icons['check-circle']}
      </div>
      <div>
        <h4 class="font-display font-semibold text-white text-base tracking-wide">${item.title}</h4>
        <p class="text-zinc-400 text-sm mt-1 leading-relaxed">${item.desc}</p>
      </div>
    </div>
  `).join('');
}

/**
 * 4. SERVIÇOS & CARDS ELEGANTES
 */
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  container.innerHTML = barbershopConfig.services.map(service => {
    const iconHtml = icons[service.icon] || icons.scissors;
    const bookingUrl = getWhatsAppBookingUrl(service.name);

    return `
      <div class="card-luxury rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group ${service.featured ? 'ring-1 ring-gold-500/40 shadow-gold' : ''}">
        ${service.badge ? `
          <div class="absolute -top-3 right-6 bg-gradient-to-r from-gold-600 to-gold-400 text-barber-black font-semibold text-xs tracking-wider uppercase px-3 py-1 rounded-full shadow-lg">
            ${service.badge}
          </div>
        ` : ''}

        <div>
          <div class="flex items-center justify-between gap-4 mb-4">
            <div class="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center border border-gold-500/20 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all duration-300">
              ${iconHtml}
            </div>
            <div class="flex items-center gap-1.5 text-xs font-medium text-zinc-400 bg-barber-black/60 px-3 py-1 rounded-full border border-white/5">
              ${icons.clock}
              <span>${service.duration}</span>
            </div>
          </div>

          <h3 class="font-display text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
            ${service.name}
          </h3>

          <p class="text-zinc-400 text-sm mt-2.5 leading-relaxed">
            ${service.description}
          </p>
        </div>

        <div class="pt-6 mt-6 border-t border-white/5 flex items-center justify-between gap-4">
          <div>
            <span class="block text-[11px] uppercase tracking-wider text-zinc-400">Valor</span>
            <span class="font-display text-2xl font-bold text-gold-400 tracking-tight">${service.price}</span>
          </div>

          <a href="${bookingUrl}" target="_blank" rel="noopener noreferrer"
             class="btn-shine inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gold-500/15 hover:bg-gold-500 text-gold-300 hover:text-barber-black text-xs font-bold tracking-wider uppercase transition-all duration-300 border border-gold-500/30 hover:border-gold-500">
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
              class="gallery-filter-btn px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${cat.id === currentCategory ? 'bg-gold-500 text-barber-black shadow-lg shadow-gold-500/20' : 'bg-barber-card/80 text-zinc-400 hover:text-white border border-white/5 hover:border-gold-500/30'}">
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
  gridContainer.innerHTML = filteredGallery.map((item, index) => `
    <div data-index="${index}" class="gallery-card group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer bg-barber-card border border-white/5 hover:border-gold-500/40 transition-all duration-500 shadow-xl">
      <img src="${item.thumbnailUrl}" alt="${item.title}" loading="lazy"
           class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-95 group-hover:brightness-105" />
      
      <div class="absolute inset-0 bg-gradient-to-t from-barber-black via-barber-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
      
      <div class="absolute top-4 left-4">
        <span class="text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-barber-black/80 text-gold-400 border border-gold-500/20 backdrop-blur-md">
          ${item.categoryName}
        </span>
      </div>

      <div class="absolute bottom-0 inset-x-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h4 class="font-display font-bold text-white text-lg tracking-wide group-hover:text-gold-300 transition-colors">
          ${item.title}
        </h4>
        <p class="text-zinc-300 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
          ${item.description}
        </p>
      </div>
    </div>
  `).join('');

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

  if (img) img.src = item.imageUrl;
  if (title) title.textContent = item.title;
  if (desc) desc.textContent = item.description;
  if (cat) cat.textContent = item.categoryName;
  if (counter) counter.textContent = `${currentLightboxIndex + 1} / ${filteredGallery.length}`;
}

/**
 * 6. DIFERENCIAIS
 */
function renderDifferentials() {
  const container = document.getElementById('differentials-grid');
  if (!container) return;

  container.innerHTML = barbershopConfig.differentials.map((diff, index) => {
    const iconHtml = icons[diff.icon] || icons['user-check'];
    return `
      <div class="p-8 rounded-2xl bg-barber-card/60 border border-gold-500/15 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl">
        <div>
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-700/10 text-gold-400 flex items-center justify-center border border-gold-500/30 group-hover:scale-110 group-hover:bg-gold-500/25 transition-transform duration-300 mb-6">
            ${iconHtml}
          </div>
          <span class="text-xs font-mono text-gold-500/60 font-semibold">0${index + 1}</span>
          <h3 class="font-display text-xl font-bold text-white mt-1 group-hover:text-gold-300 transition-colors">
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
