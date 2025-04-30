'use client';

import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { GiWhaleTail } from 'react-icons/gi';

export function PortfolioContainer() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center mx-10">
      <p className="mt-4 text-3xl font-bold">
        🚧ここから先は鋭意開拓中の宇宙空間🚧<br />
        プロフィールの詳細は下のボタンから
      </p>

      <ParticleButton
        href="https://www.notion.so/yuugouohno/1de6858a9ed680058d56dbb1666cc409?pvs=4"
        label="プロフィール詳細はこちら"
        delay={700}
      />
    </section>
  );
}

/* ───────── ボタン ───────── */
interface BtnProps {
  href: string;
  label: string;
  delay?: number;
}

function ParticleButton({ href, label, delay = 0 }: BtnProps) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [gradient, setGradient] = useState(
    'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 60%)',
  );

  /* マウス位置でライトを追従させる */
  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = btnRef.current!.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGradient(
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 65%)`,
    );
  };

  /* クリックでパーティクル */
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // 即遷移しない
    const rect = btnRef.current!.getBoundingClientRect();
    confetti({
      particleCount: 40,
      spread: 70,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
      scalar: 0.8,
      ticks: 120,
    });
    // 指定ミリ秒後にリンクを開く（同タブ or 新タブ）
    setTimeout(() => window.open(href, '_blank', 'noopener,noreferrer'), delay);
  };

  return (
    <a
      ref={btnRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMove}
      onClick={handleClick}
      className="
        group relative mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3
        font-semibold text-white/90 transition-transform backdrop-blur
        bg-gray-700/40 hover:bg-gray-700/60 hover:scale-105 active:scale-95
        focus:outline-none
      "
      style={{ backgroundImage: gradient }}
    >
      {/* ホバー時ふわっと膨張するリング */}
      <span
        className="
          absolute inset-0 rounded-full bg-white/30 opacity-0 transition
          group-hover:scale-110 group-hover:opacity-10
          pointer-events-none
        "
      />
      <GiWhaleTail className="h-5 w-5 opacity-80" />
      {label}
    </a>
  );
}
