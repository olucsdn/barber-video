/**
 * ===================================================================
 * BARBEARIA ASSINATURA — CONFIGURAÇÃO CENTRAL & DADOS DO SITE
 * ===================================================================
 * Edite facilmente as informações da barbearia, serviços, preços,
 * contatos e galeria neste único arquivo.
 */

export const barbershopConfig = {
  // Dados Comerciais & Contato
  name: "ASSINATURA",
  subtitle: "BARBEARIA & CLUB",
  tagline: "Tradição no corte. Personalidade no estilo.",
  phone: "(11) 98765-4321",
  phoneFormatted: "+5511987654321",
  whatsappNumber: "5511987654321", // Apenas números com DDI + DDD
  whatsappDefaultMessage: "Olá! Gostaria de agendar um horário na Barbearia Assinatura.",
  instagramUrl: "https://instagram.com/barbearia.assinatura",
  instagramHandle: "@barbearia.assinatura",
  
  // Endereço e Geolocalização
  address: {
    street: "Rua Oscar Freire",
    number: "1280",
    neighborhood: "Jardins",
    city: "São Paulo",
    state: "SP",
    cep: "01426-000",
    full: "Rua Oscar Freire, 1280 - Jardins, São Paulo - SP, 01426-000",
    googleMapsLink: "https://maps.google.com/?q=Rua+Oscar+Freire+1280+Jardins+Sao+Paulo",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.146958897597!2d-46.66986402377317!3d-23.56316277879783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d0426b647b%3A0x6b2b7ff9c2ff1b06!2sR.%20Oscar%20Freire%2C%201280%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001426-000!5e0!3m2!1spt-BR!2sbr!4v1714500000000!5m2!1spt-BR!2sbr",
  },

  // Mídias do Banner Principal (Hero)
  hero: {
    title: "SEU ESTILO. NOSSA ASSINATURA.",
    subtitle: "Mais do que um corte, uma experiência feita para valorizar seu estilo e sua personalidade.",
    videoUrl: "./assets/video/barber-hero.mp4",
    videoAltUrl: "https://assets.mixkit.co/videos/43242/43242-720.mp4",
    posterUrl: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1920&q=80",
    ctaPrimary: "AGENDAR MEU HORÁRIO",
    ctaSecondary: "CONHEÇA NOSSO TRABALHO",
  },

  // Sobre a Barbearia
  about: {
    badge: "DESDE 2018",
    title: "TRADIÇÃO NO CORTE. PERSONALIDADE NO ESTILO.",
    paragraphs: [
      "Nascemos com a missão de resgatar a nobre arte da barbearia clássica, unindo-a ao visagismo contemporâneo e às técnicas mais refinadas do mercado internacional.",
      "Aqui, cada cliente recebe um atendimento individualizado e detalhista. Do corte com tesoura milimetricamente alinhado à barba com toalha quente e navalha afiada, tudo é pensado para que você relaxe, renove sua imagem e saia com a confiança em seu ápice.",
      "Nosso espaço foi cuidadosamente projetado para proporcionar conforto absoluto: poltronas vintage em couro legítimo, carta de cervejas artesanais selecionadas, cafés especiais e um ambiente acolhedor onde o tempo desacelera."
    ],
    stats: [
      { value: "8+", label: "Anos de Tradição" },
      { value: "15k+", label: "Clientes Atendidos" },
      { value: "100%", label: "Produtos Importados" },
      { value: "5.0 ★", label: "Avaliação Média" },
    ],
    highlights: [
      {
        title: "Qualidade no Atendimento",
        desc: "Pontualidade britânica, recepção com café especial ou drink artesanal e atenção exclusiva a cada detalhe."
      },
      {
        title: "Profissionalismo de Elite",
        desc: "Barbeiros premiados com certificações internacionais e atualização constante em tendências mundiais."
      },
      {
        title: "Atenção Minuciosa aos Detalhes",
        desc: "Estudo visagista das proporções do seu rosto para encontrar o corte e o contorno de barba perfeitos."
      },
      {
        title: "Experiência e Cuidado Personalizado",
        desc: "Toalhas aquecidas com óleos essenciais, massagem facial relaxante e produtos dermatologicamente testados."
      }
    ],
    imagePrimary: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85",
    imageSecondary: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=85",
  },

  // Serviços e Preços (Facilmente Editáveis)
  services: [
    {
      id: "corte-masculino",
      name: "Corte Masculino",
      category: "Cabelo",
      price: "R$ 65",
      priceRaw: 65,
      duration: "45 min",
      description: "Corte completo na tesoura ou máquina com análise de visagismo facial, lavagem especial refrescante e finalização com pomada premium.",
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
      description: "Transição milimétrica impecável (Skin Fade, Mid Fade, Taper ou Low Fade). Linhas nítidas, acabamento na shaver e navalhete com precisão cirúrgica.",
      featured: true,
      badge: "Mais Pedido",
      icon: "zap",
    },
    {
      id: "barba-terapia",
      name: "Barba & Barboterapia",
      category: "Barba",
      price: "R$ 55",
      priceRaw: 55,
      duration: "40 min",
      description: "Modelagem completa da barba com aplicação de óleos aromáticos, protocolo de toalha quente, navalha descartável e pós-barba refrescante com massagem.",
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
      description: "A experiência completa de transformação e alinhamento do seu visual. Inclui corte personalizado, barboterapia tradicional, higienização e styling com economia.",
      featured: true,
      badge: "Melhor Custo-Benefício",
      icon: "crown",
    },
    {
      id: "acabamento-pezinho",
      name: "Acabamento & Pezinho",
      category: "Cabelo",
      price: "R$ 30",
      priceRaw: 30,
      duration: "20 min",
      description: "Manutenção e alinhamento do contorno do pescoço, costeletas e linha frontal. Ideal para manter o corte impecável entre as sessões completas.",
      featured: false,
      badge: null,
      icon: "check-circle",
    },
    {
      id: "sobrancelha",
      name: "Sobrancelha Masculina",
      category: "Estética",
      price: "R$ 25",
      priceRaw: 25,
      duration: "15 min",
      description: "Limpeza e alinhamento natural na navalha ou pinça, preservando a harmonia e a expressão masculina sem aspecto artificial.",
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
      description: "Tonalização suave e discreta dos fios brancos (cabelo ou barba). Resultado 100% natural que rejuvenesce sem parecer tintura.",
      featured: false,
      badge: null,
      icon: "feather",
    },
    {
      id: "tratamento-capilar",
      name: "Tratamento Capilar & Escova",
      category: "Tratamentos",
      price: "R$ 60",
      priceRaw: 60,
      duration: "35 min",
      description: "Detox do couro cabeludo, hidratação profunda antifrizz e fortalecimento dos fios com produtos específicos masculinos de alta performance.",
      featured: false,
      badge: null,
      icon: "shield",
    }
  ],

  // Galeria de Trabalhos Reais com Categorias
  galleryCategories: [
    { id: "todos", name: "Todos" },
    { id: "degrade", name: "Degradê" },
    { id: "social", name: "Corte Social" },
    { id: "classico", name: "Corte Clássico" },
    { id: "barba", name: "Barba" },
    { id: "transformacoes", name: "Transformações" },
  ],

  galleryItems: [
    {
      id: 1,
      category: "degrade",
      categoryName: "Degradê",
      title: "Skin Fade com Texturizado Francês",
      description: "Degradê navalhado na pele com topo texturizado e acabamento matte.",
      imageUrl: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      category: "barba",
      categoryName: "Barba",
      title: "Barba Lenhador & Alinhamento Navalhado",
      description: "Escultura de barba encorpada com contorno preciso nas bochechas e hidratação com óleo nobre.",
      imageUrl: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      category: "classico",
      categoryName: "Corte Clássico",
      title: "Pompadour Tradicional com Brilho Médio",
      description: "Estrutura clássica dos anos 50 com tesoura, volume no topete e pomada hidrossolúvel de brilho elegante.",
      imageUrl: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      category: "social",
      categoryName: "Corte Social",
      title: "Executive Taper Cut",
      description: "Corte executivo clássico com graduação suave nas laterais e caimento natural do topo.",
      imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      category: "degrade",
      categoryName: "Degradê",
      title: "Mid Fade com Linhas Marcadas",
      description: "Graduação na altura média da têmpora com transição suave e pezinho esculpido a navalha.",
      imageUrl: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      category: "transformacoes",
      categoryName: "Transformações",
      title: "Harmonização de Barba & Corte Completo",
      description: "Transformação completa de imagem: redução de volume lateral e realce da mandíbula.",
      imageUrl: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 7,
      category: "classico",
      categoryName: "Corte Clássico",
      title: "Side Part Vintage & Navalhete",
      description: "Divisão lateral bem marcada com tesoura e costeletas finamente lapidadas.",
      imageUrl: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 8,
      category: "barba",
      categoryName: "Barba",
      title: "Barboterapia Tradicional com Navalha",
      description: "Ritual relaxante com toalha aquecida, navalha japonesa e hidratação profunda dos folículos.",
      imageUrl: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 9,
      category: "social",
      categoryName: "Corte Social",
      title: "Scissor Work & Texturização Pura",
      description: "Corte trabalhado 100% na tesoura, respeitando os redemoinhos naturais e a densidade capilar.",
      imageUrl: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 10,
      category: "transformacoes",
      categoryName: "Transformações",
      title: "Modern Quiff & Fade Transformação",
      description: "Visual moderno rejuvenescido com contraste marcante e finalização impecável.",
      imageUrl: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 11,
      category: "degrade",
      categoryName: "Degradê",
      title: "Low Fade com Cachos Definidos",
      description: "Degradê baixo que valoriza a curvatura dos cachos com hidratação e brilho acetinado.",
      imageUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 12,
      category: "barba",
      categoryName: "Barba",
      title: "Design de Barba Curta & Linha do Maxilar",
      description: "Contorno milimétrico para valorizar a linha da mandíbula em barbas curtas e alinhadas.",
      imageUrl: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=1000&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=600&q=80",
    }
  ],

  // Diferenciais Exclusivos da Barbearia
  differentials: [
    {
      icon: "user-check",
      title: "Atendimento Personalizado",
      description: "Consultoria individual de visagismo para identificar o corte e desenho de barba que mais harmonizam com o formato do seu rosto e seu estilo de vida."
    },
    {
      icon: "award",
      title: "Profissionais Qualificados",
      description: "Mestres barbeiros em constante aperfeiçoamento nas melhores academias do país e do exterior, dominando tanto o clássico quanto as técnicas de vanguarda."
    },
    {
      icon: "coffee",
      title: "Ambiente Confortável & Exclusivo",
      description: "Espaço intimista com lounge climatizado, poltronas de alta ergonomia, café espresso de grãos nobres e cervejas artesanais selecionadas como cortesia."
    },
    {
      icon: "shield-check",
      title: "Produtos de Alta Performance",
      description: "Utilizamos exclusivamente linhas profissionais consagradas mundialmente: pomadas com base em argila natural, óleos essenciais puros e tônicos dermatológicos."
    },
    {
      icon: "heart-handshake",
      title: "Compromisso com Cada Cliente",
      description: "Horários agendados rigorosamente respeitados, higiene esterilizada em autoclave de grau hospitalar e garantia total de satisfação com o resultado."
    }
  ],

  // Chamada Final (CTA)
  finalCta: {
    title: "SEU PRÓXIMO CORTE COMEÇA AQUI.",
    text: "Reserve seu horário e venha viver uma experiência diferente.",
    buttonText: "AGENDAR PELO WHATSAPP",
    subtext: "Atendimento rápido e confirmação imediata pelo WhatsApp",
  },

  // Rodapé e Links
  footer: {
    description: "Uma barbearia pensada para homens que valorizam precisão, sofisticação e uma experiência que vai muito além de um simples corte.",
    links: [
      { label: "Início", href: "#inicio" },
      { label: "Sobre nós", href: "#sobre" },
      { label: "Serviços", href: "#servicos" },
      { label: "Galeria", href: "#galeria" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Contato & Localização", href: "#contato" },
    ],
    copyright: "© {year} Barbearia Assinatura. Todos os direitos reservados.",
    tagline: "Feito com excelência para quem exige o melhor."
  }
};

/**
 * Função utilitária para gerar links do WhatsApp com mensagens pré-formatadas
 */
export function getWhatsAppBookingUrl(serviceName = null) {
  const number = barbershopConfig.whatsappNumber;
  let text = barbershopConfig.whatsappDefaultMessage;
  
  if (serviceName) {
    text = `Olá! Gostaria de agendar o serviço de *${serviceName}* na Barbearia Assinatura. Poderia me informar os horários disponíveis?`;
  }
  
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
