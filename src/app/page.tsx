'use client';

import {ThreeScene} from './three/ThreeScene';
import { TimeSpeedProvider } from './Context/TimeSpeedContext';
import { ScrollProvider } from './Context/ScrollContext';
import { RenderProvider, useRender } from './Context/RenderContext';
import { AnimatedCard} from './_components/AnimatedCard';

// レンダリング状態を表示するコンポーネント
function RenderStatus() {
  const { isRendered } = useRender();
  
  return (
    <div className="fixed top-4 right-4 z-50 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
      {isRendered ? 'レンダリング完了' : 'レンダリング中...'}
    </div>
  );
}

export default function Home() {
  return (
    <RenderProvider>
      <ScrollProvider>
        <div className="w-screen h-screen relative">
            <div className="fixed inset-0 -z-10">
              <TimeSpeedProvider>
                <ThreeScene/>
              </TimeSpeedProvider>
            </div>
            {/* スクロール可能なコンテンツ */}
            <div className="relative z-10 h-screen overflow-y-scroll">
                <section className="h-screen flex justify-center items-center ">
                  <AnimatedCard
                    image="/YuugouOhno.png"
                    name_ja="大野優剛"
                    affiliation="Itsubo Lab / AIST / ReLU Branch"
                    twitter="YuugouOhno"
                    wantedly="https://www.wantedly.com/id/YuugouOhno"
                  />
                </section>
                <section className="h-screen flex justify-center items-center ">
                    <h1 className="text-4xl font-bold">いい感じに宇宙旅行したい</h1>
                </section>
            </div>
            <RenderStatus />
        </div>
      </ScrollProvider>
    </RenderProvider>
  );
}
