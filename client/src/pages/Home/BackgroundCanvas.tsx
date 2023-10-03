import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../../utils/background.ts";
import { Group } from "three";

function BackgroundCanvas() {
  return (
    <div className="relative bg-canvas">
      <Canvas
        style={{ height: "100vh" }}
      >
        <PerspectiveCamera makeDefault position={[10, -7.5, -10]} fov={75} far={1000} near={0.1} />
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -15]} intensity={1000} />
        <PointCircle />
      </Canvas>
    </div>
  );
}

const PointCircle = () => {
  const ref = useRef<Group | null>(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });
  let color1 = "870907";
  let color2 = "a58d00";

  color1 = "BF211E";
  color2 = "E9CE2C";
  const isDark = document.getElementById('App')?.classList.contains('dark')
  if (isDark) {
    color1 = "BF211E";
    color2 = "E9CE2C";
  }

  return (
    <group ref={ref}>
      {pointsInner(color1, color2).map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter(color1, color2).map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }: { position: number[], color: string }) => {
  return (
    // @ts-expect-error - Passing a num array as opposed to a Vector3 is acceptable
    // and the referenced method in the documentation
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default BackgroundCanvas;
