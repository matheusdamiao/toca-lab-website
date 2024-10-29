import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toca Lab - Produtora Audiovisual de Conteúdo. Laboratório Criativo.",
  description: "Videos Estratégicos para seu negócio. Produção de conteúdo e Tráfego Pago",
  openGraph: {
    images: "opengraph-image.png",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
