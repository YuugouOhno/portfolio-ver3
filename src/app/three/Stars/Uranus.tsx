'use client';

import React from 'react';
import { BaseStar } from './BaseStar';

interface UranusProps {
    position?: [number, number, number];
}

export function Uranus({position}:UranusProps) {
    return (
        <BaseStar
            texturePath="/textures/uranusmap.png"
            position={position}
            radius={4.0} // 天王星の相対的なサイズ
            rotationSpeed={0.0007} // 自転速度（例）
        />
    );
}
