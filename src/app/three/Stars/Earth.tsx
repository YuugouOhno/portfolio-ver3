'use client';

import React from 'react';
import { BaseStarWithName } from './BaseStarWithName';

interface EarthProps {
    position?: [number, number, number];
    radius?:number;
    rotationSpeed?:number;
}

export function Earth({position,radius, rotationSpeed}:EarthProps) {
    return (
        <BaseStarWithName
            name="Earth" 
            texturePath="/textures/earthmap.webp"
            position={position}
            radius={radius}
            rotationSpeed={rotationSpeed}
        />
    );
}