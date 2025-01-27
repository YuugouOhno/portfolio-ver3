'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { useTimeSpeed } from '../../Context/TimeSpeedContext';

interface OrbitalGroupProps {
  children: React.ReactNode;
  rotationSpeed?: number; // 公転速度
  position?: [number, number, number]; // グループの初期位置
  updown?: boolean;
}

export function OrbitalGroup({ children, rotationSpeed = 0.01, position = [0, 0, 0] }: OrbitalGroupProps) {
  const groupRef = useRef<Group>(null);
  const { timeSpeed } = useTimeSpeed(); // Context から時間スピードを取得

  // 公転のアニメーション
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed * timeSpeed; // Y軸を中心に回転
    }
  });

  return <group ref={groupRef} position={position}>{children}</group>;
}
