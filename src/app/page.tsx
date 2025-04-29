'use client';

import { ThreeScene } from './three/ThreeScene';
import { TimeSpeedProvider } from './Context/TimeSpeedContext';
import { ScrollProvider } from './Context/ScrollContext';
import { RenderProvider } from './Context/RenderContext';
import { MainContent } from './_components/content/MainContent';
import { LoadingScreenOverlay } from './_components/loading/LoadingScreenOverlay';

export const dynamic = 'force-static';
export const fetchCache = 'default-cache';

export default function Home() {
  return (
    <RenderProvider>
      <LoadingScreenOverlay/>
      
      <ScrollProvider>
        <div className="w-screen h-screen relative">
            <div className="fixed inset-0 -z-10">
              <TimeSpeedProvider>
                <ThreeScene/>
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
