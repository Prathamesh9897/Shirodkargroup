import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingBuildingProps {
  position: [number, number, number];
  scale?: number;
  type?: "tower" | "villa" | "highrise";
  speed?: number;
  phase?: number;
}

const FloatingBuilding = ({ position, scale = 1, type = "tower", speed = 1, phase = 0 }: FloatingBuildingProps) => {
  const groupRef = useRef<THREE.Group>(null);

  const goldMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#D4AF37"),
    metalness: 0.85,
    roughness: 0.15,
    envMapIntensity: 1.5,
  }), []);

  const whiteMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#FAF7F2"),
    metalness: 0.05,
    roughness: 0.6,
    envMapIntensity: 0.8,
  }), []);

  const glassMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#C8DDE8"),
    metalness: 0.1,
    roughness: 0.05,
    transmission: 0.6,
    thickness: 0.5,
    transparent: true,
    opacity: 0.75,
    envMapIntensity: 2,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  }), []);

  const concreteMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#E8E2D8"),
    metalness: 0.0,
    roughness: 0.8,
    envMapIntensity: 0.5,
  }), []);

  const darkMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#2C2C2C"),
    metalness: 0.3,
    roughness: 0.4,
  }), []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime * speed + phase;
    groupRef.current.position.y = position[1] + Math.sin(t * 0.4) * 0.2;
    groupRef.current.rotation.y += 0.001;
  });

  const renderBuilding = () => {
    switch (type) {
      case "villa":
        return (
          <>
            {/* Main body */}
            <mesh material={whiteMaterial} position={[0, 0.5, 0]}>
              <boxGeometry args={[2, 1, 1.6]} />
            </mesh>
            {/* Second floor */}
            <mesh material={whiteMaterial} position={[0.3, 1.3, 0]}>
              <boxGeometry args={[1.4, 0.6, 1.4]} />
            </mesh>
            {/* Roof */}
            <mesh material={concreteMaterial} position={[0, 1.15, 0]}>
              <boxGeometry args={[2.2, 0.06, 1.8]} />
            </mesh>
            <mesh material={concreteMaterial} position={[0.3, 1.65, 0]}>
              <boxGeometry args={[1.6, 0.06, 1.6]} />
            </mesh>
            {/* Windows ground floor */}
            {[-0.5, 0.1, 0.7].map((x) => (
              <mesh key={x} material={glassMaterial} position={[x, 0.5, 0.81]}>
                <boxGeometry args={[0.35, 0.55, 0.02]} />
              </mesh>
            ))}
            {/* Window second floor */}
            <mesh material={glassMaterial} position={[0.3, 1.3, 0.71]}>
              <boxGeometry args={[0.8, 0.4, 0.02]} />
            </mesh>
            {/* Gold trim accents */}
            <mesh material={goldMaterial} position={[0, 1.18, 0.9]}>
              <boxGeometry args={[2.2, 0.02, 0.02]} />
            </mesh>
            <mesh material={goldMaterial} position={[0, 0, 0.81]}>
              <boxGeometry args={[2, 0.02, 0.02]} />
            </mesh>
            {/* Entrance */}
            <mesh material={darkMaterial} position={[-0.5, 0.2, 0.81]}>
              <boxGeometry args={[0.35, 0.4, 0.02]} />
            </mesh>
            {/* Pool area */}
            <mesh material={glassMaterial} position={[0, 0.01, 1.2]}>
              <boxGeometry args={[1.4, 0.02, 0.5]} />
            </mesh>
            {/* Columns */}
            {[-0.9, 0.9].map((x) => (
              <mesh key={x} material={goldMaterial} position={[x, 0.55, 0.85]}>
                <cylinderGeometry args={[0.03, 0.03, 1.1, 8]} />
              </mesh>
            ))}
          </>
        );
      case "highrise":
        return (
          <>
            {/* Base */}
            <mesh material={concreteMaterial} position={[0, 0.15, 0]}>
              <boxGeometry args={[1.4, 0.3, 1.4]} />
            </mesh>
            {/* Main tower */}
            <mesh material={whiteMaterial} position={[0, 2, 0]}>
              <boxGeometry args={[0.9, 3.4, 0.9]} />
            </mesh>
            {/* Glass curtain wall */}
            <mesh material={glassMaterial} position={[0, 2, 0.46]}>
              <boxGeometry args={[0.85, 3.3, 0.02]} />
            </mesh>
            <mesh material={glassMaterial} position={[0.46, 2, 0]}>
              <boxGeometry args={[0.02, 3.3, 0.85]} />
            </mesh>
            {/* Floor lines */}
            {[0.6, 1.1, 1.6, 2.1, 2.6, 3.1].map((y) => (
              <mesh key={y} material={goldMaterial} position={[0, y, 0.47]}>
                <boxGeometry args={[0.88, 0.015, 0.01]} />
              </mesh>
            ))}
            {/* Crown */}
            <mesh material={goldMaterial} position={[0, 3.75, 0]}>
              <boxGeometry args={[1, 0.08, 1]} />
            </mesh>
            <mesh material={goldMaterial} position={[0, 3.85, 0]}>
              <boxGeometry args={[0.6, 0.06, 0.6]} />
            </mesh>
            {/* Antenna */}
            <mesh material={goldMaterial} position={[0, 4.15, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.5, 6]} />
            </mesh>
            <mesh material={goldMaterial} position={[0, 4.42, 0]}>
              <sphereGeometry args={[0.04, 8, 8]} />
            </mesh>
            {/* Canopy */}
            <mesh material={darkMaterial} position={[0, 0.32, 0.9]}>
              <boxGeometry args={[0.8, 0.04, 0.5]} />
            </mesh>
          </>
        );
      default: // tower
        return (
          <>
            {/* Foundation */}
            <mesh material={concreteMaterial} position={[0, 0.1, 0]}>
              <boxGeometry args={[1.6, 0.2, 1.6]} />
            </mesh>
            {/* Main body */}
            <mesh material={whiteMaterial} position={[0, 1.2, 0]}>
              <boxGeometry args={[1.2, 2, 1.2]} />
            </mesh>
            {/* Setback upper */}
            <mesh material={whiteMaterial} position={[0, 2.6, 0]}>
              <boxGeometry args={[0.9, 0.8, 0.9]} />
            </mesh>
            {/* Crown molding */}
            <mesh material={goldMaterial} position={[0, 2.25, 0]}>
              <boxGeometry args={[1.3, 0.06, 1.3]} />
            </mesh>
            <mesh material={goldMaterial} position={[0, 3.05, 0]}>
              <boxGeometry args={[1, 0.06, 1]} />
            </mesh>
            {/* Windows - front */}
            {[0.6, 1.1, 1.6].map((y) => (
              <mesh key={`f${y}`} material={glassMaterial} position={[0, y, 0.61]}>
                <boxGeometry args={[0.75, 0.35, 0.02]} />
              </mesh>
            ))}
            {/* Upper window */}
            <mesh material={glassMaterial} position={[0, 2.6, 0.46]}>
              <boxGeometry args={[0.55, 0.5, 0.02]} />
            </mesh>
            {/* Spire */}
            <mesh material={goldMaterial} position={[0, 3.35, 0]}>
              <cylinderGeometry args={[0.04, 0.06, 0.5, 8]} />
            </mesh>
            <mesh material={goldMaterial} position={[0, 3.65, 0]}>
              <sphereGeometry args={[0.06, 12, 12]} />
            </mesh>
            {/* Side pillars */}
            {[-0.55, 0.55].map((x) => (
              <mesh key={x} material={goldMaterial} position={[x, 1.2, 0.61]}>
                <boxGeometry args={[0.04, 2, 0.04]} />
              </mesh>
            ))}
          </>
        );
    }
  };

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {renderBuilding()}
    </group>
  );
};

export default FloatingBuilding;
