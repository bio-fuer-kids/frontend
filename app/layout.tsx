import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../public/fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  display: "swap",
});

const montaguSlab = localFont({
  src: "../public/fonts/Montagu_Slab/MontaguSlab-VariableFont_opsz,wght.ttf",
  variable: "--font-montagu",
  display: "swap",
  style: "normal",
  weight: "100 900",
});

const montaguSlab_light = localFont({
  src: "../public/fonts/Montagu_Slab/static/MontaguSlab_120pt-ExtraLight.ttf",
  variable: "--font-montagu-light",
  display: "swap",
  style: "normal",
  weight: "100 600",
});

//

export const metadata: Metadata = {
  title: "Bio für Kids – Täglich gekocht. Frisch & gesund.",
  description:
    "Bio-Schulessen aus Hamburger Schulküchen – regional, frisch und zertifiziert bio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${montaguSlab.variable} ${montaguSlab_light.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
