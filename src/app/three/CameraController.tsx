import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { useScroll } from '../Context/ScrollContext';

function CameraController() {
    const { camera } = useThree();
    const { scrollY, windowHeight } = useScroll();

    useEffect(() => {
        console.log("画面のスクロール状況",scrollY)
        console.log("画面のsize",windowHeight)
        const progress = Math.min(scrollY / windowHeight, 1);

        const start = { x: 0, y: 60, z: 150 };
        const end = { x: 50, y: 50, z: 50 };

        camera.position.set(
            start.x + progress * (end.x - start.x),
            start.y + progress * (end.y - start.y),
            start.z + progress * (end.z - start.z)
        );

        const lookStart = { x:150 , y: 0, z: 0 };
        const lookEnd = { x: 2, y: 0, z: 0 };

        camera.lookAt(
            lookStart.x + progress * (lookEnd.x - lookStart.x),
            lookStart.y + progress * (lookEnd.y - lookStart.y),
            lookStart.z + progress * (lookEnd.z - lookStart.z)
        );
    }, [camera, scrollY, windowHeight]);

    return null;
}

export { CameraController };
