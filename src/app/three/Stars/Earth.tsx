'use client';

import React from 'react';
import { BaseStar } from './BaseStar';

interface EarthProps {
    position?: [number, number, number];
    radius?:number;
    rotationSpeed?:number;
}

export function Earth({position,radius, rotationSpeed}:EarthProps) {
    return (
        <BaseStar
            texturePath="/textures/earthmap.png"
            position={position}
            radius={radius}
            rotationSpeed={rotationSpeed}
        />
    );
}