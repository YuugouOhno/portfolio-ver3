"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { config, useSpring, animated } from "@react-spring/three";

import { Mesh } from "three";

// Boxコンポーネントのプロップスの型定義
interface BoxProps {
    position?: [number, number, number];
}

const Box: React.FC<BoxProps> = (props) => {
    const ref = useRef<Mesh>(null); // useRefの型をMeshに指定

    const [clicked, setClicked] = useState<boolean>(false);
    const [hovered, setHovered] = useState<boolean>(false);
  
    useFrame(() => {
        if (ref.current) {
          ref.current.rotation.x += 0.01;
        }
      });
  
    const { scale } = useSpring({
      scale: clicked ? 2 : 1,
      config: config.wobbly,
    });
  
    return (
        <animated.mesh
        {...props}
        ref={ref}
        scale={scale}
        onClick={() => setClicked(!clicked)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </animated.mesh>
    );
  }

export default Box;