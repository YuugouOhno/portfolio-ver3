'use client';

import React from 'react';
import { BaseStar } from './BaseStar';

interface MercuryProps {
    position?: [number, number, number];
}

export function Mercury({position}:MercuryProps) {
    return (
        <BaseStar
            texturePath="/textures/mercurymap.png"
            position={position}
            radius={0.38} // 水星の相対的なサイズ
            rotationSpeed={0.004} // 自転速度（例）
        />
    );
}
