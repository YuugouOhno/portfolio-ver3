"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Mesh } from "three";

import Fish from "@/objects/Fish"

const Boids = () => {
    const [positions, setPositions] = useState<[number, number, number][]>(Array(200).fill([0, 0, 0]));
    const [velocities, setVelocities] = useState<[number, number, number][]>(Array(200).fill([0, 0, 0]));
    const [coloredIndex, setColoredIndex] = useState<number[]>([]);

    
    // 10座標以内にある位置をチェックしてコンソールに出力
    // useFrame(() => {
    //     positions.forEach((pos, i) => {
    //         positions.forEach((otherPos, j) => {
    //             if (i !== j) {
    //                 const distance = Math.sqrt(
    //                     Math.pow(pos[0] - otherPos[0], 2) +
    //                     Math.pow(pos[1] - otherPos[1], 2) +
    //                     Math.pow(pos[2] - otherPos[2], 2)
    //                 );
    //                 if (distance < 10) {
    //                     console.log(`Fish ${i} is within 10 units of Fish ${j}:`, otherPos);
    //                 }
    //             }
    //         });
    //     });
    // });

    return (
        <>
            {Array.from({ length: 200 }).map((_, index) => (
                <Fish key={index} index={index} positions={positions} setPositions={setPositions} velocities={velocities} setVelocities={setVelocities} coloredIndex={coloredIndex} setColoredIndex={setColoredIndex} position={[
                    // (Math.random() - 0.5) * 10,
                    // (Math.random() - 0.5) * 10,
                    // (Math.random() - 0.5) * 10
                    0,0,0
                ]} />
            ))}
        </>
    );
};

export default Boids;