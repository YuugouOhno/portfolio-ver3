'use client';

import React from 'react';
import { BaseStar } from './BaseStar';

interface MercuryProps {
    position?: [number, number, number];
    radius?:number;
    rotationSpeed?:number;
}

export function Mercury({position,radius, rotationSpeed}:MercuryProps) {
    return (
        <BaseStar
            texturePath="/textures/mercurymap.webp"
            position={position}
            radius={radius}
            rotationSpeed={rotationSpeed}
        />
    );
}
