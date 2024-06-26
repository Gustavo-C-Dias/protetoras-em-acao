import type { Metadata } from "next"
import { ItimFont } from "@/font/font"
import "@/style/globals.css"

export const metadata: Metadata = {
  title: "Protetoras em Ação",
  description: "Protetoras em Ação é um projeto para ajudar animais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={ItimFont.className}>{children}</body>
    </html>
  );
}
