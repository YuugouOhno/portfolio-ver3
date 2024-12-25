'use client';

import React from 'react';
import { BaseStar } from './BaseStar';

interface VenusProps {
    position?: [number, number, number];
}

export function Venus({position}:VenusProps) {
    return (
        <BaseStar
            texturePath="/textures/venusmap.png"
            position={position}
            radius={0.95} // 金星の相対的なサイズ
            rotationSpeed={0.002} // 自転速度（例）
        />
    );
}
