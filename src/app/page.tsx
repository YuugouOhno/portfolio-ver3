import {ThreeScene} from './three/ThreeScene';
import { TimeSpeedProvider } from './Context/TimeSpeedContext';
import { ScrollProvider } from './Context/ScrollContext';
import TiltCard from './_components/TiltCard';

export default function Home() {
  return (
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
                <TiltCard
                  icon="/YuugouOhno.png"
                  name="Yuugou Ohno"
                  affiliation="Itsubo Lab / AIST"
                  twitter="YuugouOhno"
                  wantedly="https://www.wantedly.com/id/YuugouOhno"
                />
              </section>
              <section className="h-screen flex justify-center items-center ">
                  <h1 className="text-4xl font-bold">いい感じに宇宙旅行したい</h1>
              </section>
          </div>
      </div>
    </ScrollProvider>
  );
}
