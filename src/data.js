/**
 * ===================================================================
 * BARBEARIA ASSINATURA — CONFIGURAÇÃO CENTRAL & DADOS DO SITE
 * ===================================================================
 * Configuração autêntica e direta para Barbeiro Solo.
 * Sem jargões exagerados, focado em trabalho bem feito e bom atendimento.
 */

export const barbershopConfig = {
  // Dados Pessoais & Contato
  name: "ASSINATURA",
  subtitle: "BARBEIRO",
  barberName: "Lucas Silva",
  tagline: "Corte no capricho. Estilo garantido.",
  phone: "(38) 98839-9608",
  phoneFormatted: "+5538988399608",
  whatsappNumber: "5538988399608", // Apenas números com DDI + DDD
  whatsappDefaultMessage: "Olá! Gostaria de agendar um horário para cortar o cabelo.",
  instagramUrl: "https://instagram.com/barbearia.assinatura",
  instagramHandle: "@barbearia.assinatura",
  
  // Endereço e Geolocalização
  address: {
    street: "Rua Oscar Freire",
    number: "1280",
    complement: "Sala 42",
    neighborhood: "Jardins",
    city: "São Paulo",
    state: "SP",
    cep: "01426-000",
    full: "Rua Oscar Freire, 1280, Sala 42 - Jardins, São Paulo - SP, 01426-000",
    googleMapsLink: "https://maps.google.com/?q=Rua+Oscar+Freire+1280+Jardins+Sao+Paulo",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.146958897597!2d-46.66986402377317!3d-23.56316277879783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d0426b647b%3A0x6b2b7ff9c2ff1b06!2sR.%20Oscar%20Freire%2C%201280%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001426-000!5e0!3m2!1spt-BR!2sbr!4v1714500000000!5m2!1spt-BR!2sbr",
  },

  // Mídias do Banner Principal (Hero)
  hero: {
    title: "SEU ESTILO. MINHA ASSINATURA.",
    subtitle: "Corte masculino bem feito, degradê disfarçado no capricho e barba alinhada na navalha. Atendimento pontual e de confiança.",
    videoUrl: "./assets/video/barber-hero.mp4",
    videoAltUrl: "https://assets.mixkit.co/videos/43242/43242-720.mp4",
    posterUrl: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1920&q=80",
    ctaPrimary: "AGENDAR MEU HORÁRIO",
    ctaSecondary: "CONHEÇA MEU TRABALHO",
  },

  // Sobre o Barbeiro & O Trabalho do Dia a Dia
  about: {
    badge: "CORTE NO CAPRICHO",
    title: "TRADIÇÃO NO CORTE. PERSONALIDADE NO ESTILO.",
    paragraphs: [
      "Trabalho sozinho e levo a sério cada cliente que senta na minha cadeira. O meu foco é simples e direto: fazer um trabalho bem feito, com calma, atenção e exatamente do jeito que você gosta.",
      "Seja um degradê disfarçado, um corte social clássico na tesoura ou aquele acerto caprichado na barba e no pezinho, você senta, explica como quer e sai com o visual alinhado.",
      "Aqui você não tem surpresas: sempre usa lâmina descartável nova, navalha bem passada e materiais limpos para cada atendimento. Atendimento direto comigo, sem enrolação e sem pressa."
    ],
    highlights: [
      {
        title: "Corte no Capricho",
        desc: "Degradê bem disfarçado, tesoura trabalhada com cuidado e pezinho reto na navalha."
      },
      {
        title: "Sempre o Mesmo Barbeiro",
        desc: "Você corta sempre com a mesma pessoa, que já conhece seu cabelo e seu gosto."
      },
      {
        title: "Atenção a Cada Detalhe",
        desc: "Tempo dedicado a cada cliente para deixar o corte alinhado e bem finalizado."
      },
      {
        title: "Higiene & Lâmina Nova",
        desc: "Lâmina descartável nova aberta na sua frente e materiais sempre limpos."
      }
    ],
    imagePrimary: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85",
    imageSecondary: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&w=800&q=85",
  },

  // Serviços e Preços (Reais, Claros e Editáveis)
  services: [
    {
      id: "corte-masculino",
      name: "Corte Masculino",
      category: "Cabelo",
      price: "R$ 65",
      priceRaw: 65,
      duration: "45 min",
      description: "Corte completo na tesoura ou máquina, com acabamento no capricho e finalização com pomada.",
      featured: false,
      badge: null,
      icon: "scissors",
    },
    {
      id: "degra-fade",
      name: "Degradê (Fade)",
      category: "Cabelo",
      price: "R$ 75",
      priceRaw: 75,
      duration: "50 min",
      description: "Degradê disfarçado e bem trabalhado (Skin Fade, Mid Fade ou Low Fade). Linhas retas e pezinho feito na navalha.",
      featured: true,
      badge: "Mais Pedido",
      icon: "zap",
    },
    {
      id: "barba-terapia",
      name: "Barba Completa",
      category: "Barba",
      price: "R$ 55",
      priceRaw: 55,
      duration: "40 min",
      description: "Barba alinhada, desenhada e aparada na navalha com toalha morna e loção pós-barba refrescante.",
      featured: false,
      badge: null,
      icon: "sparkles",
    },
    {
      id: "combo-corte-barba",
      name: "Corte + Barba",
      category: "Combos",
      price: "R$ 110",
      priceRaw: 110,
      duration: "1h 20min",
      description: "O pacote completo: cabelo cortado e barba alinhada no capricho para sair com o visual em dia.",
      featured: true,
      badge: "Mais Escolhido",
      icon: "crown",
    },
    {
      id: "acabamento-pezinho",
      name: "Acabamento & Pezinho",
      category: "Cabelo",
      price: "R$ 30",
      priceRaw: 30,
      duration: "20 min",
      description: "Acerto do pezinho, costeletas e contorno do pescoço na navalha para manter o corte em dia.",
      featured: false,
      badge: null,
      icon: "check-circle",
    },
    {
      id: "sobrancelha",
      name: "Sobrancelha",
      category: "Estética",
      price: "R$ 25",
      priceRaw: 25,
      duration: "15 min",
      description: "Limpeza dos excessos e alinhamento simples na navalha ou pinça, bem natural.",
      featured: false,
      badge: null,
      icon: "eye",
    },
    {
      id: "camuflagem-grisalhos",
      name: "Camuflagem de Grisalhos",
      category: "Estética",
      price: "R$ 70",
      priceRaw: 70,
      duration: "30 min",
      description: "Tonalização simples e discreta para disfarçar fios brancos de forma bem natural.",
      featured: false,
      badge: null,
      icon: "feather",
    },
    {
      id: "lavagem-hidratacao",
      name: "Lavagem & Hidratação",
      category: "Tratamentos",
      price: "R$ 60",
      priceRaw: 60,
      duration: "35 min",
      description: "Lavagem caprichada e hidratação para limpar bem o couro cabeludo e alinhar os fios.",
      featured: false,
      badge: null,
      icon: "shield",
    }
  ],

  // Galeria de Trabalhos Reais
  galleryItems: [
    {
      id: 1,
      category: "degrade",
      categoryName: "Degradê",
      title: "Skin Fade com Texturizado",
      description: "Degradê raspado na pele com topo texturizado e acabamento natural.",
      imageUrl: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      category: "barba",
      categoryName: "Barba",
      title: "Barba Alinhada na Navalha",
      description: "Barba cheia com contorno bem desenhado nas bochechas e no pescoço.",
      imageUrl: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      category: "classico",
      categoryName: "Corte Clássico",
      title: "Corte Clássico com Pomada",
      description: "Corte tradicional penteado para trás com bom caimento e fixação média.",
      imageUrl: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      category: "social",
      categoryName: "Corte Social",
      title: "Corte Social Tradicional",
      description: "Corte social limpo com laterais baixas e topo alinhado.",
      imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      category: "degrade",
      categoryName: "Degradê",
      title: "Degradê Médio com Pezinho Feito",
      description: "Disfarçado na altura média com contorno frontal bem definido.",
      imageUrl: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      category: "transformacoes",
      categoryName: "Transformações",
      title: "Acerto Completo de Cabelo e Barba",
      description: "Visual renovado com laterais curtas e barba desenhada no capricho.",
      imageUrl: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 7,
      category: "classico",
      categoryName: "Corte Clássico",
      title: "Corte Repartido de Lado",
      description: "Divisão lateral bem marcada e acabamento caprichado na navalha.",
      imageUrl: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 8,
      category: "barba",
      categoryName: "Barba",
      title: "Barba Feita na Toalha Quente",
      description: "Barbear clássico com toalha morna e navalha descartável afiada.",
      imageUrl: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 9,
      category: "social",
      categoryName: "Corte Social",
      title: "Corte Inteiro na Tesoura",
      description: "Corte trabalhado na tesoura respeitando o caimento natural do cabelo.",
      imageUrl: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 10,
      category: "transformacoes",
      categoryName: "Transformações",
      title: "Topete Moderno com Fade",
      description: "Corte com volume no topo e laterais bem curtas e disfarçadas.",
      imageUrl: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 11,
      category: "degrade",
      categoryName: "Degradê",
      title: "Degradê Baixo (Low Fade)",
      description: "Disfarçado sutil rente à orelha mantendo volume nas laterais.",
      imageUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 12,
      category: "barba",
      categoryName: "Barba",
      title: "Aparação e Contorno de Barba",
      description: "Barba aparada no tamanho certo com linhas retas na bochecha e maxilar.",
      imageUrl: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=600&q=80",
    }
  ],

  // Diferenciais Diretos e Reais
  differentials: [
    {
      icon: "scissors",
      title: "Corte no Capricho",
      description: "Degradê bem disfarçado sem marcas, corte na tesoura com caimento certo e pezinho reto."
    },
    {
      icon: "award",
      title: "Sempre o Mesmo Barbeiro",
      description: "Sem rotatividade. Você senta sempre com quem já sabe exatamente como você gosta do seu corte."
    },
    {
      icon: "user-check",
      title: "Atendimento no seu Tempo",
      description: "Sem pressa e sem correria. Cada horário é reservado para fazer o seu corte com calma e atenção."
    },
    {
      icon: "shield-check",
      title: "Higiene em Primeiro Lugar",
      description: "Lâmina descartável nova aberta na sua frente e bancada com materiais sempre limpos."
    }
  ],

  // Chamada Final (CTA)
  finalCta: {
    title: "SEU PRÓXIMO CORTE COMEÇA AQUI.",
    text: "Garanta seu horário e venha dar um trato no visual com tranquilidade.",
    buttonText: "AGENDAR PELO WHATSAPP",
    subtext: "Agendamento rápido e direto pelo WhatsApp",
  },

  // Rodapé e Links
  footer: {
    description: "Cortes masculinos bem feitos, degradê no capricho e barba alinhada na navalha. Atendimento direto e de confiança.",
    links: [
      { label: "Início", href: "#inicio" },
      { label: "Sobre mim", href: "#sobre" },
      { label: "Serviços", href: "#servicos" },
      { label: "Galeria", href: "#galeria" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Contato & Localização", href: "#contato" },
    ],
    copyright: "© {year} Barbearia Assinatura. Todos os direitos reservados.",
    tagline: "Corte no capricho para quem gosta de andar alinhado."
  }
};

/**
 * Função utilitária para gerar links do WhatsApp com mensagens pré-formatadas
 */
export function getWhatsAppBookingUrl(serviceName = null) {
  const number = barbershopConfig.whatsappNumber;
  let text = barbershopConfig.whatsappDefaultMessage;
  
  if (serviceName) {
    text = `Olá! Gostaria de agendar um horário para fazer o serviço de *${serviceName}*. Poderia me informar os horários disponíveis?`;
  }
  
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
