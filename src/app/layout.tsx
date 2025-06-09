import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/Components/Container";
import { NavBar } from "@/Components/NavBar";

import { Source_Code_Pro } from "next/font/google";
import clsx from "clsx";
import { Footer } from "@/Components/Footer";

const SourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keven Fernandes | Portfólio",
  description: "Keven Fernandes | Desenvolvedor Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={SourceCodePro.className} data-theme="light">
      <body
        className={clsx(
          "text-stone-800 bg-stone-200 ",
          "dark:text-stone-200 dark:bg-stone-800"
        )}
      >
        <NavBar />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
