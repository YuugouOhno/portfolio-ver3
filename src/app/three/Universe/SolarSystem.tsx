"use client"
import { Sun } from '../Stars/Sun';
import { Mercury } from '../Stars/Mercury';
import { Venus } from '../Stars/Venus';
import { Earth } from '../Stars/Earth';
import { Moon } from '../Stars/Moon';
import { Mars } from '../Stars/Mars';
import { Jupiter } from '../Stars/Jupiter';
import { Saturn } from '../Stars/Saturn';
import { Uranus } from '../Stars/Uranus';
import { Neptune } from '../Stars/Neptune';

import { OrbitalGroup } from './OrbitalGroup';

export function SolarSystem() {
    const earthObitSpeed = 0.01

    return (
        <>
        <OrbitalGroup position={[0, 0, 0]} rotationSpeed={0.0}>
            <Sun position={[0, 0, 0]} />

            {/*
                水星: 公転周期が約88日
                Earthの速度を 0.01 とした場合、相対的に (0.01 * (365 / 88)) などに設定
            */}
            <OrbitalGroup position={[0, 0, 0]} rotationSpeed={earthObitSpeed * (365 / 88)}>
                <Mercury position={[10, 0, 0]} />
            </OrbitalGroup>

            {/*
                金星: 公転周期が約225日
            */}
            <OrbitalGroup position={[0, 0, 0]} rotationSpeed={earthObitSpeed * (365 / 225)}>
                <Venus position={[15, 0, 0]} />
            </OrbitalGroup>

            {/*
                地球: 公転速度を 0.01 とし、太陽から5の距離に配置
                月: さらに地球から2の距離で公転。公転速度は地球の365倍
            */}
            <OrbitalGroup position={[0, 0, 0]} rotationSpeed={earthObitSpeed}>
                <Earth position={[20, 0, 0]} />
                <OrbitalGroup position={[20, 0, 0]} rotationSpeed={earthObitSpeed * (365 - 1)}>
                    <Moon position={[2, 0, 0]} />
                </OrbitalGroup>
            </OrbitalGroup>

            {/*
                火星: 公転周期が約687日
            */}
            <OrbitalGroup position={[0, 0, 0]} rotationSpeed={earthObitSpeed * (365 / 687)}>
                <Mars position={[30, 0, 0]} />
            </OrbitalGroup>

            {/* 木星: 公転周期 約4333日 */}
            <OrbitalGroup position={[0, 0, 0]} rotationSpeed={earthObitSpeed * (365 / 4333)}>
                <Jupiter position={[35, 0, 0]} />
            </OrbitalGroup>

            {/* 土星: 約10759日 */}
            <OrbitalGroup position={[0, 0, 0]} rotationSpeed={earthObitSpeed * (365 / 10759)}>
                <Saturn position={[40, 0, 0]} />
            </OrbitalGroup>

            {/* 天王星: 約30687日 */}
            <OrbitalGroup position={[0, 0, 0]} rotationSpeed={earthObitSpeed * (365 / 30687)}>
                <Uranus position={[45, 0, 0]} />
            </OrbitalGroup>

            {/* 海王星: 約60190日 */}
            <OrbitalGroup position={[0, 0, 0]} rotationSpeed={earthObitSpeed * (365 / 60190)}>
                <Neptune position={[50, 0, 0]} />
            </OrbitalGroup>

        </OrbitalGroup>
        </>
    );
}