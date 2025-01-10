"use client";
import { PLANETARY_DATA } from './SolarSystemData';

import { Sun } from "../Stars/Sun";
import { Mercury } from "../Stars/Mercury";
import { Venus } from "../Stars/Venus";
import { Earth } from "../Stars/Earth";
import { Moon } from "../Stars/Moon";
import { Mars } from "../Stars/Mars";
import { Jupiter } from "../Stars/Jupiter";
import { Saturn } from "../Stars/Saturn";
import { Uranus } from "../Stars/Uranus";
import { Neptune } from "../Stars/Neptune";
import { OrbitalGroup } from "./OrbitalGroup";

export function SolarSystem() {
    const earthOrbitSpeed = 0.01;  // 地球の公転速度基準
    const earthOrbitRadiusValue = 300 // 地球と太陽の距離
    const earthRadiusValue  = 2 // 地球の半径

    const planetaryData = PLANETARY_DATA({earthOrbitSpeed, earthOrbitRadiusValue, earthRadiusValue});

    return (
        <OrbitalGroup position={[0, 0, 0]} rotationSpeed={0.0}>
            {/* 太陽 */}
            <Sun
                position={[0, 0, 0]}
                radius={planetaryData.radii.sun}
                rotationSpeed={planetaryData.rotationSpeed.sun}
            />

            {/* 水星 */}
            <OrbitalGroup
                position={[0, 0, 0]}
                rotationSpeed={planetaryData.orbitSpeeds.mercury}
            >
                <Mercury
                    position={[planetaryData.orbitRadius.mercury, 0, 0]}
                    radius={planetaryData.radii.mercury}
                    rotationSpeed={planetaryData.rotationSpeed.mercury}
                />
            </OrbitalGroup>

            {/* 金星 */}
            <OrbitalGroup
                position={[0, 0, 0]}
                rotationSpeed={planetaryData.orbitSpeeds.venus}
            >
                <Venus
                    position={[planetaryData.orbitRadius.venus, 0, 0]}
                    radius={planetaryData.radii.venus}
                    rotationSpeed={planetaryData.rotationSpeed.venus}
                />
            </OrbitalGroup>

            {/* 地球 + 月 */}
            <OrbitalGroup
                position={[0, 0, 0]}
                rotationSpeed={planetaryData.orbitSpeeds.earth}
            >
                <Earth
                    position={[planetaryData.orbitRadius.earth, 0, 0]}
                    radius={planetaryData.radii.earth}
                    rotationSpeed={planetaryData.rotationSpeed.earth}
                />
                {/* 月 */}
                <OrbitalGroup
                    position={[planetaryData.orbitRadius.earth, 0, 0]}
                    rotationSpeed={planetaryData.orbitSpeeds.moon}
                >
                    <Moon
                        position={[planetaryData.orbitRadius.moon, 0, 0]}
                        radius={planetaryData.radii.moon}
                        rotationSpeed={planetaryData.rotationSpeed.moon}
                    />
                </OrbitalGroup>
            </OrbitalGroup>

            {/* 火星 */}
            <OrbitalGroup
                position={[0, 0, 0]}
                rotationSpeed={planetaryData.orbitSpeeds.mars}
            >
                <Mars
                    position={[planetaryData.orbitRadius.mars, 0, 0]}
                    radius={planetaryData.radii.mars}
                    rotationSpeed={planetaryData.rotationSpeed.mars}
                />
            </OrbitalGroup>

            {/* 木星 */}
            <OrbitalGroup
                position={[0, 0, 0]}
                rotationSpeed={planetaryData.orbitSpeeds.jupiter}
            >
                <Jupiter
                    position={[planetaryData.orbitRadius.jupiter, 0, 0]}
                    radius={planetaryData.radii.jupiter}
                    rotationSpeed={planetaryData.rotationSpeed.jupiter}
                />
            </OrbitalGroup>

            {/* 土星 */}
            <OrbitalGroup
                position={[0, 0, 0]}
                rotationSpeed={planetaryData.orbitSpeeds.saturn}
            >
                <Saturn
                    position={[planetaryData.orbitRadius.saturn, 0, 0]}
                    radius={planetaryData.radii.saturn}
                    rotationSpeed={planetaryData.rotationSpeed.saturn}
                />
            </OrbitalGroup>

            {/* 天王星 */}
            <OrbitalGroup
                position={[0, 0, 0]}
                rotationSpeed={planetaryData.orbitSpeeds.uranus}
            >
                <Uranus
                    position={[planetaryData.orbitRadius.uranus, 0, 0]}
                    radius={planetaryData.radii.uranus}
                    rotationSpeed={planetaryData.rotationSpeed.uranus}
                />
            </OrbitalGroup>

            {/* 海王星 */}
            <OrbitalGroup
                position={[0, 0, 0]}
                rotationSpeed={planetaryData.orbitSpeeds.neptune}
            >
                <Neptune
                    position={[planetaryData.orbitRadius.neptune, 0, 0]}
                    radius={planetaryData.radii.neptune}
                    rotationSpeed={planetaryData.rotationSpeed.neptune}
                />
            </OrbitalGroup>
        </OrbitalGroup>
    );
}