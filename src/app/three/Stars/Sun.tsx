'use client';
import React from 'react';
import { BaseStar } from './BaseStar';

interface SunProps {
    position?: [number, number, number];
}

export function Sun({position}:SunProps) {
    return (
        <BaseStar
            texturePath="/textures/sunmap.png"
            position={position}
            radius={2}
            rotationSpeed={0.0005} 
        />
    );
}