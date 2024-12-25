"use client"
import { Earth } from '../Stars/Earth';
import { Sun } from '../Stars/Sun';
import { Moon } from '../Stars/Moon';
import { OrbitalGroup } from './OrbitalGroup';

export function SolarSystem() {
    return (
        <>
        <OrbitalGroup position={[0, 0, 0]} rotationSpeed={0.0} updown={true}>
            <Sun position={[0, 0, 0]} />
            <OrbitalGroup position={[0, 0, 0]} rotationSpeed={0.01}>
                <Earth position={[5, 0, 0]} />
                <OrbitalGroup position={[5, 0, 0]} rotationSpeed={0.01 * (365 - 1)}>
                    <Moon position={[2, 0, 0]} />
                </OrbitalGroup>
            </OrbitalGroup>
        </OrbitalGroup>
        </>
    );
}