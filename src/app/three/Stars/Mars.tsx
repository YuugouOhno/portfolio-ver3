'use client';

import React from 'react';
import { BaseStar } from './BaseStar';

interface MarsProps {
    position?: [number, number, number];
    radius?:number;
    rotationSpeed?:number;
}

export function Mars({position,radius, rotationSpeed}:MarsProps) {
    return (
        <BaseStar
            texturePath="/textures/marsmap.png"
            position={position}
            radius={radius}
            rotationSpeed={rotationSpeed}
        />
    );
}
