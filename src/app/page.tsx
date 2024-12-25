import {ThreeScene} from './three/ThreeScene';
import { TimeSpeedProvider } from './three/Context/TimeSpeedContext';

export default function Home() {
  return (
    <div className="w-screen h-screen relative">
      <TimeSpeedProvider>
        <ThreeScene/>
      </TimeSpeedProvider>
    </div>
  );
}
