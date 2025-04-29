'use client';
import dynamicImport from 'next/dynamic'
import { useEffect, useState } from 'react'

import { TimeSpeedProvider } from './Context/TimeSpeedContext';
import { ScrollProvider } from './Context/ScrollContext';
import { RenderProvider } from './Context/RenderContext';
import { MainContent } from './_components/content/MainContent';
import { LoadingScreenOverlay } from './_components/loading/LoadingScreenOverlay';

export const dynamic = 'force-static';
export const fetchCache = 'default-cache';

const ThreeScene = dynamicImport(() => import('./three/ThreeScene').then(mod => mod.ThreeScene), {
  ssr: false
})


export default function Home() {
  const [show3D, setShow3D] = useState(false)

  useEffect(() => {
    const id = window.requestIdleCallback(
      () => setShow3D(true),
      { timeout: 3000 } // 3秒以内に空いたら読み込む
    )
    return () => cancelIdleCallback(id)
  }, [])

  return (
    <RenderProvider>
      <LoadingScreenOverlay/>
      
      <ScrollProvider>
        <div className="w-screen h-screen relative">
            <div className="fixed inset-0 -z-10">
              <TimeSpeedProvider>
                {show3D && <ThreeScene/>}
              </TimeSpeedProvider>
            </div>
            {/* スクロール可能なコンテンツ */}
            <div className="relative z-10 h-screen overflow-y-scroll">
              <MainContent />
            </div>
        </div>
      </ScrollProvider>
    </RenderProvider>
  );
}
