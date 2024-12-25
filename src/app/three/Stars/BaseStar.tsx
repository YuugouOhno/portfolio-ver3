'use client';

import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh } from 'three';
import { TextureLoader } from 'three';

interface BaseStarProps {
  texturePath: string; // テクスチャのパス
  position?: [number, number, number]; // 初期位置
  radius?: number; // 半径
  rotationSpeed?: number; // 自転速度
}

export function BaseStar({ texturePath, position = [0, 0, 0], radius = 1, rotationSpeed = 0.002 }: BaseStarProps) {
  const starRef = useRef<Mesh>(null);

  // テクスチャを読み込む
  const texture = useLoader(TextureLoader, texturePath);

  // 回転アニメーション
  useFrame(() => {
    if (starRef.current) {
      starRef.current.rotation.y += rotationSpeed; // Y軸を中心に回転
    }
  });

  return (
    <mesh ref={starRef} position={position}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial map={texture} metalness={0.3} roughness={0.8} />
    </mesh>
  );
}