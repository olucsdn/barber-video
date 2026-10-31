# Barbearia Assinatura — Barbeiro

Landing page profissional, moderna e visualmente impactante para **Barbeiro Solo**, combinando estética refinada (preto, grafite e toques dourados), atendimento pontual e **Hero com vídeo de fundo em alta performance**.

---

## 💈 Características do Site

1. **Posicionamento Real e Direto:**
   - **Trabalho bem feito no capricho:** Foco no degradê limpo, corte na tesoura e barba alinhada na navalha.
   - **Sempre o mesmo barbeiro:** O cliente senta na cadeira sabendo exatamente com quem vai cortar.
   - **Atendimento com hora marcada:** Pontualidade e atenção ao que o cliente realmente quer.

2. **Identidade Visual Profissional:**
   - Fundo escuro com acabamento em preto e grafite, detalhes em dourado e tipografia limpa e legível.
   - Layout responsivo e adaptado para celular, tablet e computador.

3. **Hero com Vídeo de Fundo:**
   - Vídeo de alta qualidade em reprodução contínua e sem controles, mostrando o trabalho na máquina e na navalha.
   - Camada escura para garantir excelente legibilidade dos textos e botões de agendamento.

4. **Serviços e Preços Claros:**
   - Cards com duração estimada, valores e botão individual de agendamento com mensagem pré-formatada no WhatsApp.

5. **Galeria de Cortes:**
   - Fotografias de trabalhos reais com visualização ampliada ao clicar.

6. **Localização e Contato:**
   - Endereço completo, mapa interativo, botão de rota no Google Maps, telefone e WhatsApp direto.
   - *(Sem exibição de horários de funcionamento).*

---

## 🛠️ Como Personalizar Informações

Todos os dados de contato, serviços, preços e textos ficam em **[`src/data.js`](src/data.js)**.

Para alterar o WhatsApp, nome ou endereço:
```javascript
// src/data.js
export const barbershopConfig = {
  name: "ASSINATURA",
  subtitle: "BARBEIRO",
  barberName: "Lucas Silva",
  phone: "(38) 98839-9608",
  whatsappNumber: "5538988399608",
  instagramUrl: "https://instagram.com/barbearia.assinatura",
  address: {
    street: "Rua Oscar Freire",
    number: "1280",
    complement: "Sala 42",
    neighborhood: "Jardins",
    city: "São Paulo",
    state: "SP",
    cep: "01426-000",
  },
  // ...
};
```

---

## 🚀 Como Executar o Projeto Localmente

1. **Instalar as dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Gerar a versão de produção:**
   ```bash
   npm run build
   ```
