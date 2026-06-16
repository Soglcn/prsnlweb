import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";

function Model() {
    const ref = useRef();
    const [isHovered, setIsHovered] = useState(false);

    const { scene } = useGLTF("/models/meow.glb");

    useFrame((state) => {
        if (!ref.current || isHovered) return;

        ref.current.rotation.y =
            Math.sin(state.clock.elapsedTime) * -0.15;
    });

    return (
        <primitive
            ref={ref}
            object={scene}
            scale={2.5}
            position={[0, -1, -3.25]}
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
        />
    );
}

function meowModel() {
    return (
        <Canvas
            camera={{ position: [0, 0, 0], fov: 45 }}
            gl={{ alpha: true }}
            style={{ background: "transparent" }}
        >
            <directionalLight
                position={[0, 8, 3]}
                intensity={3}
                color="#f6e8d0"
            />

            <ambientLight intensity={1} />

            <Model />
        </Canvas>
    );
}

useGLTF.preload("/models/meow.glb");

export default meowModel;