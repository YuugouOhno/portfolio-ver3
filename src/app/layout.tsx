import type { Metadata } from "next";
import { Geist, Geist_Mono,Noto_Sans_JP } from "next/font/google";
import "./globals.css";

import Navbar from './_components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  // 好みの weight, subsets を指定
  weight: ["400", "700"],
  subsets: ["latin", "japanese"],
});

export const metadata: Metadata = {
  title: "大野優剛/YuugouOhno",
  description: "大野優剛のポートフォリオになりたい何か",
  other: {
    "google-site-verification": "r7_3mQg4DdwGEHuu1vqurY5XsLir6BLvV3R4rTfN8gw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
