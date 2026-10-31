# Barbearia Assinatura — Studio Privativo • Mestre Barbeiro

Landing page profissional, moderna e sofisticada desenvolvida sob medida para **Barbeiro Solo / Estúdio Privativo**, combinando estética masculina refinada (preto, grafite e toques dourados), atendimento 100% individual a portas fechadas e **Hero com vídeo cinematográfico de fundo em alta performance**.

---

## 💎 Características e Proposta do Estúdio Privativo

1. **Posicionamento Exclusivo (Barbeiro Solo):**
   - **Uma cadeira, um cliente por horário:** Total privacidade e silêncio, sem a agitação, conversas paralelas ou filas de salão comercial tradicional.
   - **Sempre as mesmas mãos:** O cliente é atendido sempre pelo mesmo profissional experiente, garantindo consistência técnica em todos os cortes.
   - **Visagismo Individual:** Consultoria dedicada às proporções do rosto e formato dos fios antes de iniciar cada procedimento.

2. **Identidade Visual de Alto Padrão:**
   - Paleta escura sofisticada (`#080808`, `#0F0F11`, `#151518`) com acentos em degradê dourado champanhe (`#C5A880`, `#D4AF37`) e branco puro para máximo contraste e legibilidade.
   - Tipografia premium: `Cinzel` (display marcante para títulos e monogramas) combinada com `Plus Jakarta Sans` (geométrica e limpa para leitura perfeita).

3. **Hero com Vídeo Cinematográfico de Fundo:**
   - Ocupa 100% da altura da tela (`min-h-screen`) com vídeo nativo em alta definição (`autoplay`, `loop`, `muted`, `playsinline`, sem controles aparentes).
   - Camada escura com vinheta suave e degradê vertical garantindo legibilidade absoluta dos textos e botões.
   - Frase de impacto: *"SEU ESTILO. MINHA ASSINATURA."*
   - Vídeo otimizado de carregamento ultra rápido (3.5MB local) + fallback CDN + poster fotográfico de alta definição.

4. **Seção Sobre Mim & O Estúdio:**
   - Layout em duas colunas: fotografia com moldura dourada e selo *"Studio Privativo"* + narrativa pessoal.
   - 4 pilares destacados: *Atendimento 100% Individual*, *Sempre as Mesmas Mãos*, *Visagismo Sob Medida* e *Privacidade & Conforto Absoluto*.

5. **Cardápio de Serviços e Preços Facilmente Editáveis:**
   - Cards com duração estimada, ícones exclusivos, valores em destaque dourado e botão individual de agendamento.
   - Todos os botões abrem o WhatsApp com **mensagem personalizada pré-preenchida com o nome do serviço escolhido**.

6. **Galeria de Cortes com Lightbox Modal:**
   - Grade contínua e limpa de trabalhos reais executados pelo barbeiro.
   - Clique em qualquer fotografia para abrir a visualização em alta definição com navegação por setas (mouse ou teclado: `Esc`, `←`, `→`).

7. **Diferenciais do Estúdio:**
   - 5 pilares fundamentais: *Atendimento 100% Individual*, *Sempre as Mesmas Mãos*, *Ambiente Privativo & Conforto*, *Cosméticos & Higiene Rigorosa* e *Pontualidade & Zero Espera*.

8. **Localização e Contato:**
   - Endereço do estúdio nos Jardins (São Paulo).
   - Mapa interativo estilizado no tema escuro.
   - Botão direto para traçar rota no Google Maps.
   - Links diretos para Telefone, WhatsApp e Instagram.
   - *(Conforme especificado, não exibe horários de funcionamento).*

9. **Chamada Final & Botão Flutuante de WhatsApp:**
   - Banner de fechamento de alto impacto convidando para a reserva do horário exclusivo.
   - Botão flutuante de WhatsApp no canto inferior com animação de pulso para agendamento instantâneo no celular ou computador.

10. **SEO e Otimização:**
    - Meta tags completas de SEO local para barbearia privativa.
    - OpenGraph e Twitter Cards para compartilhamento em redes sociais.
    - Dados Estruturados Schema.org (`BarberShop` / `LocalBusiness`) em JSON-LD para mecanismos de busca.

---

## 🛠️ Como Personalizar Informações (Muito Fácil!)

Todos os dados comerciais, serviços, preços, fotos e contatos estão centralizados em **[`src/data.js`](src/data.js)**.

Para alterar o WhatsApp, seu nome ou endereço:
```javascript
// src/data.js
export const barbershopConfig = {
  name: "ASSINATURA",
  subtitle: "STUDIO PRIVADO • MASTER BARBER",
  barberName: "Lucas Silva",
  phone: "(11) 98765-4321",
  whatsappNumber: "5511987654321", // Apenas números: DDI (55) + DDD + Telefone
  instagramUrl: "https://instagram.com/barbearia.assinatura",
  address: {
    street: "Rua Oscar Freire",
    number: "1280",
    complement: "Sala 42 - Estúdio Privativo",
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
    description: "Corte completo na tesoura ou máquina com consultoria de visagismo...",
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
