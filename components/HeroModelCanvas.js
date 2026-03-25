"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import * as THREE from "three";

function RobotModel() {
  const geometry = useLoader(STLLoader, "/robot.stl");

  geometry.computeVertexNormals();
  geometry.center();

  const box = new THREE.Box3().setFromBufferAttribute(geometry.attributes.position);
  const size = new THREE.Vector3();
  box.getSize(size);
  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const scale = (2 / maxDim) * 2.08;

  return (
    <mesh
      geometry={geometry}
      scale={[scale, scale, scale]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.88, 0]}
    >
      <meshStandardMaterial color="#d4af37" metalness={0.92} roughness={0.24} />
    </mesh>
  );
}

export default function HeroModelCanvas() {
  return (
    <div className="hero-model-shell">
      <div className="hero-model-glow" />
      <div className="hero-model-surface">
        <Canvas camera={{ position: [0, 1.25, 3.55], fov: 40 }}>
          <ambientLight intensity={1.0} />
          <directionalLight position={[5, 10, 5]} intensity={3.2} />
          <pointLight position={[-5, 5, -5]} intensity={1.65} />
          <RobotModel />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
        </Canvas>
      </div>
    </div>
  );
}
