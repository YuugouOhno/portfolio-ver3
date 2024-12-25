'use client';

import React from 'react';
import { BaseStar } from './BaseStar';

interface MoonProps {
    position?: [number, number, number];
}

export function Moon({position}:MoonProps) {
    return (
        <BaseStar
            texturePath="/textures/moonmap.png"
            position={position}
            radius={0.5}
            rotationSpeed={0.005} 
        />
    );
}