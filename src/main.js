import { barbershopConfig, getWhatsAppBookingUrl } from './data.js';
import { icons } from './icons.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroVideo();
  renderAboutHighlights();
  renderGallery();
  renderServices();
  renderDifferentials();
  renderReviews();
  initWhatsAppButtons();
  initFooter();
  updateBusinessHoursStatus();
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
      <div class="py-3.5 border-b border-zinc-800/60 sm:border-b-0 sm:py-0 first:pt-0 last:border-b-0 last:pb-0">
        <div class="flex items-center gap-2.5">
          <span class="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
          <h4 class="font-display font-semibold text-white text-base tracking-wide">${item.title}</h4>
        </div>
        <p class="text-white text-sm mt-1 leading-relaxed pl-4">${item.desc}</p>
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
      ? `<span class="inline-block text-[10px] font-mono uppercase tracking-wider text-white border border-zinc-700 px-2 py-0.5 rounded">${service.badge}</span>`
      : '';

    return `
      <div class="group py-6 border-b border-zinc-800/80 hover:border-zinc-600 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        <!-- Info do Serviço -->
        <div class="flex-1 pr-0 md:pr-8">
          <div class="flex items-center flex-wrap gap-2.5">
            <h3 class="font-display text-lg sm:text-xl font-bold text-white group-hover:text-zinc-100 transition-colors">
              ${service.name}
            </h3>
            ${badgeHtml}
          </div>
          <p class="text-white text-xs sm:text-sm mt-1.5 leading-relaxed max-w-2xl font-light">
            ${service.description}
          </p>
        </div>

        <!-- Tempo Estimado e Botão WhatsApp -->
        <div class="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-2 md:pt-0">
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-850 border border-zinc-800 text-xs font-mono text-white">
            ⏱️ ${service.duration}
          </span>

          <a href="${bookingUrl}" target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-850 hover:bg-whatsapp text-white hover:text-white border border-zinc-750 hover:border-whatsapp text-xs font-semibold tracking-wider uppercase transition-all duration-200">
            <span>Consultar horários →</span>
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
      <div class="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-600 bg-dark-900 transition-all duration-300 flex flex-col justify-between p-6 shadow-xl">
        
        <!-- Foto Real de Fundo com Zoom Suave no Hover -->
        <img src="${item.image}" alt="${item.title}" class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        
        <!-- Gradiente para Contraste e Legibilidade Editorial -->
        <div class="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-dark-950/20"></div>

        <!-- Topo: Categoria & Indicador -->
        <div class="relative z-10 flex items-center justify-between">
          <span class="text-[10px] font-mono font-semibold tracking-widest uppercase text-white border border-zinc-700/80 bg-dark-950/80 backdrop-blur-sm px-2.5 py-1 rounded">
            ${item.categoryName}
          </span>
          <span class="text-[10px] font-mono text-zinc-300 bg-dark-950/70 backdrop-blur-sm border border-zinc-800 px-2 py-0.5 rounded">
            Foto Real
          </span>
        </div>

        <!-- Rodapé: Nome do Estilo & Botão WhatsApp -->
        <div class="relative z-10 pt-4 border-t border-zinc-800/80 bg-dark-950/80 backdrop-blur-md -mx-6 -mb-6 p-6">
          <h4 class="font-display font-bold text-white text-base tracking-wide leading-snug">
            ${item.title}
          </h4>
          <p class="text-zinc-300 text-xs mt-1 leading-relaxed line-clamp-2 font-light">
            ${item.description}
          </p>

          <a href="${bookingUrl}" target="_blank" rel="noopener noreferrer"
             class="mt-3.5 inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-whatsapp transition-colors">
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
        <span class="text-3xl font-display font-light text-white block">${diff.number}</span>
        <h3 class="font-display text-xl font-bold text-white mt-3 tracking-wide">
          ${diff.title}
        </h3>
        <p class="text-white text-sm mt-3 leading-relaxed font-light">
          ${diff.description}
        </p>
      </div>
    `;
  }).join('');
}

/**
 * 7. DEPOIMENTOS E AVALIAÇÕES (FILTRA APENAS COMENTÁRIOS ACIMA DE 4 ESTRELAS)
 */
