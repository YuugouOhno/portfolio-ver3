'use client';
import { Canvas } from '@react-three/fiber'

export function ThreeScene() {
    return (
        <Canvas>
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[2, 2, 2]} />
                <meshPhongMaterial color="blue"  />
            </mesh>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
        </Canvas>
    )
}