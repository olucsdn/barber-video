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
    // Espaço reservado para foto real do barbeiro
    photoPlaceholder: {
      label: "Fotografia do Barbeiro",
      aspect: "aspect-[4/5]",
    }
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

  // Espaços Reservados para Fotografias Reais de Cortes
  galleryItems: [
    {
      id: 1,
      category: "degrade",
      categoryName: "Degradê",
      title: "Skin Fade com Topo Texturizado",
      description: "Disfarçado navalhado na pele com linhas nítidas e topo texturizado.",
    },
    {
      id: 2,
      category: "barba",
      categoryName: "Barba",
      title: "Barba Alinhada na Navalha",
      description: "Contorno limpo nas bochechas e no pescoço com acabamento toalha morna.",
    },
    {
      id: 3,
      category: "classico",
      categoryName: "Clássicos & Social",
      title: "Corte Clássico Penteado",
      description: "Caimento tradicional trabalhado na tesoura com finalização em pomada fosca.",
    },
    {
      id: 4,
      category: "degrade",
      categoryName: "Degradê",
      title: "Mid Fade com Pezinho Reto",
      description: "Degradê na altura média com acabamento frontal e costeletas milimétricas.",
    },
    {
      id: 5,
      category: "barba",
      categoryName: "Barba",
      title: "Aparação e Desenho de Barba",
      description: "Volume reduzido no ponto certo mantendo linhas retas e marcadas.",
    },
    {
      id: 6,
      category: "classico",
      categoryName: "Clássicos & Social",
      title: "Corte Social Alinhado",
      description: "Laterais baixas sem raspar e topo alinhado para o dia a dia profissional.",
    },
    {
      id: 7,
      category: "degrade",
      categoryName: "Degradê",
      title: "Low Fade Disfarçado",
      description: "Degradê sutil e baixo rente à orelha preservando densidade lateral.",
    },
    {
      id: 8,
      category: "barba",
      categoryName: "Barba",
      title: "Barba Desenhada e Queixo Definido",
      description: "Linha do maxilar limpa e simétrica na navalha com toalha aquecida.",
    },
    {
      id: 9,
      category: "classico",
      categoryName: "Clássicos & Social",
      title: "Corte 100% na Tesoura",
      description: "Sem máquina: trabalho artesanal na tesoura respeitando o caimento natural.",
    },
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

  // Avaliações de Clientes (Depoimentos)
  reviews: [
    {
      id: "rev-1",
      name: "Matheus Silveira",
      service: "Degradê (Fade)",
      rating: 5.0,
      date: "Há 2 semanas",
      comment: "Melhor degradê de Montes Claros sem dúvida. O atendimento pontual com hora marcada faz toda a diferença, sem aquela espera chata de barbearia cheia. O disfarçado fica impecável.",
    },
    {
      id: "rev-2",
      name: "Rafael Mendes",
      service: "Corte de Cabelo + Barba",
      rating: 5.0,
      date: "Há 3 semanas",
      comment: "Faço barba e cabelo com o Leonardo há meses. Toalha morna, acabamento alinhado e muita atenção aos detalhes. Profissional pontual e de extrema confiança!",
    },
    {
      id: "rev-3",
      name: "Lucas Henrique",
      service: "Degradê (Fade)",
      rating: 4.8,
      date: "Há 1 mês",
      comment: "Ambiente muito tranquilo, atendimento individual e corte no capricho. É difícil achar um barbeiro que acerta o corte de primeira igual ele.",
    },
    {
      id: "rev-4",
      name: "Felipe Duarte",
      service: "Barba",
      rating: 5.0,
      date: "Há 1 mês",
      comment: "Pontualidade britânica e serviço nota dez. Você explica como quer e ele executa com calma e precisão na navalha. Recomendo de olhos fechados!",
    },
    {
      id: "rev-5",
      name: "Gustavo Borges",
      service: "Corte de Cabelo",
      rating: 4.9,
      date: "Há 2 meses",
      comment: "Pezinho reto e degradê perfeito. O Leonardo é gente boa demais e tem muita paciência com cada detalhe do acabamento.",
    },
    {
      id: "rev-6",
      name: "Bruno Almeida",
      service: "Acabamento & Pezinho",
      rating: 5.0,
      date: "Há 2 meses",
      comment: "Sempre saio satisfeito. Além de mandar muito bem na tesoura e na máquina, o atendimento um a um é essencial para quem tem rotina corrida.",
    },
    {
      id: "rev-filtered",
      name: "Cliente Teste",
      service: "Corte Simples",
      rating: 3.8,
      date: "Há 3 meses",
      comment: "Comentário abaixo de 4 estrelas para demonstrar o filtro de qualidade.",
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
