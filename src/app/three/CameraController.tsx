'use client';

import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMemo } from 'react';
import { useScroll } from '../Context/ScrollContext';

/* 汎用ユーティリティ ------------------------------------------------- */
const lerpV = (a: THREE.Vector3, b: THREE.Vector3, t: number) =>
  a.clone().lerp(b, t);
const ease  = (t: number) => THREE.MathUtils.smoothstep(t, 0, 1);

/* 型 ------------------------------------------------------------------ */
type SegmentCtx = {
  t: number;               // 0–1 区間進捗
  earth: THREE.Object3D | null;
  vh: number;
};
type Segment = {
  /** 区間開始*vh と長さ*vh */
  start: number;
  length: number;
  /** 目標位置を返す */
  pos: (ctx: SegmentCtx) => THREE.Vector3;
  /** 視線ターゲットを返す */
  look: (ctx: SegmentCtx) => THREE.Vector3;
  /** 追従係数 (0=即追従, 0.1=ヌルっと) */
  follow?: number;
  /** 角度追従係数 */
  slerp?: number;
};

/* 定数 ---------------------------------------------------------------- */
const A = new THREE.Vector3(0, 60, 150);
const B = new THREE.Vector3(150, 150, 150);
const OFFSET = new THREE.Vector3(0, 50, 150);
const ORIGIN = new THREE.Vector3(0, 0, 0);

/* メインコンポーネント ------------------------------------------------ */
export function CameraController() {
  const { camera, scene } = useThree();
  const { scrollY, windowHeight: vh } = useScroll();

  /* 一度だけ作ればいい計算を useMemo に寄せる */
  const bezierBC = useMemo(() => {
    const P = new THREE.Vector3(0, -300, 150);
    const C = new THREE.Vector3(-150, 150, 150);
    return new THREE.QuadraticBezierCurve3(B, P, C);
  }, []);
  const pointC = useMemo(() => bezierBC.getPoint(1), [bezierBC]);

  /* 区間テーブル ------------------------------------------------------ */
  const segments: Segment[] = [
    /* ---- A → B ---------------------------------------------------- */
    {
      start: 0,
      length: 1,
      pos: ({ t }) => lerpV(A, B, t),
      look: ({ t }) => new THREE.Vector3(150 - 150 * t, 0, 0),
    },
    /* ---- B → C ---------------------------------------------------- */
    {
      start: 1,
      length: 1,
      pos: ({ t }) => bezierBC.getPoint(t),
      look: () => ORIGIN.clone(),
    },
    /* ---- C → D (Earth 接近) -------------------------------------- */
    {
      start: 2,
      length: 1,
      pos: ({ t, earth }) =>
        earth
          ? lerpV(pointC, earth.position.clone().add(OFFSET), ease(t))
          : pointC.clone(),
      look: ({ t, earth }) =>
        earth ? lerpV(ORIGIN, earth.position, ease(t)) : ORIGIN.clone(),
    },
    /* ---- D → E (並走) -------------------------------------------- */
    {
      start: 3,
      length: Infinity, // 無限に続く
      pos: ({ earth }) =>
        earth ? earth.position.clone().add(OFFSET) : pointC.clone(),
      look: ({ earth }) => (earth ? earth.position.clone() : ORIGIN.clone()),
      follow: 0.1, // 位置追従をヌルっと
      slerp: 0.15, // 向き追従をヌルっと
    },
    /*  ←←   ここに新しい区間を足すだけで拡張可能   →→ */
  ];

  /* メインループ ----------------------------------------------------- */
  useFrame(() => {
    const earth = scene.getObjectByName('Earth') as THREE.Object3D | null;

    /* 今どの区間にいるか判定 */
    const seg = segments.find(
      ({ start, length }) =>
        scrollY >= start * vh && scrollY < (start + length) * vh,
    )!;

    /* その区間内での 0–1 進捗 */
    const t = THREE.MathUtils.clamp(
      (scrollY - seg.start * vh) / (seg.length * vh),
      0,
      1,
    );

    const ctx: SegmentCtx = { t, earth, vh };

    /* ---- 目標位置 & 視線を算出 ---- */
    const targetPos = seg.pos(ctx);
    const lookAtVec = seg.look(ctx);

    /* ---- カメラ移動 ---- */
    camera.position.lerp(
      targetPos,
      seg.follow !== undefined ? seg.follow : 1,
    );

    /* ---- カメラ向き ---- */
    const m = new THREE.Matrix4().lookAt(camera.position, lookAtVec, camera.up);
    const q = new THREE.Quaternion().setFromRotationMatrix(m);
    camera.quaternion.slerp(q, seg.slerp ?? 1);
  });

  return null;
}
