import { useThree } from '@react-three/fiber';
import { useEffect,useMemo } from 'react';
import * as THREE from 'three';
import { useScroll } from '../Context/ScrollContext';

function CameraController() {
    const { camera } = useThree();
    const { scrollY, windowHeight } = useScroll();

    /* ───────── B→C 用の 2 次 Bézier 曲線を 1 度だけ生成 ───────── */
  const bezierBC = useMemo(() => {
    const B = new THREE.Vector3(150, 150, 150);
    const D = new THREE.Vector3(0, -300, 0);       // 真下に落ちる
    const C = new THREE.Vector3(-150, 150, 150);
    return new THREE.QuadraticBezierCurve3(B, D, C);
  }, []);

    useEffect(() => {
    // 0〜1 : A→B、1〜2 : B→C
    const segment1 = Math.min(scrollY / windowHeight, 1);               // 0〜1
    const segment2 = Math.min(Math.max(scrollY - windowHeight, 0) / windowHeight, 1); // 0〜1

    if (scrollY < windowHeight) {
      /* ---------- A → B ---------- */
      const start = { x: 0, y: 60, z: 150 };
      const end   = { x: 150, y: 150, z: 150 };

      camera.position.set(
        start.x + segment1 * (end.x - start.x),
        start.y + segment1 * (end.y - start.y),
        start.z + segment1 * (end.z - start.z)
      );

      const lookStart = { x: 150, y: 0, z: 0 };
      const lookEnd   = { x: 0,   y: 0, z: 0 };

      camera.lookAt(
        lookStart.x + segment1 * (lookEnd.x - lookStart.x),
        lookStart.y + segment1 * (lookEnd.y - lookStart.y),
        lookStart.z + segment1 * (lookEnd.z - lookStart.z)
      );
    } else {
        /* ---------- B → C (270° 相当の大弧) ---------- */
        const pos = bezierBC.getPoint(segment2);   // 2 次 Bézier 曲線上の座標
        camera.position.copy(pos);
        camera.lookAt(0, 0, 0);                // 原点を見続ける
      }
  }, [camera, scrollY, windowHeight,bezierBC]);

    return null;
}

export { CameraController };
