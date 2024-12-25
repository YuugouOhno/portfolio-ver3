'use client';

import React from 'react';
import { BaseStar } from './BaseStar';

interface EarthProps {
    position?: [number, number, number];
}

export function Earth({position}:EarthProps) {
    return (
        <BaseStar
            texturePath="/textures/earthmap.png"
            position={position}
            radius={1}
            rotationSpeed={0.002} 
        />
    );
}