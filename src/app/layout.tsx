import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Z-PAY — Settlement Infrastructure for Merchants and Platforms",
  description:
    "Infraestrutura de liquidação programável para merchants e plataformas. Orquestração de checkout, webhooks, split, payout e conciliação entre rails fiat e digitais.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://zpay.zetta.com/" },
  openGraph: {
    type: "website",
    url: "https://zpay.zetta.com/",
    title: "Z-PAY — Payment Orchestration Infrastructure",
    description:
      "Infraestrutura de liquidação para Pix, cartão e ativos digitais com checkout, webhooks, split e conciliação.",
    images: [{ url: "/assets/og/zpay-og.png", width: 1200, height: 630 }],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Z-PAY — Settlement Infrastructure",
    description:
      "Camada de orquestração de pagamentos e liquidação com checkout, API, webhooks e reconciliação.",
    images: ["/assets/og/zpay-og.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Z-PAY",
  },
  icons: { apple: "/assets/logo/zpay-logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#060912",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
