'use client';
import { Canvas } from '@react-three/fiber'
import { Grid } from './Universe/Grid';
import { useTimeSpeed } from './Context/TimeSpeedContext';
import { SolarSystem } from './Universe/SolarSystem';

export function ThreeScene() {
    const { setTimeSpeed } = useTimeSpeed(); // 時間スピードを更新する関数

    return (
        <>
            <Canvas 
                className='absolute inset-0'
                camera={{ position: [10, 10, 10], fov: 75 }}
            >
                {/* ライト */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                
                {/* 格子線を追加 */}
                <Grid size={100} divisions={10}/>

                {/* 太陽系 */}
                <SolarSystem />                
            </Canvas>
            {/* 時間スピードを調整する UI */}
            <div className="absolute bottom-5 left-5 bg-gray-800 text-white p-3 rounded">
                <label htmlFor="timeSpeed">Time Speed: </label>
                <input
                    id="timeSpeed"
                    type="range"
                    min="0.01"
                    max="3"
                    step="0.1"
                    defaultValue={1}
                    onChange={(e) => setTimeSpeed(Number(e.target.value))}
                />
            </div>
        </>
    )
}