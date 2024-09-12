"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { config, useSpring, animated } from "@react-spring/three";

import { Mesh, Vector3 } from "three";

interface FishProps {
    initialPosition?: [number, number, number];
    initialVelocity?: [number, number, number];
    index: number;
    positions: [number, number, number][];
    setPositions: React.Dispatch<React.SetStateAction<[number, number, number][]>>;
    velocities: [number, number, number][];
    setVelocities: React.Dispatch<React.SetStateAction<[number, number, number][]>>;
    coloredIndex: number[];
    setColoredIndex: React.Dispatch<React.SetStateAction<number[]>>;
}

const normalize = (vec: [number, number, number]): [number, number, number] => {
    const [x, y, z] = vec;
    const length = Math.sqrt(x * x + y * y + z * z);
  
    if (length === 0) {
      return [0, 0, 0]; // 長さが0の場合、ベクトルは正規化できません
    }
  
    return [x / length, y / length, z / length];
};

const addVectors = (vec1: [number, number, number], vec2: [number, number, number]): [number, number, number] => {
    return [vec1[0] + vec2[0], vec1[1] + vec2[1], vec1[2] + vec2[2]];
};

const sumVector = (vectors: [number, number, number][]): [number, number, number] => {
    return vectors.reduce(
        (acc, vec) => [acc[0] + vec[0], acc[1] + vec[1], acc[2] + vec[2]],
        [0, 0, 0] as [number, number, number]
    );
};

const multiplyVectorByScalar = (vec: [number, number, number], scalar: number): [number, number, number] => {
    return [vec[0] * scalar, vec[1] * scalar, vec[2] * scalar];
};

