import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, ContactShadows, Float } from "@react-three/drei";
import * as THREE from "three";
import FloatingBuilding from "./FloatingBuilding";

interface MouseParallaxProps {
  children: React.ReactNode;
}

const MouseParallax = ({ children }: MouseParallaxProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!groupRef.current) return;
    const x = (state.pointer.x * viewport.width) / 50;
    const y = (state.pointer.y * viewport.height) / 50;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.08, 0.03);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.04, 0.03);
  });

  return <group ref={groupRef}>{children}</group>;
};

const GoldParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 60;

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      spd[i] = 0.2 + Math.random() * 0.5;
    }
    return [pos, spd];
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;
    const posArr = particlesRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      posArr[i * 3 + 1] += speeds[i] * 0.005;
      posArr[i * 3] += Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.001;
      if (posArr[i * 3 + 1] > 5) posArr[i * 3 + 1] = -5;
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#D4AF37" size={0.03} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

interface SceneContentProps {
  scrollProgress?: number;
}

const SceneContent = ({ scrollProgress = 0 }: SceneContentProps) => {
  const section = useMemo(() => {
    if (scrollProgress < 0.33) return 0;
    if (scrollProgress < 0.66) return 1;
    return 2;
  }, [Math.floor(scrollProgress * 3)]);

  const buildings = useMemo(() => {
    const configs = [
      [
        { pos: [-2.2, 0.3, -1.5] as [number, number, number], type: "tower" as const, scale: 0.75, phase: 0 },
        { pos: [1.8, 0, 0.5] as [number, number, number], type: "highrise" as const, scale: 0.65, phase: 1.5 },
        { pos: [0, 0.2, -2.5] as [number, number, number], type: "villa" as const, scale: 0.85, phase: 3 },
        { pos: [-0.8, -0.3, 1.5] as [number, number, number], type: "tower" as const, scale: 0.5, phase: 4.5 },
        { pos: [2.8, 0.5, -2] as [number, number, number], type: "villa" as const, scale: 0.45, phase: 6 },
      ],
      [
        { pos: [0, 0, 0] as [number, number, number], type: "villa" as const, scale: 1.3, phase: 0 },
        { pos: [-2.8, 0.2, -1.5] as [number, number, number], type: "villa" as const, scale: 0.55, phase: 2 },
        { pos: [2.8, 0.1, -1.5] as [number, number, number], type: "villa" as const, scale: 0.5, phase: 4 },
      ],
      [
        { pos: [0, 0, 0] as [number, number, number], type: "highrise" as const, scale: 1.1, phase: 0 },
        { pos: [-2.2, 0, -1] as [number, number, number], type: "highrise" as const, scale: 0.75, phase: 1.5 },
        { pos: [2.2, 0, -1] as [number, number, number], type: "highrise" as const, scale: 0.7, phase: 3 },
        { pos: [0, 0.3, -2.5] as [number, number, number], type: "tower" as const, scale: 0.45, phase: 5 },
      ],
    ];
    return configs[section];
  }, [section]);

  return (
    <MouseParallax>
      <ambientLight intensity={0.35} color="#FFF8F0" />
      <directionalLight position={[5, 10, 5]} intensity={1.4} color="#FFF5E0" castShadow shadow-mapSize={1024} />
      <directionalLight position={[-4, 6, -4]} intensity={0.25} color="#D4AF37" />
      <directionalLight position={[0, -3, 5]} intensity={0.1} color="#E8DCC8" />

      {buildings.map((b, i) => (
        <Float key={`${section}-${i}`} speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
          <FloatingBuilding
            position={b.pos}
            type={b.type}
            scale={b.scale}
            speed={0.6}
            phase={b.phase}
          />
        </Float>
      ))}

      <GoldParticles />
      <ContactShadows position={[0, -1.5, 0]} opacity={0.25} scale={12} blur={2.5} far={5} color="#8B7355" />
      <Environment preset="city" environmentIntensity={0.6} />
    </MouseParallax>
  );
};

interface SceneProps {
  scrollProgress?: number;
}

const Scene = ({ scrollProgress = 0 }: SceneProps) => {
  return (
    <Canvas
      camera={{ position: [0, 2, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.1 }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <SceneContent scrollProgress={scrollProgress} />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
