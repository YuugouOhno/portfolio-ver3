"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";

import Fish from "@/objects/Fish"

const Boids = () => {
    const [positions, setPositions] = useState<[number, number, number][]>(Array(200).fill([0, 0, 0]));
    const [velocities, setVelocities] = useState<[number, number, number][]>(Array(200).fill([0, 0, 0]));
    const [coloredIndex, setColoredIndex] = useState<number[]>([]);

    return (
        <>
            {Array.from({ length: 200 }).map((_, index) => (
                <Fish key={index} index={index} positions={positions} setPositions={setPositions} velocities={velocities} setVelocities={setVelocities} coloredIndex={coloredIndex} setColoredIndex={setColoredIndex}
                initialPosition={[
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10
                ]} 
                initialVelocity ={[
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10
                ]} 
                />
            ))}
        </>
    );
};

export default Boids;