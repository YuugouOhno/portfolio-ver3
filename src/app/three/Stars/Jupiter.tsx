'use client';

import React from 'react';
import { BaseStar } from './BaseStar';

interface JupiterProps {
    position?: [number, number, number];
    radius?:number;
    rotationSpeed?:number;
}

export function Jupiter({position,radius, rotationSpeed}:JupiterProps) {
    return (
        <BaseStar
            texturePath="/textures/jupitermap.webp"
            position={position}
            radius={radius}
            rotationSpeed={rotationSpeed}
        />
    );
}
