/**
 * ===================================================================
 * BARBEARIA ASSINATURA — CONFIGURAÇÃO CENTRAL & DADOS DO SITE
 * ===================================================================
 * Configuração personalizada para BARBEIRO ÚNICO (Estúdio Privativo).
 * Edite facilmente suas informações, serviços, preços, fotos e contatos.
 */

export const barbershopConfig = {
  // Dados Pessoais & Contato
  name: "ASSINATURA",
  subtitle: "STUDIO PRIVADO • MASTER BARBER",
  barberName: "Lucas Silva",
  tagline: "Tradição no corte. Personalidade no estilo.",
  phone: "(38) 98839-9608",
  phoneFormatted: "+5538988399608",
  whatsappNumber: "5538988399608", // Apenas números com DDI + DDD
  whatsappDefaultMessage: "Olá! Gostaria de agendar um horário exclusivo no estúdio privativo.",
  instagramUrl: "https://instagram.com/barbearia.assinatura",
  instagramHandle: "@barbearia.assinatura",
  
  // Endereço e Geolocalização do Estúdio
  address: {
    street: "Rua Oscar Freire",
    number: "1280",
    complement: "Sala 42 - Estúdio Privativo",
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
    subtitle: "Cortes cirúrgicos, fade com transição limpa e barba esculpida na navalha. Técnica, precisão milimétrica e visagismo sob medida.",
    videoUrl: "./assets/video/barber-hero.mp4",
    videoAltUrl: "https://assets.mixkit.co/videos/43242/43242-720.mp4",
    posterUrl: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1920&q=80",
    ctaPrimary: "AGENDAR MEU HORÁRIO",
    ctaSecondary: "CONHEÇA MEU TRABALHO",
  },

  // Sobre o Barbeiro & Foco no Trabalho
  about: {
    badge: "MESTRE BARBEIRO",
    title: "TRADIÇÃO NO CORTE. PERSONALIDADE NO ESTILO.",
    paragraphs: [
      "O corte de cabelo e o alinhamento da barba definem sua presença e autoridade. Meu trabalho é guiado pela precisão técnica em cada passada de máquina, tesoura e navalha.",
      "Cada atendimento é dedicado a entregar o corte ideal para a sua anatomia capilar. Analiso o sentido de crescimento dos fios, densidade, redemoinhos e o formato do seu rosto através do visagismo técnico.",
      "Utilizo navalhas com lâminas japonesas descartáveis, tesouras forjadas de alta precisão e técnicas avançadas de degradê (fade) limpo e sem marcas. Foco total no acabamento impecável e na durabilidade do seu corte."
    ],
    highlights: [
      {
        title: "Precisão Cirúrgica",
        desc: "Linhas nítidas, degradê com transição limpa e simetria rigorosa no corte e na barba."
      },
      {
        title: "Sempre as Mesmas Mãos",
        desc: "Você sempre corta com o mesmo barbeiro, garantindo consistência técnica em todos os atendimentos."
      },
      {
        title: "Visagismo Aplicado",
        desc: "Estudo detalhado do formato facial para valorizar suas linhas de mandíbula e expressão."
      },
      {
        title: "Ferramentas Profissionais",
        desc: "Lâminas descartáveis de padrão cirúrgico, tesouras forjadas a laser e esterilização rigorosa."
      }
    ],
    imagePrimary: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85",
    imageSecondary: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&w=800&q=85",
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
      description: "Corte completo na tesoura ou máquina com consultoria de visagismo facial, lavagem refrescante e styling com pomada nobre.",
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
      description: "Transição milimétrica cirúrgica (Skin Fade, Mid Fade, Taper ou Low Fade). Linhas nítidas, acabamento na shaver e navalhete com precisão máxima.",
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
      description: "Escultura e modelagem da barba com aplicação de óleos aromáticos, toalha aquecida, navalha descartável e pós-barba refrescante com massagem.",
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
      description: "A experiência completa de transformação no estúdio privativo. Inclui corte personalizado, barboterapia tradicional, higienização e styling com economia.",
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
      description: "Limpeza e alinhamento natural na navalha ou pinça, preservando a harmonia e a expressão masculina com discrição e naturalidade.",
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
      description: "Tonalização suave e sutil dos fios brancos (cabelo ou barba). Resultado 100% natural que rejuvenesce sem aspecto artificial de tintura.",
      featured: false,
      badge: null,
      icon: "feather",
    },
    {
      id: "tratamento-capilar",
      name: "Tratamento Capilar & Detox",
      category: "Tratamentos",
      price: "R$ 60",
      priceRaw: 60,
      duration: "35 min",
      description: "Detox do couro cabeludo, hidratação profunda antifrizz e fortalecimento dos fios com cosméticos masculinos de alta performance.",
      featured: false,
      badge: null,
      icon: "shield",
    }
  ],

  // Galeria de Trabalhos Reais Executados Exclusivamente pelo Barbeiro
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
      description: "Estrutura clássica com tesoura, volume no topete e pomada de fixação elegante.",
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
      description: "Graduação na têmpora com transição suave e pezinho esculpido a navalha.",
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

  // Diferenciais Focados Exclusivamente no Trabalho & Técnica
  differentials: [
    {
      icon: "zap",
      title: "Precisão & Acabamento Cirúrgico",
      description: "Degradê suave sem marcas de transição, linhas frontais perfeitamente alinhadas e contornos na navalha com simetria milimétrica."
    },
    {
      icon: "award",
      title: "Sempre as Mesmas Mãos",
      description: "Sem rotatividade. Seu corte e sua barba serão executados sempre pelo mesmo barbeiro, garantindo consistência técnica em cada atendimento."
    },
    {
      icon: "user-check",
      title: "Visagismo Técnico Sob Medida",
      description: "Estudo individual do caimento dos fios, redemoinhos e proporções do rosto para valorizar suas linhas naturais com técnica apurada."
    },
    {
      icon: "shield-check",
      title: "Ferramentas & Higiene Cirúrgica",
      description: "Lâminas descartáveis descartadas na sua frente, tesouras forjadas a laser e esterilização de grau hospitalar em todo o instrumental."
    }
  ],

  // Chamada Final (CTA)
  finalCta: {
    title: "SEU PRÓXIMO CORTE COMEÇA AQUI.",
    text: "Reserve seu horário exclusivo e garanta seu atendimento individual focado no seu corte.",
    buttonText: "AGENDAR PELO WHATSAPP",
    subtext: "Atendimento exclusivo com hora marcada • Confirmação direta no WhatsApp",
  },

  // Rodapé e Links
  footer: {
    description: "Cortes masculinos de alta precisão, visagismo técnico e barboterapia tradicional. Foco absoluto na técnica, na navalha e no acabamento de alto padrão.",
    links: [
      { label: "Início", href: "#inicio" },
      { label: "Sobre mim", href: "#sobre" },
      { label: "Serviços", href: "#servicos" },
      { label: "Galeria", href: "#galeria" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Contato & Localização", href: "#contato" },
    ],
    copyright: "© {year} Barbearia Assinatura. Todos os direitos reservados.",
    tagline: "Precisão técnica e acabamento para quem exige o melhor."
  }
};

/**
 * Função utilitária para gerar links do WhatsApp com mensagens pré-formatadas
 */
export function getWhatsAppBookingUrl(serviceName = null) {
  const number = barbershopConfig.whatsappNumber;
  let text = barbershopConfig.whatsappDefaultMessage;
  
  if (serviceName) {
    text = `Olá! Gostaria de agendar o serviço de *${serviceName}* no estúdio privativo. Poderia me informar os horários disponíveis?`;
  }
  
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
