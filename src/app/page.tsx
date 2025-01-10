import {ThreeScene} from './three/ThreeScene';
import { TimeSpeedProvider } from './Context/TimeSpeedContext';
import { ScrollProvider } from './Context/ScrollContext';

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
                  <h1 className="text-4xl font-bold">地球を表示しています</h1>
              </section>
              <section className="h-screen flex justify-center items-center ">
                  <h1 className="text-4xl font-bold">月を表示しています</h1>
              </section>
          </div>
      </div>
    </ScrollProvider>
  );
}
