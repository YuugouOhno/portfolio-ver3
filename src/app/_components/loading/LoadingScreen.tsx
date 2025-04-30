import React from 'react';
import './solarLoader.css'; // ↓の CSS を読み込むだけ

export const LoadingScreen = () => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center starfield">
    <div className="slr-system">
      <div className="slr-sun" />

      {/* 惑星たち。delay / orbit-delay は CSS のカスタムプロパティで制御 */}
      <div className="slr-orbit slr-mercury"><div className="slr-planet" /></div>
      <div className="slr-orbit slr-venus"  ><div className="slr-planet" /></div>
      <div className="slr-orbit slr-earth"  ><div className="slr-planet" /></div>
      <div className="slr-orbit slr-mars"   ><div className="slr-planet" /></div>
      <div className="slr-orbit slr-jupiter"><div className="slr-planet" /></div>
      <div className="slr-orbit slr-saturn" ><div className="slr-planet" /></div>
      <div className="slr-orbit slr-uranus" ><div className="slr-planet" /></div>
      <div className="slr-orbit slr-neptune"><div className="slr-planet" /></div>
    </div>

    <p className="mt-4 text-white text-xl font-semibold">宇宙を読み込み中…</p>
  </div>
);
