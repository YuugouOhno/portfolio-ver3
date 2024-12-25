'use client';

import React, { useRef, forwardRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';

interface BaseStarProps {
  texturePath: string;      // テクスチャのパス
  position?: [number, number, number]; // 初期位置
  radius?: number;          // 半径
  rotationSpeed?: number;   // 自転速度
}

// 1. forwardRef でラップする
export const BaseStar = forwardRef<Mesh, BaseStarProps>(
  function BaseStarImpl(  // コンポーネント名は何でもOK
    { texturePath, position = [0, 0, 0], radius = 1, rotationSpeed = 0.002 },
    ref
  ) {
    // 2. 内部で使うローカルref
    const localRef = useRef<Mesh>(null);

    // テクスチャを読み込む
    const texture = useLoader(TextureLoader, texturePath);

    // 回転アニメーション
    useFrame(() => {
      // localRef もしくは外部から来た ref のどちらを使うか選択
      const meshRef = (ref as React.MutableRefObject<Mesh>) ?? localRef;

      if (meshRef.current) {
        meshRef.current.rotation.y += rotationSpeed; // Y軸を中心に回転
      }
    });

    return (
      <mesh
        // 3. ref は外部から渡ってきたものがあればそちらを使う
        ref={ref || localRef}
        position={position}
      >
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial map={texture} metalness={0.3} roughness={0.8} />
      </mesh>
    );
  }
);
