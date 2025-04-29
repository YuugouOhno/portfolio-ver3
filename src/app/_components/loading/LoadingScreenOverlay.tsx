'use client';

import React, { useEffect, useState } from 'react';
import { useRender } from '../../Context/RenderContext';
import { LoadingScreen } from './LoadingScreen';

export const LoadingScreenOverlay: React.FC = () => {
  const { isRendered } = useRender();
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isRendered) {
      requestAnimationFrame(() => {
        setFadeOut(true);
        const timer = setTimeout(() => setVisible(false), 500); // フェード完了に合わせる
        return () => clearTimeout(timer);
      });
    }
  }, [isRendered]);

  if (!visible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        bg-black transition-opacity duration-500 ease-in-out
        ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}
    >
      <LoadingScreen />
    </div>
  );
};
