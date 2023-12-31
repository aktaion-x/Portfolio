import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { OrbitControls } from '@react-three/drei'

function ContactCanvas() {
  return (
    <div className='w-[300px] h-[300px] bg-canvas'>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 75,
          near: 0.1,
          far: 2000,
          position: [0, 0, 35]
        }}
      >
        <ContactMesh />
      </Canvas>
    </div>
  );
}

const ContactMesh = () => {
  const ref = useRef<Mesh>(null)
  const [hovered, set] = useState(false)
  useFrame(() => {
    ref.current!.rotation.y += 0.01;
  })
  return (
    <mesh ref={ref} onPointerOver={() => set(true)} onPointerOut={() => set(false)}>
      <OrbitControls enableZoom={false} />
      <torusKnotGeometry args={[10, 3.4, 100, 20]} />
      <meshNormalMaterial wireframe={!hovered} />
    </mesh>
  )
}


export default ContactCanvas;