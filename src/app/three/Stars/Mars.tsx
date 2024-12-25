'use client';

import React from 'react';
import { BaseStar } from './BaseStar';

interface MarsProps {
    position?: [number, number, number];
}

export function Mars({position}:MarsProps) {
    return (
        <BaseStar
            texturePath="/textures/marsmap.png"
            position={position}
            radius={0.53} // 火星の相対的なサイズ
            rotationSpeed={0.001} // 自転速度（例）
        />
    );
}
