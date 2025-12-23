import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { CartProvider } from '@/context/CartContext';
import CartTab from "./components/CartTab";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})


export const metadata: Metadata = {
  title: "Sofa Project",
  description: "A Mordern Sofa ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jost.variable} ${bricolage.variable}`}
      >
        <CartProvider>
        <Nav />
        <CartTab />
        {children}
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
