'use client';

import React from 'react';
import { BaseStar } from './BaseStar';

interface MoonProps {
    position?: [number, number, number];
    radius?:number;
    rotationSpeed?:number;
}

export function Moon({position,radius, rotationSpeed}:MoonProps) {
    return (
        <BaseStar
            texturePath="/textures/moonmap.png"
            position={position}
            radius={radius}
            rotationSpeed={rotationSpeed}
        />
    );
}