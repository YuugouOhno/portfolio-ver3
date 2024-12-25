'use client';
import { Canvas } from '@react-three/fiber'
import { Box } from './Shapes/Box';
import { Earth } from './Stars/Earth';
import { Sun } from './Stars/Sun';
import { Moon } from './Stars/Moon';
import { Grid } from './Environment/Grid';

export function ThreeScene() {
    return (
        <Canvas 
            className='absolute inset-0'
            camera={{ position: [5, 5, 5], fov: 75 }}
        >
            {/* ライト */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            
            {/* 格子線を追加 */}
            <Grid size={100} divisions={10}/>

            {/* 星を追加 */}
            <Earth position={[0, 0, 0]}/>
            <Sun position={[-5, 0, 0]}/>
            <Moon position={[3, 0, 0]}/>
            
        </Canvas>
    )
}