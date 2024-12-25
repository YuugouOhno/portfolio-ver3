'use client';
import { Canvas } from '@react-three/fiber'
import { Box } from './Box';
import { Star } from './Star';

export function ThreeScene() {
    return (
        <Canvas className='absolute inset-0'>
            <Box position={[-2, 0, 0]} color="red"/>
            <Star position={[2, 0, 0]} color="blue"/>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
        </Canvas>
    )
}