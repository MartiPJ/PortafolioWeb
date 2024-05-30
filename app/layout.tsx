import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi portafolio😎",
  description: "Este es portafolio de Marti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
      <Navbar/>
      
        {children}
      </body>
    </html>
  );
}
