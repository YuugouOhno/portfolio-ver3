// 静的な部分を抽出 ページレイアウト
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YuugouOhno's Portfolio",
  description: "YuugouOhno's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} m-0 p-0 w-screen h-screen overflow-hidden`}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
