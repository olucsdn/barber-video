/**
 * ===================================================================
 * LEO'S BARBEARIA — DADOS DO SITE & CONFIGURAÇÃO
 * ===================================================================
 * Barbeiro: Leonardo.
 * Atendimento individual com horário marcado em Montes Claros - MG.
 */

export const barbershopConfig = {
  // Identidade & Contato
  name: "LEO'S",
  subtitle: "BARBEARIA",
  barberName: "Leonardo",
  tagline: "Corte no capricho. Atendimento individual.",
  phone: "(38) 98839-9608",
  phoneFormatted: "+5538988399608",
  whatsappNumber: "5538988399608",
  whatsappDefaultMessage: "Olá, Leonardo! Gostaria de agendar um horário para corte de cabelo.",
  instagramUrl: "https://www.instagram.com/leo_cort3z/",
  instagramHandle: "@leo_cort3z",
  
  // Localização Real
  address: {
    street: "R. Um",
    number: "124",
    complement: "",
    neighborhood: "Jardim Primavera",
    city: "Montes Claros",
    state: "MG",
    cep: "39402-532",
    full: "R. Um, 124 - Jardim Primavera, Montes Claros - MG, 39402-532",
    googleMapsLink: "https://maps.app.goo.gl/EcNX3bJfGypRCKJ58?g_st=ac",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.6148!2d-43.8140928!3d-16.7018496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x754ab02b5cb4c55%3A0x82a0fed8a64810bc!2sL%C3%89O%20BARBER!5e0!3m2!1spt-BR!2sbr!4v1714500000000!5m2!1spt-BR!2sbr",
  },

  // Hero com Vídeo
  hero: {
    title: "CORTE NO CAPRICHO. ESTILO COM PERSONALIDADE.",
    subtitle: "Degradê disfarçado, acabamento limpo na navalha e atendimento individualizado com hora marcada.",
    videoUrl: "./assets/video/barber-hero.mp4",
    videoAltUrl: "https://assets.mixkit.co/videos/43242/43242-720.mp4",
    ctaPrimary: "Agendar pelo WhatsApp",
    ctaSecondary: "Ver Meus Serviços",
  },

  // Sobre o Barbeiro
  about: {
    badge: "Atendimento Individual",
    title: "TRABALHO HONESTO. ATENÇÃO A CADA CLIENTE.",
    paragraphs: [
      "Sou o Leonardo, atendo de forma individualizada na Leo's Barbearia. Meu objetivo é entregar um corte alinhado, bem trabalhado e sem correria.",
      "Cada cliente tem seu horário reservado e minha total dedicação na cadeira. Aqui você explica exatamente como quer e sai com o visual no capricho.",
    ],
    highlights: [
      {
        title: "Corte no Capricho",
        desc: "Degradê bem disfarçado, trabalho preciso na tesoura e pezinho reto na navalha."
      },
      {
        title: "Sempre o Mesmo Barbeiro",
        desc: "Você senta sempre com quem já conhece seu corte, sua cabeça e seu gosto."
      },
      {
        title: "Atendimento Pontual",
        desc: "Horário marcado com rigor para você não perder tempo esperando."
      },
      {
        title: "Atenção ao Detalhe",
        desc: "Tempo suficiente reservado para finalizar cada acabamento com calma."
      }
    ],
    // Foto real oficial do barbeiro Leonardo
    photo: "/assets/images/barber/leonardo.jpg",
  },

  // Especialidades e Serviços
  services: [
    {
      id: "corte-cabelo",
      name: "Corte de Cabelo",
      category: "Cabelo",
      duration: "~45 min",
      description: "Corte completo na tesoura ou máquina, acabamento fino do pezinho e finalização com pomada.",
      featured: false,
    },
    {
      id: "degrade-fade",
      name: "Degradê (Fade)",
      category: "Cabelo",
      duration: "~50 min",
      description: "Disfarçado limpo na navalha ou shaver (Skin Fade, Mid Fade ou Low Fade). Linhas retas e nítidas.",
      featured: true,
      badge: "Mais Pedido",
    },
    {
      id: "barba",
      name: "Barba",
      category: "Barba",
      duration: "~40 min",
      description: "Alinhamento com toalha morna, contorno na navalha, hidratação e pós-barba refrescante.",
      featured: false,
    },
    {
      id: "acabamento-pezinho",
      name: "Acabamento & Pezinho",
      category: "Cabelo",
      duration: "~20 min",
      description: "Acerto do contorno, costeletas e nuca na navalha para manter o corte em dia entre visitas.",
      featured: false,
    },
    {
      id: "sobrancelha",
      name: "Sobrancelha",
      category: "Estética",
      duration: "~15 min",
      description: "Limpeza de excessos e alinhamento natural na navalha ou pinça.",
      featured: false,
    }
  ],

  // Fotografias Reais de Cortes e Trabalhos (Google Maps & Instagram)
  galleryItems: [
    {
      id: 1,
      category: "platinado",
      categoryName: "Química & Fade",
      title: "Platinado / Nevou com Fade",
      description: "Descoloração global no tom branco platinado com degradê disfarçado nas laterais.",
      image: "/assets/images/cuts/platinado-fade.jpg"
    },
    {
      id: 2,
      category: "freestyle",
      categoryName: "Freestyle",
      title: "Freestyle & Desenho na Navalha",
      description: "Linhas curvas e pontiagudas personalizadas com navalha e transição limpa na pele.",
      image: "/assets/images/cuts/freestyle-navalhado.jpg"
    },
    {
      id: 3,
      category: "trancas",
      categoryName: "Tranças & Estilo",
      title: "Tranças Nagô com Fade Lateral",
      description: "Tranças de raiz alinhadas e simétricas com fade sutil na têmpora e pezinho limpo.",
      image: "/assets/images/cuts/trancas-nago-fade.jpg"
    },
    {
      id: 4,
      category: "degrade",
      categoryName: "Degradê",
      title: "Moicano Disfarçado com Risco",
      description: "Fade na altura da orelha preservando volume traseiro com risco trabalhado na lateral.",
      image: "/assets/images/cuts/moicano-risco.jpg"
    },
    {
      id: 5,
      category: "classico",
      categoryName: "Clássico & Social",
      title: "Corte Social com Taper Fade",
      description: "Visual executivo limpo, disfarçado suave na nuca e costeletas, topo no caimento natural.",
      image: "/assets/images/cuts/social-taper-fade.jpg"
    },
    {
      id: 6,
      category: "degrade",
      categoryName: "Degradê",
      title: "Mid Fade com Pezinho Reto",
      description: "Degradê na altura média bem disfarçado com alinhamento frontal milimétrico na navalha.",
      image: "/assets/images/cuts/mid-fade-navalha.jpg"
    },
    {
      id: 7,
      category: "cabelo",
      categoryName: "Corte & Tesoura",
      title: "Corte Moderno com Tesoura e Taper",
      description: "Laterais suaves com acabamento impecável do contorno e trabalho artesanal na tesoura.",
      image: "/assets/images/cuts/corte-jovem-tesoura.jpg"
    },
    {
      id: 8,
      category: "degrade",
      categoryName: "Degradê",
      title: "Taper Fade Disfarçado",
      description: "Transição suave e sem marcas na nuca e costeletas mantendo a densidade superior.",
      image: "/assets/images/cuts/taper-fade-acabamento.jpg"
    },
    {
      id: 9,
      category: "marca",
      categoryName: "Oficial",
      title: "Identidade Oficial LÉO BARBER",
      description: "Emblema 3D e marca oficial da barbearia registrada no Google Maps e Instagram.",
      image: "/assets/images/cuts/identidade-leo-barber.jpg"
    }
  ],

  // Diferenciais
  differentials: [
    {
      number: "01",
      title: "Corte no Capricho",
      description: "Degradê limpo sem marcas, corte na tesoura com caimento certo e pezinho perfeitamente alinhado na navalha."
    },
    {
      number: "02",
      title: "Sempre o Mesmo Barbeiro",
      description: "Sem rotatividade de profissionais. Você senta sempre com quem já conhece seu estilo, formato de cabeça e preferência."
    },
    {
      number: "03",
      title: "Atendimento no seu Tempo",
      description: "Sem pressa e sem fila. Cada horário é reservado com folga para fazer seu corte com foco, calma e precisão."
    }
  ],

  // Avaliações Reais do Google Maps (LÉO BARBER)
  reviews: [
    {
      id: "rev-nickolas",
      name: "Nickolas Antunes Santos",
      service: "Corte de Cabelo",
      rating: 5.0,
      date: "Há 2 semanas",
      comment: "Excelente corte de cabelo e atendimento",
      verified: true,
      source: "Google Maps",
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocKpy_2ZdUwW4gPU_LsNnkmA5GWL6p3JuybwX1RhEpUicQdhvg=w80-h80-p-rp-mo-br100",
    },
    {
      id: "rev-marcus",
      name: "Marcus Guimarães",
      service: "Corte, Barba e Sobrancelha",
      rating: 5.0,
      date: "Avaliação no Google Maps",
      comment: "Avaliação 5 estrelas recomendando os serviços de corte de cabelo, aparar a barba e sobrancelha com o Leonardo.",
      verified: true,
      source: "Google Maps",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXcPP85quG4IQjFBkvl7rFBesLjiXniBGQCG1XEDkHkwqLIoXdg4g=w80-h80-p-rp-mo-br100",
    }
  ],

  // Rodapé
  footer: {
    description: "Cortes masculinos bem feitos, degradê no capricho e barba alinhada na navalha com o Leonardo. Atendimento pontual em Montes Claros.",
    links: [
      { label: "Início", href: "#inicio" },
      { label: "Sobre", href: "#sobre" },
      { label: "Estilos", href: "#galeria" },
      { label: "Meus Serviços", href: "#servicos" },
      { label: "Diferencial", href: "#diferenciais" },
      { label: "Avaliações", href: "#avaliacoes" },
      { label: "Localização", href: "#contato" },
    ],
    copyright: "© {year} Leo's Barbearia. Todos os direitos reservados.",
    tagline: "Montes Claros - MG • Atendimento com hora marcada."
  }
};

/**
 * Função utilitária para gerar links do WhatsApp com mensagens pré-formatadas
 */
export function getWhatsAppBookingUrl(serviceName = null) {
  const number = barbershopConfig.whatsappNumber;
  let text = barbershopConfig.whatsappDefaultMessage;
  
  if (serviceName) {
    text = `Olá, Leonardo! Gostaria de saber o valor e os horários disponíveis para: ${serviceName}.`;
  }
  
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
