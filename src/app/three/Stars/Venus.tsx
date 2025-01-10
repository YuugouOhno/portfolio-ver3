'use client';

import React from 'react';
import { BaseStar } from './BaseStar';

interface VenusProps {
    position?: [number, number, number];
    radius?:number;
    rotationSpeed?:number;
}

export function Venus({position,radius, rotationSpeed}:VenusProps) {
    return (
        <BaseStar
            texturePath="/textures/venusmap.png"
            position={position}
            radius={radius}
            rotationSpeed={rotationSpeed}
        />
    );
}
