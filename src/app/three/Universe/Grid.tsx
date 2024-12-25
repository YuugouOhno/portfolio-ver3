'use client';

import React from 'react';
import { GridHelper } from 'three';
import { useThree } from '@react-three/fiber';

interface GridProps {
  size?: number;         // 格子全体のサイズ (デフォルト: 100)
  divisions?: number;    // マスの分割数 (デフォルト: 10)
  color?: string;        // 格子線の色 (デフォルト: 白)
  direction?: [boolean, boolean, boolean];
}

export function Grid({ size = 100, divisions = 10, color = 'white', direction = [true,false,false]}: GridProps) {
  const { scene } = useThree();

  React.useEffect(() => {
    // XZ平面のグリッド
    const gridHelperXZ = new GridHelper(size, divisions, "red", color);
    direction[0] && (
        scene.add(gridHelperXZ)
    );

    // XY平面のグリッド
    const gridHelperXY = new GridHelper(size, divisions, "red", color);
    gridHelperXY.rotateX(Math.PI / 2); // X軸回転でXY平面に配置
    direction[1] && (
        scene.add(gridHelperXY)
    );

    // YZ平面のグリッド
    const gridHelperYZ = new GridHelper(size, divisions, "red", color);
    gridHelperYZ.rotateZ(Math.PI / 2); // Z軸回転でYZ平面に配置
    direction[2] && (
        scene.add(gridHelperYZ)
    );

    // アンマウント時に削除
    return () => {
      scene.remove(gridHelperXZ);
      scene.remove(gridHelperXY);
      scene.remove(gridHelperYZ);
    };
  }, [size, divisions, color, scene]);

  return null;
}