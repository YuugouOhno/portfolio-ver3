'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Group } from 'three';
import { useTimeSpeed } from '../../Context/TimeSpeedContext';

interface OrbitalGroupProps {
  children: React.ReactNode;
  rotationSpeed?: number; // 公転速度
  position?: [number, number, number]; // グループの初期位置
  updown?: boolean;
}

export function OrbitalGroup({ children, rotationSpeed = 0.01, position = [0, 0, 0], updown = false }: OrbitalGroupProps) {
  const groupRef = useRef<Group>(null);
  const { timeSpeed } = useTimeSpeed(); // Context から時間スピードを取得

  // 公転のアニメーション
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed * timeSpeed; // Y軸を中心に回転
    }
  });

  const sunRef = useRef<Mesh>(null);
  const angleRef = useRef(0);

  if (updown) {
    useFrame((state, delta) => {
        if (sunRef.current) {
          // 角度を更新 (速度は任意で調整してください)
          angleRef.current += 0.5 * delta;
    
          // 半径5で (0, y, z) 平面上を円運動
          const radius = 5;
          const y = radius * Math.cos(angleRef.current);
          const x = radius * Math.sin(angleRef.current);
    
          // Sunの position は (x=0, y, z) に
          sunRef.current.position.set(x, y, 0);
        }
    });
  }

  return <group ref={updown ?sunRef:groupRef} position={position}>{children}</group>;
}
