'use client';
import { Canvas } from '@react-three/fiber'
import { SolarSystem } from './Universe/SolarSystem'
import {TimeSpeedController} from './Universe/TimeSpeedController';
import { CameraController } from './CameraController';

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
            >
                <CameraController />
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <SolarSystem />                
            </Canvas>
            <TimeSpeedController/>
        </>
    )
}