'use client';

import React from 'react';
import { BaseStar } from './BaseStar';

interface JupiterProps {
    position?: [number, number, number];
}

export function Jupiter({position}:JupiterProps) {
    return (
        <BaseStar
            texturePath="/textures/jupitermap.png"
            position={position}
            radius={11.2} // 木星の相対的なサイズ
            rotationSpeed={0.0005} // 自転速度（例）
        />
    );
}
