import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/layout/Navbar";
// import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/footer";
import MusicPlayer from '@/components/common/MusicPlayer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChillDevs",
  description: "Crafting digital experiences with chill vibes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
        />
      </head>
      <body className={inter.className}>
        {/* <Navbar /> */}
        <main>{children}</main>
        <Footer />
        <MusicPlayer />
      </body>
    </html>
  );
}
