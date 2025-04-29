'use client';

import React, { useEffect, useState } from 'react';
import { useRender } from '../../Context/RenderContext';
import { LoadingScreen } from './LoadingScreen';

export const LoadingScreenOverlay: React.FC = () => {
  const { isRendered } = useRender();
  const [visible, setVisible] = useState(true);  // DOM 存在フラグ
  const [fadeOut, setFadeOut] = useState(false); // フェード中フラグ

  useEffect(() => {
    if (isRendered) {
      // ① フェードアウト用クラスを付与
      setFadeOut(true);
      // ② トランジション完了（500ms後）に DOM から削除
      const timer = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isRendered]);

  // DOM を残すのは visible が true の間だけ
  if (!visible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        bg-black transition-opacity duration-500
        ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}
    >
      <LoadingScreen />
    </div>
  );
};
