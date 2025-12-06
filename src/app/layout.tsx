import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JC Piscinas | A sua construtora em Cajazeiras",
  description: "Procurando uma construtora? Pense em seu futuro com a melhor qualidade e garantia, venha para a melhor construtora de Cajazeiras.",
  keywords: ["construtora em cajazeiras", "construtora em cajazeiras pb", "construtora cajazeiras", "construtora cajazeiras pb", "jc piscinas", "construção cajazeiras", "construção cajazeiras pb", "melhor construtora cajazeiras", "melhor construtora cajazeiras pb", "construtora de qualidade"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
