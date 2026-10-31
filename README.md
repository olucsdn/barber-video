# Barbearia Assinatura — Website Premium

Website profissional, moderno e sofisticado desenvolvido para barbearias de alto padrão, combinando estética masculina refinada (preto, grafite e toques dourados), tipografia clássica contemporânea e **Hero com vídeo cinematográfico de fundo em alta performance**.

---

## 💎 Características e Funcionalidades

1. **Identidade Visual de Alto Padrão:**
   - Paleta escura sofisticada (`#080808`, `#0F0F11`, `#151518`) com acentos em degradê dourado champanhe (`#C5A880`, `#D4AF37`) e branco puro para máximo contraste e legibilidade.
   - Tipografia premium: `Cinzel` (display marcante para títulos e monogramas) combinada com `Plus Jakarta Sans` (geométrica e limpa para leitura perfeita).

2. **Hero com Vídeo Cinematográfico de Fundo:**
   - Ocupa 100% da altura da tela (`min-h-screen`) com vídeo nativo em alta definição (`autoplay`, `loop`, `muted`, `playsinline`, sem controles aparentes).
   - Camada escura com vinheta suave e degradê vertical garantindo legibilidade absoluta dos textos e botões.
   - Vídeo otimizado de carregamento ultra rápido (3.5MB local) + fallback CDN + poster fotográfico de alta definição.

3. **Seção Sobre com Composição Fotográfica:**
   - Layout em duas colunas: fotografia com moldura dourada e selo "Desde 2018" + narrativa institucional.
   - 4 pilares destacados: *Qualidade no Atendimento*, *Profissionalismo de Elite*, *Atenção aos Detalhes* e *Experiência e Cuidado Personalizado*.
   - Grade de números e métricas comprovando a tradição da barbearia.

4. **Cardápio de Serviços e Preços Facilmente Editáveis:**
   - Cards com duração estimada, ícones exclusivos, valores em destaque dourado e botão individual de agendamento.
   - Todos os botões abrem o WhatsApp com **mensagem personalizada pré-preenchida com o nome do serviço escolhido**.

5. **Galeria de Cortes com Filtro por Categoria e Lightbox Modal:**
   - Categorias: *Todos*, *Degradê*, *Corte Social*, *Corte Clássico*, *Barba* e *Transformações*.
   - Clique em qualquer fotografia para abrir a visualização em alta definição com navegação por setas (mouse ou teclado: `Esc`, `←`, `→`).

6. **Diferenciais da Marca:**
   - 5 pilares fundamentais: Atendimento Personalizado (Visagismo), Barbeiros Qualificados, Ambiente Confortável (Lounge & Cerveja Artesanal), Produtos de Alta Performance e Compromisso/Pontualidade.

7. **Localização e Contato:**
   - Endereço completo nos Jardins (São Paulo).
   - Mapa interativo estilizado no tema escuro.
   - Botão direto para traçar rota no Google Maps.
   - Links diretos para Telefone, WhatsApp e Instagram.
   - *(Conforme especificado, não exibe horários de funcionamento).*

8. **Chamada Final & Botão Flutuante de WhatsApp:**
   - Banner de fechamento de alto impacto convidando para a reserva.
   - Botão flutuante de WhatsApp no canto inferior com animação de pulso para agendamento instantâneo no celular ou computador.

9. **SEO e Otimização:**
   - Meta tags completas de SEO local.
   - OpenGraph e Twitter Cards para compartilhamento em redes sociais.
   - Dados Estruturados Schema.org (`BarberShop` / `LocalBusiness`) em JSON-LD para mecanismos de busca.

---

## 🛠️ Como Personalizar Informações (Muito Fácil!)

Todos os dados comerciais, serviços, preços, fotos e contatos estão centralizados em **[`src/data.js`](src/data.js)**.

Para alterar o WhatsApp, nome da barbearia ou endereço:
```javascript
// src/data.js
export const barbershopConfig = {
  name: "ASSINATURA",
  phone: "(11) 98765-4321",
  whatsappNumber: "5511987654321", // Apenas números: DDI (55) + DDD + Telefone
  instagramUrl: "https://instagram.com/barbearia.assinatura",
  address: {
    street: "Rua Oscar Freire",
    number: "1280",
    neighborhood: "Jardins",
    city: "São Paulo",
    state: "SP",
    cep: "01426-000",
  },
  // ...
};
```

Para editar, adicionar ou remover serviços e valores:
```javascript
// src/data.js
services: [
  {
    id: "corte-masculino",
    name: "Corte Masculino",
    price: "R$ 65",
    duration: "45 min",
    description: "Corte completo na tesoura ou máquina com visagismo facial...",
    featured: false,
    icon: "scissors"
  },
  // adicione novos serviços aqui facilmente!
]
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- Node.js instalado (v18 ou superior).

### Passo a Passo

1. **Instalar as dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Abra no seu navegador o endereço indicado (ex: `http://localhost:3000`).

3. **Gerar a versão de produção:**
   ```bash
   npm run build
   ```
   Os arquivos finais ultra otimizados serão gerados na pasta **`dist/`**, prontos para serem hospedados em qualquer servidor (Vercel, Netlify, GitHub Pages, Hostinger, cPanel, Apache, Nginx, etc.).

---

## 📁 Estrutura de Arquivos

```
barber-video/
├── dist/                      # Build de produção otimizado
├── public/
│   └── assets/
│       └── video/
│           └── barber-hero.mp4 # Vídeo cinematográfico de fundo (3.5MB)
├── src/
│   ├── data.js                # Central de dados: serviços, preços, textos e links
│   ├── icons.js               # Biblioteca de ícones SVG de alta definição
│   ├── main.js                # Lógica do site: menu, galeria, lightbox e WhatsApp
│   └── style.css              # Diretivas Tailwind e estilização de luxo
├── index.html                 # Estrutura semântica e SEO
├── tailwind.config.js         # Configurações de cores e fontes
├── vite.config.mjs            # Configuração do Vite
└── package.json               # Scripts e dependências
```
