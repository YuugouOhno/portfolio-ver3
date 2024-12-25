'use client';
import { Canvas } from '@react-three/fiber'
import { Box } from './Shapes/Box';
import { Earth } from './Stars/Earth';
import { Sun } from './Stars/Sun';
import { Moon } from './Stars/Moon';

export function ThreeScene() {
    return (
        <Canvas 
            className='absolute inset-0'
        >
            <Box position={[-2, 0, 0]} color="red"/>
            <Earth position={[0, 0, 0]}/>
            <Sun position={[-5, 0, 0]}/>
            <Moon position={[3, 0, 0]}/>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
        </Canvas>
    )
}