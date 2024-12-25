"use client"
import { Earth } from '../Stars/Earth';
import { Sun } from '../Stars/Sun';
import { Moon } from '../Stars/Moon';
import { OrbitalGroup } from './OrbitalGroup';

export function SolarSystem() {
    return (
        <OrbitalGroup position={[0, 0, 0]} rotationSpeed={0.01}>
            <Sun position={[0, 0, 0]} />
            {/* 月を地球の周りに公転させる */}
            <OrbitalGroup position={[50, 0, 0]} rotationSpeed={0.01*(365-1)}>
                <Earth position={[0, 0, 0]} />
                <Moon position={[2, 0, 0]} />
            </OrbitalGroup>
        </OrbitalGroup>
    );
}