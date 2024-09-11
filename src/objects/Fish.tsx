"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { config, useSpring, animated } from "@react-spring/three";

import { Mesh, Vector3 } from "three";

interface FishProps {
    position?: [number, number, number];
    index: number;
    positions: [number, number, number][];
    setPositions: React.Dispatch<React.SetStateAction<[number, number, number][]>>;
    velocities: [number, number, number][];
    setVelocities: React.Dispatch<React.SetStateAction<[number, number, number][]>>;
    coloredIndex: number[];
    setColoredIndex: React.Dispatch<React.SetStateAction<number[]>>;
}

const Fish: React.FC<FishProps> = ({ position = [0, 0, 0], index, positions, setPositions, velocities, setVelocities,coloredIndex,setColoredIndex }) => {
    const ref = useRef<Mesh>(null);
    const [hovered, setHovered] = useState<boolean>(false);
    const [indicesWithinView, setIndicesWithinView] = useState<number[]>([]);
    const [indicesWithinRange, setIndicesWithinRange] = useState<number[]>([]);
    
    // ランダムな速度と方向を設定
    const [velocity] = useState<[number, number, number]>(() => [
      (Math.random() - 0.5) * 0.1,
      (Math.random() - 0.5) * 0.1,
      (Math.random() - 0.5) * 0.1
    ]);

    // 位置と速度を記録
    useEffect(() => {
        setPositions((prev) => {
            const newPositions = [...prev];
            newPositions[index] = position;
            return newPositions;
        });
        setVelocities((prev) => {
            const newVelocities = [...prev];
            newVelocities[index] = velocity;
            return newVelocities;
        });
    }, [index, position, setPositions]);

    // positionsの変更を監視する
    useEffect(() => {
        console.log("positions updated:", positions);
    }, [positions]);

  
    useFrame(() => {
      if (ref.current) {
        // 速度を更新
        ref.current.position.x += velocity[0];
        ref.current.position.y += velocity[1];
        ref.current.position.z += velocity[2];

        // 進行方向に基づいてオブジェクトの回転を設定
        const direction = new Vector3(velocity[0], velocity[1], velocity[2]).normalize();
        ref.current.lookAt(ref.current.position.clone().add(direction));

        // 位置を更新
        setPositions((prev) => {
            const newPositions = [...prev];
            newPositions[index] = [ref.current!.position.x, ref.current!.position.y, ref.current!.position.z];
            return newPositions;
        });

        // 一時的な配列を使用して効率的にインデックスを収集
        const indicesWithinViewTemp: number[] = [];
        const indicesWithinRangeTemp: number[] = [];

        for (let i = 0; i < positions.length; i++) {
            if (i === index) continue; // 自分自身を除外

            const pos = positions[i];
            const dx = pos[0] - ref.current.position.x;
            const dy = pos[1] - ref.current.position.y;
            const dz = pos[2] - ref.current.position.z;
            const distanceSquared = dx * dx + dy * dy + dz * dz;

            // 半径5以内を確認（平方根を取らずにチェック）
            if (distanceSquared <= 25) {
                indicesWithinRangeTemp.push(i);
            }

            // 半径10以内を確認し、進行方向の半球内を確認
            if (distanceSquared <= 100) {
                const relativePos = new Vector3(dx, dy, dz).normalize();
                const dotProduct = direction.dot(relativePos);
                if (dotProduct > 0) {
                    indicesWithinViewTemp.push(i);
                }
            }
        }

        setIndicesWithinRange(indicesWithinRangeTemp)
        setIndicesWithinView(indicesWithinViewTemp)

        // if (index == 0 && indicesWithinRangeTemp.length > 0) {
        //     setColoredIndex(indicesWithinRangeTemp)
        //     console.log(`Fish ${index} sees fish within the hemisphere of radius 10:`, coloredIndex);
        // }

        // console.log(ref.current.position.x)
        
        
        

        // x, y, z のいずれかが 50 を超えた場合、(0, 0, 0) に戻す
        if (
            Math.abs(ref.current.position.x) > 50 ||
            Math.abs(ref.current.position.y) > 50 ||
            Math.abs(ref.current.position.z) > 50
          ) {
            ref.current.position.set(0, 0, 0); // 位置を (0, 0, 0) にリセット
          }
      }
    });
  
    return (
        <animated.mesh
            ref={ref}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            {/* <meshStandardMaterial color={indexWithinView.includes(index) ? "red" : "yellow"} /> */}
            <meshStandardMaterial 
                color={coloredIndex.includes(index) ? "red" : index == 0 ? "yellow" : "orange"} 
            />
        </animated.mesh>
    );
  };

export default Fish;