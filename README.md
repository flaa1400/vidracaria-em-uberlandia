# 🏢 Vidraçaria Axis Glass — Plataforma de Alta Performance & SEO Local

> **Status do Projeto:** 🚀 **Pronto para Produção (Production-Ready)**  
> **Localização-Alvo:** Uberlândia - MG e região  
> **Deploy Target:** Vercel (Edge & Serverless)

---

## 📌 Visão Geral do Projeto

A plataforma da **Vidraçaria Axis Glass** foi concebida e desenvolvida com foco obsessivo em **SEO Local Programático**, **máxima pontuação no Core Web Vitals** e **alta conversão de leads (CRO)** para serviços de vidraçaria de alto padrão, esquadrias de alumínio e manutenções prediais/residenciais em Uberlândia - MG.

Com uma arquitetura moderna e escalável, a plataforma gera dinamicamente centenas de páginas segmentadas para cada bairro de Uberlândia combinadas com 15 serviços especializados, implementando rich snippets estruturados (`LocalBusiness` e `Service` via Schema.org / JSON-LD) para dominar a primeira página do Google e do Google Meu Negócio.

---

## 🛠️ Stack Tecnológica & Engenharia

| Camada | Tecnologia | Destaque Técnico |
|---|---|---|
| **Framework** | [Astro 4](https://astro.build/) | Islands Architecture com zero JavaScript desnecessário no client-side |
| **Estilização** | [Tailwind CSS](https://tailwindcss.com/) | Design System customizado, paleta institucional esmeralda/verde e tipografia otimizada |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) | Tipagem estrita de metadados, serviços, bairros e geradores de conteúdo |
| **SEO & Dados** | [Schema.org](https://schema.org/) / JSON-LD | Marcação de dados estruturados completa para mecanismos de busca e geolocalização |
| **Deploy & Hosting** | [Vercel](https://vercel.com/) | Adaptador oficial `@astrojs/vercel` híbrido (SSG + SSR Serverless Functions) |
| **Sitemap & Indexação** | `@astrojs/sitemap` | Geração automática de `sitemap-index.xml` cobrindo todas as rotas canônicas |

---

## 🎯 Diferenciais de Negócio & Arquitetura de Conversão (CRO)

1. **SEO Programático Hyperlocal:**
   - Cobertura de dezenas de bairros em Uberlândia (Tubalina, Granja Marileusa, Santa Mônica, Martins, Fundinho, Jardim Karaíba, Centro, etc.).
   - Páginas dedicadas por bairro e por serviço com textos dinâmicos exclusivos gerados semanticamente, evitando duplicação de conteúdo.
2. **Engenharia de Conversão (WhatsApp First):**
   - Botão flutuante premium de WhatsApp integrado (`WhatsAppBtn.astro`) persistente em todas as páginas.
   - Mensagens pré-configuradas contextuais com codificação URI para rastreabilidade de origem de cada lead.
3. **Aderência às Normas Técnicas:**
   - Menção às normas da ABNT (NBR 14207 para boxes, NBR 14718 para guarda-corpos, NBR 16259 para sacadas, NBR 10821 para esquadrias).
4. **Conformidade Legal & LGPD:**
   - Páginas transparentes de **Política de Privacidade** e **Termos e Condições de Uso**.

---

## 📂 Estrutura de Pastas do Projeto

```text
├── public/                 # Favicons, robots.txt e assets estáticos
├── src/
│   ├── components/         # Componentes modulares reutilizáveis (Hero, Header, Footer, WhatsAppBtn, etc.)
│   ├── content/            # Coleções de conteúdo dos 15 serviços (.md com frontmatter)
│   ├── data/               # Configurações globais (config.ts), bairros e serviços
│   ├── layouts/            # Layout principal com SEO e dados estruturados
│   ├── pages/              # Rotas da aplicação (Home, Sobre, Contato, Bairros, Serviços)
│   └── utils/              # Geradores algorítmicos de SEO semântico
├── astro.config.mjs        # Configuração do Astro com Tailwind, Sitemap e Vercel Adapter
├── tailwind.config.mjs     # Configuração do Tailwind com paleta e fontes customizadas
├── package.json            # Dependências e scripts de automação
└── .gitignore              # Regras estritas de isolamento de artefatos
```

---

## ⚡ Comandos e Execução Local

### 1. Clonar o repositório e instalar dependências
```bash
npm install
```

### 2. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse a aplicação em `http://localhost:4321`.

### 3. Compilar para produção (Build)
```bash
npm run build
```
Gera os artefatos de produção otimizados na pasta `.vercel/output/`.

### 4. Pré-visualizar o build localmente
```bash
npm run preview
```

---

## 🚢 Deploy na Vercel

O projeto está totalmente configurado para deploy contínuo (CI/CD) via GitHub na [Vercel](https://vercel.com):

1. Conecte o repositório Git à Vercel.
2. O framework preset **Astro** será detectado automaticamente.
3. O build command executará `astro build` utilizando o adaptador `@astrojs/vercel`.
4. Deploy instantâneo com distribuição global em CDN Edge.

---

## 👨‍💻 Autor & Manutenção

Desenvolvido com excelência técnica seguindo as melhores práticas globais de desenvolvimento web, SEO técnico e DevOps.
