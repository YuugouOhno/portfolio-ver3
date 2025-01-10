'use client';

import React, { createContext, useContext, useState } from 'react';

interface TimeSpeedContextProps {
  timeSpeed: number; // 時間のスピード
  setTimeSpeed: (value: number) => void; // 時間スピードを更新する関数
}

// Context の作成
const TimeSpeedContext = createContext<TimeSpeedContextProps | undefined>(undefined);

// Context Provider
export const TimeSpeedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [timeSpeed, setTimeSpeed] = useState<number>(1); // デフォルトのスピードは1倍

  return (
    <TimeSpeedContext.Provider value={{ timeSpeed, setTimeSpeed }}>
      {children}
    </TimeSpeedContext.Provider>
  );
};

// Context を使用するカスタムフック
export const useTimeSpeed = () => {
  const context = useContext(TimeSpeedContext);
  if (!context) {
    throw new Error('useTimeSpeed must be used within a TimeSpeedProvider');
  }
  return context;
};