function renderReviews() {
  const container = document.getElementById('reviews-grid');
  if (!container || !barbershopConfig.reviews) return;

  // Filtrar apenas avaliações com nota estritamente acima de 4 estrelas (> 4)
  const topReviews = barbershopConfig.reviews.filter((rev) => rev.rating > 4);

  const reviewsHtml = topReviews.map((rev) => {
    const starCount = Math.floor(rev.rating);
    const starsHtml = Array.from({ length: 5 }, (_, i) => {
      const isFilled = i < starCount;
      return `<span class="${isFilled ? 'text-amber-400' : 'text-zinc-600'}">${icons.star}</span>`;
    }).join('');

    const avatarHtml = rev.avatar
      ? `<img src="${rev.avatar}" alt="${rev.name}" class="w-10 h-10 rounded-full object-cover border border-zinc-700 shrink-0" loading="lazy" />`
      : `<div class="w-10 h-10 rounded-full bg-dark-800 border border-zinc-700 flex items-center justify-center font-display font-bold text-white text-sm shrink-0">${rev.name.charAt(0)}</div>`;

    return `
      <div class="p-6 rounded-2xl border border-zinc-800 bg-dark-950 flex flex-col justify-between hover:border-zinc-700 transition-all duration-200">
        <div>
          <!-- Estrelas e Tempo -->
          <div class="flex items-center justify-between gap-2 mb-4">
            <div class="flex items-center gap-1.5">
              <div class="flex items-center gap-0.5">
                ${starsHtml}
              </div>
              <span class="text-xs font-mono font-bold text-white">${rev.rating.toFixed(1)}</span>
            </div>
            <span class="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">${rev.date}</span>
          </div>

          <!-- Comentário -->
          <p class="text-white text-sm font-light leading-relaxed italic">
            "${rev.comment}"
          </p>
        </div>

        <!-- Rodapé do Card: Cliente e Serviço -->
        <div class="pt-5 mt-5 border-t border-zinc-850 flex items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            ${avatarHtml}
            <div>
              <h4 class="font-display font-bold text-white text-sm tracking-wide leading-snug">${rev.name}</h4>
              <span class="text-xs text-zinc-400 font-mono block">${rev.service}</span>
            </div>
          </div>
          <span class="text-[10px] font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-950/30 px-2 py-0.5 rounded shrink-0">
            ✓ Google
          </span>
        </div>
      </div>
    `;
  }).join('');

  const googleSummaryCard = `
    <div class="p-6 rounded-2xl border border-zinc-800 bg-dark-900/60 flex flex-col justify-between hover:border-zinc-700 transition-all duration-200">
      <div>
        <div class="flex items-center justify-between gap-2 mb-4">
          <span class="text-[10px] font-mono text-whatsapp border border-whatsapp/20 bg-whatsapp/10 px-2 py-0.5 rounded uppercase tracking-wider">
            Ficha Oficial Verificada
          </span>
          <span class="text-xs text-zinc-400 font-mono">Google Maps</span>
        </div>
        <div class="flex items-baseline gap-2">
          <span class="font-display text-4xl font-extrabold text-white">5.0</span>
          <div class="flex text-amber-400">
            ${Array.from({ length: 5 }, () => icons.star).join('')}
          </div>
        </div>
        <h4 class="font-display font-bold text-white text-base mt-2">100% de Avaliações 5 Estrelas</h4>
        <p class="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed mt-2">
          Todas as avaliações registradas na ficha oficial do Google Maps possuem nota máxima. Já é cliente? Deixe seu depoimento também.
        </p>
      </div>

      <div class="pt-5 mt-5 border-t border-zinc-850">
        <a href="https://maps.app.goo.gl/EcNX3bJfGypRCKJ58?g_st=ac" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-whatsapp transition-colors">
          <span>Ver avaliações no Google Maps</span>
          ${icons['arrow-right']}
        </a>
      </div>
    </div>
  `;

  container.innerHTML = reviewsHtml + googleSummaryCard;
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

/**
 * 9. STATUS DO HORÁRIO DE FUNCIONAMENTO (TEMPO REAL)
 */
function updateBusinessHoursStatus() {
  const badge = document.getElementById('business-status-badge');
  if (!badge) return;

  const now = new Date();
  const day = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
  const hour = now.getHours();

  // Seg a Sáb: 09h às 21h (entre 09:00 e 20:59)
  const isOpen = (day >= 1 && day <= 6) && (hour >= 9 && hour < 21);

  if (isOpen) {
    badge.className = 'inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded border border-emerald-500/30 bg-emerald-950/40 text-emerald-400';
    badge.textContent = '🟢 Aberto agora';
  } else {
    badge.className = 'inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded border border-rose-500/30 bg-rose-950/40 text-rose-400';
    badge.textContent = '🔴 Fechado no momento -- Agende seu horário';
  }
}
