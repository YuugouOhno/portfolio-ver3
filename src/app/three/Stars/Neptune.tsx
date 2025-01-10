'use client';

import React from 'react';
import { BaseStar } from './BaseStar';

interface NeptuneProps {
    position?: [number, number, number];
    radius?:number;
    rotationSpeed?:number;
}

export function Neptune({position,radius, rotationSpeed}:NeptuneProps) {
    return (
        <BaseStar
            texturePath="/textures/neptunemap.png"
            position={position}
            radius={radius}
            rotationSpeed={rotationSpeed}
        />
    );
}
