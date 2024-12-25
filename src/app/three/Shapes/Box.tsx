'use client';
import React, { useRef, useState } from 'react';
import { Mesh } from 'three';
import { ThreeEvent, useFrame } from '@react-three/fiber';

interface BoxProps {
    position?: [number, number, number]; // 位置（オプション）
    color?: string;
}
  
export function Box({position, color}: BoxProps) {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // 回転処理
  useFrame((state, delta) => {
    if (meshRef.current) {
        meshRef.current.rotation.x += delta * 2; // 回転速度を2倍に
        // meshRef.current.rotation.y += delta * 2; // Y軸回転も追加
    }
  });
  
  return (
    <mesh
        position={position}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={(event: ThreeEvent<MouseEvent>) => setActive(!active)}
        onPointerOver={(event: ThreeEvent<PointerEvent>) => setHover(true)}
        onPointerOut={(event: ThreeEvent<PointerEvent>) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : color ? color: 'orange'} />
    </mesh>
  );
}