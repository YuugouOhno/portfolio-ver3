// BaseStarWithName.tsx  ─────────────────────────────────────
'use client';

import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader, LinearFilter } from 'three';

interface BaseStarWithNameProps {
  name?: string;                               // ←★ 追加
  texturePath: string;
  position?: [number, number, number];
  radius?: number;
  rotationSpeed?: number;
}

export const BaseStarWithName = forwardRef<Mesh, BaseStarWithNameProps>(
  (
    {
      name,
      texturePath,
      position = [0, 0, 0],
      radius = 1,
      rotationSpeed = 0.002,
    },
    ref,
  ) => {
    const meshRef = useRef<Mesh>(null);

    // 外部 ref へ内部 mesh を公開
    useImperativeHandle(ref, () => meshRef.current as Mesh, []);

    // テクスチャ設定
    const texture = useLoader(TextureLoader, texturePath);
    texture.generateMipmaps = false;
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;

    // 自転アニメ
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += rotationSpeed;
      }
    });

    return (
      <mesh ref={meshRef} name={name} position={position}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial
          map={texture}
          metalness={0.3}
          roughness={0.8}
        />
      </mesh>
    );
  },
);

// displayNameを追加
BaseStarWithName.displayName = 'BaseStarWithName';
