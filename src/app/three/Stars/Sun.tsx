'use client';
import React from 'react';
import { BaseStar } from './BaseStar';

interface SunProps {
    position?: [number, number, number];
    radius?:number;
    rotationSpeed?:number;
}

export function Sun({position,radius, rotationSpeed}:SunProps) {
    return (
        <BaseStar
            texturePath="/textures/sunmap.png"
            position={position}
            radius={radius}
            rotationSpeed={rotationSpeed}
        />
    );
}