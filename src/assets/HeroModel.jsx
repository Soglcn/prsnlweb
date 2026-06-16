import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";

function Model() {
    const ref = useRef();
    const { scene } = useGLTF("/models/daed.glb");

    const startRotation = -0.4;

    useFrame((state) => {
        ref.current.rotation.y =
            startRotation +
            Math.sin(state.clock.elapsedTime) * 0.25;
    });

    return (
        <primitive
            ref={ref}
            object={scene}
            scale={1.6}
            position={[0.25, 0, 0]}
        />
    );
}

function Background() {
    const texture = useTexture("/images/contallienbg.png");

    return (
        <mesh position={[0, 0, -6]}>
            <planeGeometry args={[5, 5]} />
            <meshBasicMaterial map={texture} />
        </mesh>
    );
}

function HeroModel() {
    return (
        <Canvas
            camera={{ position: [0, 0, 6], fov: 35 }}
            gl={{ alpha: true }}
            style={{ background: "transparent" }}
        >
            <directionalLight
                position={[0, 8, 3]}
                intensity={4}
                color="#fff5d8"
            />
            <ambientLight intensity={1} />
            <Model />
        </Canvas>
    );
}




export default HeroModel;