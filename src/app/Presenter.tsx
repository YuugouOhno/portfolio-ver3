// ビュー

import Link from 'next/link';

import { Canvas } from '@react-three/fiber'

import Boids from "@/objects/Boids"

type Props = {
    children: React.ReactNode;
    // val: string;
    // setVal: (value: string) => void;
};

const Presenter = ({children}: Props) => (
    <>
        <Canvas camera={{ position: [0, 0, 20] }} className="absolute top-0 left-0 w-screen h-screen">
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Boids />
        </Canvas>
    </>
);

export default Presenter;