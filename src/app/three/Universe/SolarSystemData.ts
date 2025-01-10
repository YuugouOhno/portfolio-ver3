interface PlanetaryDataProps {
    earthOrbitSpeed: number;
    earthOrbitRadiusValue: number;
    earthRadiusValue: number;
}

export const PLANETARY_DATA = ({ earthOrbitSpeed, earthOrbitRadiusValue, earthRadiusValue }: PlanetaryDataProps) => {
    const days = {
        mercury: 88,
        venus: 225,
        earth: 365,
        mars: 687,
        jupiter: 4333,
        saturn: 10759,
        uranus: 30687,
        neptune: 60190,
        moon: 27.3, // 月の公転周期
    };

    return {
        earthOrbitSpeed,
        earthOrbitRadiusValue,
        earthRadiusValue,
        days,
        orbitRadius: {
            mercury: earthOrbitRadiusValue * 0.39,
            venus: earthOrbitRadiusValue * 0.72,
            earth: earthOrbitRadiusValue,
            mars: earthOrbitRadiusValue * 1.52,
            jupiter: earthOrbitRadiusValue * 1.7,
            saturn: earthOrbitRadiusValue * 2,
            uranus: earthOrbitRadiusValue * 2.25,
            neptune: earthOrbitRadiusValue * 2.5,
            moon: 2, // 地球と月の距離（仮設定）
        },
        radii: {
            sun: earthRadiusValue * 109 * 0.25,
            mercury: earthRadiusValue * 0.38,
            venus: earthRadiusValue * 0.95,
            earth: earthRadiusValue,
            mars: earthRadiusValue * 0.53,
            jupiter: earthRadiusValue * 11.2,
            saturn: earthRadiusValue * 9.4,
            uranus: earthRadiusValue * 4.0,
            neptune: earthRadiusValue * 3.9,
            moon: earthRadiusValue * 0.27, // 月の半径
        },
        rotationSpeed: {
            sun: 1 / 25,
            mercury: 1 / 58.6,
            venus: 1 / 243,
            earth: 1,
            mars: 1 / 1.03,
            jupiter: 2.4,
            saturn: 2.3,
            uranus: 1.4,
            neptune: 1.5,
            moon: 1 / 27.3, // 月の自転速度
        },
        orbitSpeeds: {
            mercury: earthOrbitSpeed * (days.earth / days.mercury),
            venus: earthOrbitSpeed * (days.earth / days.venus),
            earth: earthOrbitSpeed,
            mars: earthOrbitSpeed * (days.earth / days.mars),
            jupiter: earthOrbitSpeed * (days.earth / days.jupiter),
            saturn: earthOrbitSpeed * (days.earth / days.saturn),
            uranus: earthOrbitSpeed * (days.earth / days.uranus),
            neptune: earthOrbitSpeed * (days.earth / days.neptune),
            moon: earthOrbitSpeed * (days.earth / days.moon), // 月の公転速度
        },
    };
};
