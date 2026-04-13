import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, Float } from "@react-three/drei";
import * as THREE from "three";
import ResidentialCity from "./ResidentialCity";

interface SceneContentProps {
  scrollProgress?: number;
}

const AnimatedCity = ({ scrollProgress = 0 }: SceneContentProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const internalGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current || !internalGroupRef.current) return;

    // t is 0 at top, 1 at bottom
    const t = scrollProgress;

    // 1. CONTINUOUS IDLE ROTATION
    const idleRotation = state.clock.elapsedTime * 0.1;
    
    // 2. SCROLL-BASED ROTATION
    // Rotate the city as we scroll
    const scrollRotation = t * Math.PI * 1.2;
    groupRef.current.rotation.y = idleRotation + scrollRotation;

    // 3. SCROLL-BASED POSITION (Upward & Sideways)
    // As we scroll down, the city moves 'up' and 'sideways' to reveal different areas
    const targetY = t * 12;
    const targetX = t * -8;
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.08);
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.08);

    // 4. SCROLL-BASED CAMERA DEPTH (Simulate camera movement)
    // Using a simple zoom effect by moving the internal group closer
    const targetZ = t * 10;
    internalGroupRef.current.position.z = THREE.MathUtils.lerp(internalGroupRef.current.position.z, targetZ, 0.08);

    // Subtle floating idle
    const floatY = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    groupRef.current.position.y += floatY * 0.01;
  });

  return (
    <group ref={groupRef}>
      <group ref={internalGroupRef}>
        <ResidentialCity />
      </group>
      
      <ambientLight intensity={1.5} color="#FFF8F0" />
      <directionalLight position={[20, 30, 20]} intensity={3.0} color="#FFF5E0" castShadow shadow-mapSize={2048} />
      <directionalLight position={[-20, 10, -10]} intensity={1.5} color="#D4AF37" />
      <spotLight position={[0, 50, 0]} intensity={2.0} angle={0.5} penumbra={1} castShadow />
      
      <ContactShadows position={[0, -12, 0]} opacity={0.6} scale={100} blur={2.5} far={40} color="#8B7355" />
    </group>
  );
};

interface SceneProps {
  scrollProgress?: number;
}

const Scene = ({ scrollProgress = 0 }: SceneProps) => {
  return (
    <Canvas
      camera={{ position: [0, 2, 22], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent", pointerEvents: "auto" }}
    >
      <Suspense fallback={null}>
        <AnimatedCity scrollProgress={scrollProgress} />
        <Environment preset="city" environmentIntensity={1.2} />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
