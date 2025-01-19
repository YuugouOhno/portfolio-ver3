'use client';
import { useState, useEffect } from 'react';

export default function ThemeToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // ダークモード状態の適用
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // モード切り替えのハンドラ
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
    >
      {isDarkMode ? 'ライトモード' : 'ダークモード'}
    </button>
  );
}
