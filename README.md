# Z-PAY — Settlement Infrastructure

Página institucional da Z-PAY — camada de orquestração de pagamentos do ecossistema ZETTA.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript 5.7**
- Deploy: **Vercel**

## Setup Local

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Deploy na Vercel

1. Push do repositório no GitHub
2. Conecte o repo na [Vercel](https://vercel.com)
3. Framework preset: **Next.js** (detectado automaticamente)
4. Deploy automático a cada push na `main`

## Estrutura

```
src/app/
├── globals.css       # Estilos globais (completos)
├── content.ts        # HTML body + client scripts
├── layout.tsx        # Root layout + SEO metadata
├── page.tsx          # Página principal (server)
└── PageClient.tsx    # Client component (hydration + scripts)
public/
└── assets/logo/zpay-logo.png
```

## Features

- i18n (PT / EN / ZH) com switch no nav
- Custom cursor (desktop)
- Canvas chart animado
- Scroll progress bar
- Toast notifications
- Mobile menu responsivo
- SEO completo (Open Graph + Twitter Cards)

## Licença

Propriedade de ZETTA WORD. Todos os direitos reservados.
