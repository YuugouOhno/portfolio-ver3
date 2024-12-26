"use client";

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

    // 各惑星の公転周期(日)
    const mercuryDays = 88;
    const venusDays = 225;
    const earthDays = 365; // 基準
    const marsDays = 687;
    const jupiterDays = 4333;
    const saturnDays = 10759;
    const uranusDays = 30687;
    const neptuneDays = 60190;

    // 惑星の軌道半径　AU
    const mercuryOrbitRadius = earthOrbitRadiusValue*0.39;
    const venusOrbitRadius = earthOrbitRadiusValue*0.72;
    const earthOrbitRadius = earthOrbitRadiusValue*1;
    const marsOrbitRadius = earthOrbitRadiusValue*1.52;
    const jupiterOrbitRadius = earthOrbitRadiusValue*1.7 //*5.2*0.3;
    const saturnOrbitRadius = earthOrbitRadiusValue*2 //*9.58*0.3;
    const uranusOrbitRadius = earthOrbitRadiusValue*2.25 //*19.22*0.2;
    const neptuneOrbitRadius = earthOrbitRadiusValue*2.5 //*30.05*0.2;

    // 惑星の半径 (地球=1基準, 実際の比率)
    const sunRadius = earthRadiusValue*109*0.25;          // 実際: 地球の約109倍 → 見やすく圧縮
    const mercuryRadius = earthRadiusValue*0.38;    // 実際: 地球の0.38倍
    const venusRadius = earthRadiusValue*0.95;      // 実際: 地球の0.95倍
    const earthRadius = earthRadiusValue*1;         // 地球基準
    const marsRadius = earthRadiusValue*0.53;       // 実際: 地球の0.53倍
    const jupiterRadius = earthRadiusValue*11.2;    // 実際: 地球の11.2倍
    const saturnRadius = earthRadiusValue*9.4;      // 実際: 地球の9.4倍
    const uranusRadius = earthRadiusValue*4.0;      // 実際: 地球の4.0倍
    const neptuneRadius = earthRadiusValue*3.9;     // 実際: 地球の3.9倍

    // 自転速度 (地球=1基準, 1日で1回転)
    const sunRot = 1 / 25;         // 実際: 太陽は25日で1回転
    const mercuryRot = 1 / 58.6;   // 実際: 水星は58.6日で1回転
    const venusRot = 1 / 243;      // 実際: 金星は243日で1回転
    const earthRot = 1;            // 地球基準 (1日で1回転)
    const marsRot = 1 / 1.03;      // 実際: 火星は1.03日で1回転
    const jupiterRot = 2.4;        // 実際: 木星は0.41日で1回転 (約2.4倍)
    const saturnRot = 2.3;         // 実際: 土星は0.44日で1回転
    const uranusRot = 1.4;         // 実際: 天王星は約0.72日で1回転 (正の値で調整)
    const neptuneRot = 1.5;        // 実際: 海王星は0.67日で1回転

    // 公転速度
    const mercuryOrbitSpeed = earthOrbitSpeed * (earthDays / mercuryDays);  // 水星: 88日で1公転
    const venusOrbitSpeed = earthOrbitSpeed * (earthDays / venusDays);   // 金星: 225日で1公転
    const marsOrbitSpeed = earthOrbitSpeed * (earthDays / marsDays);    // 火星: 687日で1公転
    const jupiterOrbitSpeed = earthOrbitSpeed * (earthDays / jupiterDays); // 木星: 4333日で1公転
    const saturnOrbitSpeed = earthOrbitSpeed * (earthDays / saturnDays); // 土星: 10759日で1公転
    const uranusOrbitSpeed = earthOrbitSpeed * (earthDays / uranusDays); // 天王星: 30687日で1公転
    const neptuneOrbitSpeed = earthOrbitSpeed * (earthDays / neptuneDays); // 海王星: 60190日で1公転     

    return (
        <OrbitalGroup position={[0, 0, 0]} rotationSpeed={0.0}>
            {/* 太陽 (大きめの半径15くらい / 自転速度0.03） */}
            <Sun
                position={[0, 0, 0]}
                radius={sunRadius}
                rotationSpeed={sunRot}
            />

            {/* 水星 */}
            <OrbitalGroup
                position={[0, 0, 0]}
                rotationSpeed={mercuryOrbitSpeed} // ~0.01*(365/88)
            >
                <Mercury
                position={[mercuryOrbitRadius, 0, 0]}
                radius={mercuryRadius}
                rotationSpeed={mercuryRot}
                />
            </OrbitalGroup>

            {/* 金星 */}
            <OrbitalGroup
                position={[0, 0, 0]}
                rotationSpeed={venusOrbitSpeed}
            >
                <Venus
                position={[venusOrbitRadius, 0, 0]}
                radius={venusRadius}
                rotationSpeed={venusRot}
                />
            </OrbitalGroup>

            {/* 地球 + 月 */}
            <OrbitalGroup
                position={[0, 0, 0]}
                rotationSpeed={earthOrbitSpeed} // 0.01
            >
                <Earth
                position={[earthOrbitRadius, 0, 0]}
                radius={earthRadius}
                rotationSpeed={earthRot}
                />
                {/* 月 → 地球の周りを公転: 地球の365倍速 */}
                <OrbitalGroup
                position={[earthOrbitRadius, 0, 0]}
                rotationSpeed={earthOrbitSpeed * (365 - 1)}
                >
                <Moon
                    position={[2, 0, 0]}
                    radius={0.27} 
                    rotationSpeed={1 / 27.3}
                />
                </OrbitalGroup>
            </OrbitalGroup>

            {/* 火星 */}
            <OrbitalGroup
                position={[0, 0, 0]}
                rotationSpeed={marsOrbitSpeed} // ~0.01*(365/687)
            >
                <Mars
                position={[marsOrbitRadius, 0, 0]}
                radius={marsRadius}
                rotationSpeed={marsRot}
                />
            </OrbitalGroup>

            {/* 木星 */}
            <OrbitalGroup
                position={[0, 0, 0]}
                rotationSpeed={jupiterOrbitSpeed}
            >
                <Jupiter
                position={[jupiterOrbitRadius, 0, 0]}
                radius={jupiterRadius}
                rotationSpeed={jupiterRot}
                />
            </OrbitalGroup>

            {/* 土星 */}
            <OrbitalGroup
                position={[0, 0, 0]}
                rotationSpeed={saturnOrbitSpeed}
            >
                <Saturn
                position={[saturnOrbitRadius, 0, 0]}
                radius={saturnRadius}
                rotationSpeed={saturnRot}
                />
            </OrbitalGroup>

            {/* 天王星 */}
            <OrbitalGroup
                position={[0, 0, 0]}
                rotationSpeed={uranusOrbitSpeed}
            >
                <Uranus
                position={[uranusOrbitRadius, 0, 0]}
                radius={uranusRadius}
                rotationSpeed={uranusRot}
                />
            </OrbitalGroup>

            {/* 海王星 */}
            <OrbitalGroup
                position={[0, 0, 0]}
                rotationSpeed={neptuneOrbitSpeed}
            >
                <Neptune
                position={[neptuneOrbitRadius, 0, 0]}
                radius={neptuneRadius}
                rotationSpeed={neptuneRot}
                />
            </OrbitalGroup>
        </OrbitalGroup>
    );
}