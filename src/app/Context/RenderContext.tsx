'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RenderContextType {
  isRendered: boolean;
  setRendered: (rendered: boolean) => void;
}

const RenderContext = createContext<RenderContextType | undefined>(undefined);

export function RenderProvider({ children }: { children: ReactNode }) {
  const [isRendered, setRendered] = useState(false);

  return (
    <RenderContext.Provider value={{ isRendered, setRendered }}>
      {children}
    </RenderContext.Provider>
  );
}

export function useRender() {
  const context = useContext(RenderContext);
  if (context === undefined) {
    throw new Error('useRender must be used within a RenderProvider');
  }
  return context;
} 