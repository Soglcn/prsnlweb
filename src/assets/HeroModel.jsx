import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";

function Model() {
    const ref = useRef();
    const { scene } = useGLTF("/models/contallien.glb");

    useFrame((state) => {
        ref.current.rotation.y =
            Math.sin(state.clock.elapsedTime) * 0.12;
    });

    return (
        <primitive
            ref={ref}
            object={scene}
            scale={0.8}
            position={[0.35, 0, 0]}
        />
    );
}

function Background() {
    const texture = useTexture("/images/contallienbg.png");

    return (
        <mesh position={[0, 0, -5]}>
            <planeGeometry args={[5, 5]} />
            <meshBasicMaterial map={texture} />
        </mesh>
    );
}

function HeroModel() {
    return (
        <Canvas
            camera={{ position: [0, 0, 2], fov: 45 }}
            gl={{ alpha: true }}
            style={{ background: "transparent" }}
        >
            <directionalLight
                position={[0, 8, 3]}
                intensity={3}
                color="#c9a46a"
            />
            <ambientLight intensity={1} />
            <Model />
        </Canvas>
    );
}




export default HeroModel;