const Fish: React.FC<FishProps> = ({ initialPosition = [0, 0, 0],initialVelocity = [0, 0, 0], index, positions, setPositions, velocities, setVelocities,coloredIndex,setColoredIndex }) => {
    const ref = useRef<Mesh>(null);

    const [hovered, setHovered] = useState<boolean>(false);
    
    // ランダムな速度と方向を設定
    const [randomVelocity] = useState<[number, number, number]>(() => [
      (Math.random() - 0.5) * 0.1,
      (Math.random() - 0.5) * 0.1,
      (Math.random() - 0.5) * 0.1
    ]);

    // 位置と速度を記録
    useEffect(() => {
        setPositions((prev) => {
            const newPositions = [...prev];
            newPositions[index] = initialPosition;
            return newPositions;
        });
        setVelocities((prev) => {
            const newVelocities = [...prev];
            newVelocities[index] = initialVelocity;
            return newVelocities;
        });
        // 進行方向に基づいてオブジェクトの回転を設定
        const initialVelocityVector = new Vector3(...initialVelocity);
        const initialDirection = initialVelocityVector.normalize();
        if (ref.current) {
            ref.current.lookAt(ref.current.position.clone().add(initialDirection));
        }
    }, [index, initialPosition, setPositions]);

    // positionsの変更を監視する
    useEffect(() => {
        console.log("なぜかここでpositionsをconsoleに出さないと視界が認識されない", positions);
    }, [positions]);


    const getViewAndRangeIndices = (
        positions: [number, number, number][], 
        index: number,
        direction: Vector3
    ) => {
        // 一時的な配列を使用して効率的にインデックスを収集
        const indicesWithinView: number[] = [];
        const indicesWithinRange: number[] = [];

        for (let i = 0; i < positions.length; i++) {
            if (i === index) continue; // 自分自身を除外

            const pos = positions[i];
            const dx = pos[0] - positions[index][0];
            const dy = pos[1] - positions[index][1];
            const dz = pos[2] - positions[index][2];
            const distanceSquared = dx * dx + dy * dy + dz * dz;

            // 半径5以内を確認（平方根を取らずにチェック）
            if (distanceSquared <= 25) {
                indicesWithinRange.push(i);
            }

            // 半径10以内を確認し、進行方向の半球内を確認
            if (distanceSquared <= 100) {
                const relativePos = new Vector3(dx, dy, dz).normalize();
                const dotProduct = direction.dot(relativePos);
                if (dotProduct > 0) {
                    indicesWithinView.push(i);
                }
            }
        }

        // if (index == 0 && indicesWithinRange.length > 0) {
        //     setColoredIndex(indicesWithinRange)
        //     console.log(`Fish ${index} sees fish within the hemisphere of radius 10:`, coloredIndex);
        // }
        
        return {
            indicesWithinRange: indicesWithinRange,
            indicesWithinView: indicesWithinView,
        };
    };

    // cohesion_v
    const getCohesiveVelocity = (
        currentPosition: [number, number, number],
        positionsWithinView: [number, number, number][]
    ) => {
        const cohesiveVelocity: [number, number, number] = [0.1,0,0];

        return cohesiveVelocity
    }

    // separation_v
    const getSeparatingVelocity = (
        currentPosition: [number, number, number],
        positionsWithinRange: [number, number, number][]
    ) => {
        const separatingVelocity: [number, number, number] = [0,0,0];
        return separatingVelocity
    }

    // alignment_v
    const getAligningVelocity = (
        velocitiesWithinView: [number, number, number][],
    ) => {
        const aligningVelocity: [number, number, number] = [0,0,0];
        return aligningVelocity
    }


    const getAdditionalVelocity = (
        positionsWithinView: [number, number, number][],
        positionsWithinRange: [number, number, number][],
        velocitiesWithinView: [number, number, number][],
        currentPosition: [number, number, number]
    ) => {
        const cohesiveVelocity: [number, number, number] = getCohesiveVelocity(currentPosition,positionsWithinView);
        const separatingVelocity: [number, number, number] = getSeparatingVelocity(currentPosition,positionsWithinRange);
        const aligningVelocity: [number, number, number] = getAligningVelocity(velocitiesWithinView);

        // 各ベクトルに重みを適用
        const cohesiveWeight = 1.0;  // 結合の重み
        const separatingWeight = 1.5;  // 分離の重み
        const aligningWeight = 1.0;  // 整列の重み

        // ベクトルに重みをかける
        // ベクトルに重みをかける
        const weightedCohesive: [number, number, number] = multiplyVectorByScalar(cohesiveVelocity, cohesiveWeight);
        const weightedSeparating: [number, number, number] = multiplyVectorByScalar(separatingVelocity, separatingWeight);
        const weightedAligning: [number, number, number] = multiplyVectorByScalar(aligningVelocity, aligningWeight);

        const additionalVelocity = sumVector([weightedCohesive, weightedSeparating, weightedAligning]);

        return additionalVelocity;
    }

  
    useFrame(() => {
      if (ref.current) {
        // 進行方向に基づいてオブジェクトの回転を設定
        const direction = new Vector3(velocities[index][0], velocities[index][1], velocities[index][2]).normalize();
        ref.current.lookAt(ref.current.position.clone().add(direction));

        // 視界と周囲のindexを取得
        const { indicesWithinRange, indicesWithinView } = getViewAndRangeIndices(positions, index, direction);
        // 視界と周囲のindexからposition, velocityを取得
        const positionsWithinRange = indicesWithinRange.map(index => positions[index]);
        const positionsWithinView = indicesWithinView.map(index => positions[index]);
        const velocitiesWithinView = indicesWithinView.map(index => velocities[index]);
        const currentPosition = [...ref.current.position.toArray()];

        // 追加する速度ベクトルを取得
        const additionalVelocity = getAdditionalVelocity(positionsWithinRange, positionsWithinView, velocitiesWithinView, currentPosition);

        // 速度を更新
        ref.current.position.x += additionalVelocity[0];
        ref.current.position.y += additionalVelocity[1];
        ref.current.position.z += additionalVelocity[2];

        // 位置を更新
        setPositions((prev) => {
            const newPositions = [...prev];
            newPositions[index] = [ref.current!.position.x, ref.current!.position.y, ref.current!.position.z];
            // console.log("newPositions",newPositions)
            return newPositions;
        });

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