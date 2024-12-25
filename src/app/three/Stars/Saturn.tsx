'use client';

import React from 'react';
import { BaseStar } from './BaseStar';

interface SaturnProps {
    position?: [number, number, number];
}

export function Saturn({position}:SaturnProps) {
    return (
        <BaseStar
            texturePath="/textures/saturnmap.png"
            position={position}
            radius={9.5} // 土星の相対的なサイズ
            rotationSpeed={0.0006} // 自転速度（例）
        />
    );
}
