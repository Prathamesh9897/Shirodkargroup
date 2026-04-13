import { useMemo } from "react";
import LuxuryBuilding from "./LuxuryBuilding";

const BuildingCluster = ({ position, rotation, scale = 1 }: any) => {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <LuxuryBuilding />
    </group>
  );
};

export default function ResidentialCity() {
  const buildings = useMemo(() => [
    { pos: [0, 0, 0], rot: [0, 0, 0], scale: 1.0 },
    { pos: [-15, -2, -10], rot: [0, 0.8, 0], scale: 0.85 },
    { pos: [15, -4, -15], rot: [0, -0.6, 0], scale: 0.9 },
    { pos: [-25, -6, -30], rot: [0, 0.3, 0], scale: 1.2 },
    { pos: [25, -6, -35], rot: [0, -0.2, 0], scale: 1.1 },
  ], []);

  return (
    <group>
      {buildings.map((b, i) => (
        <BuildingCluster key={i} position={b.pos} rotation={b.rot} scale={b.scale} />
      ))}
      
      {/* City Ground / Base Plates */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -15, 0]} receiveShadow>
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial color="#E8E2D8" opacity={0.2} transparent />
      </mesh>
    </group>
  );
}
