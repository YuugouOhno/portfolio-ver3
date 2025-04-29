import React from 'react';

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-xl font-semibold">読み込み中...</p>
      </div>
    </div>
  );
}; 