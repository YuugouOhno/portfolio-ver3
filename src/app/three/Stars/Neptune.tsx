'use client';

import React from 'react';
import { BaseStar } from './BaseStar';

interface NeptuneProps {
    position?: [number, number, number];
}

export function Neptune({position}:NeptuneProps) {
    return (
        <BaseStar
            texturePath="/textures/neptunemap.png"
            position={position}
            radius={3.9} // 海王星の相対的なサイズ
            rotationSpeed={0.0008} // 自転速度（例）
        />
    );
}
