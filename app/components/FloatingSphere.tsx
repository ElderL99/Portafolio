"use client";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";

export default function FloatingSphere() {
  return (
    <div className="h-64 w-64">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 3]} intensity={1} />
        <OrbitControls enableZoom={false} />
        <Sphere args={[1, 100, 200]} scale={1.2}>
          <MeshDistortMaterial
            color="#d4af37"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.3}
          />
        </Sphere>
      </Canvas>
    </div>
  );
}
