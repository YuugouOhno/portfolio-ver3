'use client';

import React from 'react';
import { BaseStar } from './BaseStar';

interface SaturnProps {
    position?: [number, number, number];
    radius?:number;
    rotationSpeed?:number;
}

export function Saturn({position,radius, rotationSpeed}:SaturnProps) {
    return (
        <BaseStar
            texturePath="/textures/saturnmap.png"
            position={position}
            radius={radius}
            rotationSpeed={rotationSpeed}
        />
    );
}
