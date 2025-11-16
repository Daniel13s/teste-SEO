import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JC Piscinas | A sua construtora em Cajazeiras",
  description: "Procurando uma construtora? Pense em seu futuro com a melhor qualidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
