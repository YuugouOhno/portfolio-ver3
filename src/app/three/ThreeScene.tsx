'use client';
import { Canvas, useFrame } from '@react-three/fiber'
import { SolarSystem } from './Universe/SolarSystem'
// import {TimeSpeedController} from './Universe/TimeSpeedController';
import { CameraController } from './CameraController';
import { useRef, useState } from 'react';
import { useRender } from '../Context/RenderContext';

// レンダリング完了を検知するコンポーネント
function RenderLogger() {
  const [hasLogged, setHasLogged] = useState(false);
  const frameCount = useRef(0);
  const { setRendered } = useRender();

  useFrame(() => {
    // 数フレーム後にログを出力（テクスチャの読み込みが完了する時間を考慮）
    frameCount.current += 1;
    if (!hasLogged && frameCount.current > 10) {
      console.log('読み込み完了！');
      setHasLogged(true);
      setRendered(true); // コンテキストの状態を更新
    }
  });

  return null;
}

export function ThreeScene() {
    return (
        <>
            <Canvas 
                className='inset-0'
                camera={{
                    position: [0, 200, 200], // カメラ位置 (遠めに設定)
                    fov: 75,                 // 視野角 (Field of View) → デフォルト75, 小さくするとズームイン、大きくするとズームアウト
                    near: 1,                 // 手前の描画距離
                    far: 100000,               // 奥の描画距離
                }}
                performance={{ min: 0.5 }}
                dpr={[1, 2]}
                gl={{
                    antialias: false,
                    powerPreference: "high-performance",
                    alpha: false,
                }}
            >
                <RenderLogger />
                <CameraController />
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <SolarSystem />                
            </Canvas>
            {/* <TimeSpeedController/> */}
        </>
    )
}