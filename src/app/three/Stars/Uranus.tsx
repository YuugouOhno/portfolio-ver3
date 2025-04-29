'use client';

import React from 'react';
import { BaseStar } from './BaseStar';

interface UranusProps {
    position?: [number, number, number];
    radius?:number;
    rotationSpeed?:number;
}

export function Uranus({position,radius, rotationSpeed}:UranusProps) {
    return (
        <BaseStar
            texturePath="/textures/uranusmap.webp"
            position={position}
            radius={radius}
            rotationSpeed={rotationSpeed}
        />
    );
}
