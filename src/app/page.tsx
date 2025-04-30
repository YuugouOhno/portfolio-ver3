'use client';
import dynamicImport from 'next/dynamic'
import { useEffect, useState } from 'react'

import { TimeSpeedProvider } from './Context/TimeSpeedContext';
import { ScrollProvider } from './Context/ScrollContext';
import { RenderProvider } from './Context/RenderContext';
import { MainContent } from './_components/content/MainContent';
import { LoadingScreenOverlay } from './_components/loading/LoadingScreenOverlay';
import { requestIdle, cancelIdle } from './utils/requestIdle';

export const dynamic = 'force-static';
export const fetchCache = 'default-cache';

const ThreeScene = dynamicImport(
  () => import('./three/ThreeScene').then(mod => mod.ThreeScene), 
  {ssr: false}
);


export default function Home() {
  const [show3D, setShow3D] = useState(false)

  useEffect(() => {
    const id = requestIdle(() => setShow3D(true), { timeout: 3000 });
    return () => cancelIdle(id);
  }, [])

  return (
    <RenderProvider>
      <ScrollProvider>
        <div className="w-screen h-screen relative">
          {/* スクロール可能なコンテンツ */}
          <div className="relative z-20 h-screen overflow-y-scroll">
            <MainContent />
          </div>
          {/* ▼ ThreeScene 背景 + LoadingOverlay */}
          <div className="fixed inset-0 -z-10">
            <TimeSpeedProvider>
              {show3D && <ThreeScene/>}
              <LoadingScreenOverlay/>
            </TimeSpeedProvider>
          </div>
        </div>
      </ScrollProvider>
    </RenderProvider>
  );
}
