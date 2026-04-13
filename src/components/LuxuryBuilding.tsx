import { useRef, useMemo } from "react";
import * as THREE from "three";

export default function LuxuryBuilding() {
  const groupRef = useRef<THREE.Group>(null);

  const goldMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#D4AF37"),
    metalness: 0.8,
    roughness: 0.2,
    envMapIntensity: 2.0,
  }), []);

  const whiteMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#FAF7F2"), // Warm white
    metalness: 0.05,
    roughness: 0.7,
  }), []);

  const beigeMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#E8E2D8"), // Beige
    metalness: 0.1,
    roughness: 0.8,
  }), []);

  const glassMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#A8D8E8"),
    metalness: 0.2,
    roughness: 0.05,
    transmission: 0.95,
    ior: 1.5,
    thickness: 0.5,
    transparent: true,
    opacity: 0.7,
    envMapIntensity: 3.5,
    clearcoat: 1.0,
  }), []);

  const floors = 24;
  const floorHeight = 1.0;
  const buildingWidth = 6;
  const buildingDepth = 4;

  return (
    <group ref={groupRef} position={[0, -floors * floorHeight / 2, 0]}>
      {/* Podium / Lobby Base (Mumbai style) */}
      <mesh material={beigeMaterial} position={[0, floorHeight * 1.5, 0]} castShadow>
        <boxGeometry args={[buildingWidth + 4, floorHeight * 3, buildingDepth + 2]} />
      </mesh>
      {/* Lobby Glass */}
      <mesh material={glassMaterial} position={[0, floorHeight * 1.5, buildingDepth / 2 + 1.1]}>
        <boxGeometry args={[buildingWidth + 2, floorHeight * 2, 0.1]} />
      </mesh>

      {/* Main Apartment Floors */}
      {Array.from({ length: floors }).map((_, i) => {
        if (i < 3) return null; // Skip floors used for podium

        return (
          <group key={i} position={[0, i * floorHeight, 0]}>
            {/* Core Concrete Slab */}
            <mesh material={whiteMaterial} receiveShadow castShadow>
              <boxGeometry args={[buildingWidth, 0.1, buildingDepth]} />
            </mesh>

            {/* Glass Apartment Windows (Set back) */}
            <mesh material={glassMaterial} position={[0, floorHeight / 2, -0.4]}>
              <boxGeometry args={[buildingWidth - 0.2, floorHeight - 0.1, buildingDepth - 1]} />
            </mesh>

            {/* Balconies (Prominent Indian Urban Style) */}
            <group position={[0, 0, buildingDepth / 2 - 0.2]}>
              {/* Balcony Floor */}
              <mesh material={beigeMaterial} position={[0, 0.05, 0.5]} receiveShadow castShadow>
                <boxGeometry args={[buildingWidth - 0.5, 0.08, 1.2]} />
              </mesh>
              {/* Balcony Glass Railing */}
              <mesh material={glassMaterial} position={[0, 0.35, 1.05]}>
                <boxGeometry args={[buildingWidth - 0.5, 0.6, 0.05]} />
              </mesh>
              {/* Gold Top Railing */}
              <mesh material={goldMaterial} position={[0, 0.65, 1.05]}>
                <boxGeometry args={[buildingWidth - 0.4, 0.03, 0.06]} />
              </mesh>
            </group>

            {/* Vertical Support Columns (Gold Accents) */}
            {[-(buildingWidth / 2), buildingWidth / 2].map((x, idx) => (
              <mesh key={idx} material={goldMaterial} position={[x, floorHeight / 2, buildingDepth / 2 + 0.9]}>
                <boxGeometry args={[0.08, floorHeight, 0.08]} />
              </mesh>
            ))}

            {/* Architectural Fins on sides */}
            {[-1, 1].map((side) => (
              <mesh key={side} material={whiteMaterial} position={[side * (buildingWidth / 2 + 0.1), floorHeight / 2, 0]}>
                <boxGeometry args={[0.05, floorHeight, buildingDepth + 1]} />
              </mesh>
            ))}
          </group>
        );
      })}

      {/* Modern Top Penthouse / Spire section */}
      <group position={[0, (floors + 0.5) * floorHeight, 0]}>
        <mesh material={whiteMaterial}>
          <boxGeometry args={[buildingWidth + 1, floorHeight * 2, buildingDepth + 0.5]} />
        </mesh>
        <mesh material={goldMaterial} position={[0, floorHeight * 1.5, 0]}>
          <boxGeometry args={[1, floorHeight * 3, 1]} />
        </mesh>
        <mesh material={goldMaterial} position={[0, floorHeight * 3, 0]}>
          <cylinderGeometry args={[0.02, 0.1, 2, 8]} />
        </mesh>
      </group>
    </group>
  );
}
