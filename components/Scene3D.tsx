'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Cloud, Clouds, Float, Sparkles, PointMaterial, Points } from '@react-three/drei'
import * as THREE from 'three'

function SmokeParticles() {
  const count = 500
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [])

  const ref = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#7C3AED"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

function FloatingSmoke() {
  return (
    <Clouds material={THREE.MeshBasicMaterial}>
      <Cloud
        segments={40}
        bounds={[12, 3, 3]}
        volume={8}
        color="#6B21A8"
        fade={30}
        speed={0.2}
        opacity={0.35}
      />
      <Cloud
        seed={2}
        segments={30}
        bounds={[10, 2, 2]}
        volume={6}
        color="#7C3AED"
        fade={25}
        speed={0.15}
        position={[0, -1, 0]}
        opacity={0.25}
      />
      <Cloud
        seed={3}
        segments={25}
        bounds={[8, 2, 2]}
        volume={5}
        color="#A855F7"
        fade={20}
        speed={0.1}
        position={[2, 1, -1]}
        opacity={0.2}
      />
    </Clouds>
  )
}

function GoldSparkles() {
  return (
    <>
      <Sparkles
        count={100}
        scale={[15, 8, 8]}
        size={2}
        speed={0.3}
        opacity={0.5}
        color="#D4AF37"
      />
      <Sparkles
        count={50}
        scale={[12, 6, 6]}
        size={3}
        speed={0.2}
        opacity={0.3}
        color="#F5D07A"
      />
    </>
  )
}

function AnimatedLights() {
  const light1 = useRef<THREE.PointLight>(null)
  const light2 = useRef<THREE.PointLight>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (light1.current) {
      light1.current.position.x = Math.sin(t * 0.3) * 5
      light1.current.position.y = Math.cos(t * 0.2) * 2
    }
    if (light2.current) {
      light2.current.position.x = Math.cos(t * 0.25) * 4
      light2.current.position.z = Math.sin(t * 0.35) * 3
    }
  })

  return (
    <>
      <pointLight ref={light1} position={[5, 2, 0]} color="#7C3AED" intensity={2} distance={15} />
      <pointLight ref={light2} position={[-3, 0, 2]} color="#D4AF37" intensity={1} distance={12} />
      <ambientLight intensity={0.1} />
    </>
  )
}

function FloatingRing() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1
      ref.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={[0, 0, -2]}>
        <torusGeometry args={[3, 0.02, 16, 100]} />
        <meshBasicMaterial color="#D4AF37" transparent opacity={0.3} />
      </mesh>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#0A0A0F']} />
        <fog attach="fog" args={['#0A0A0F', 5, 25]} />
        
        <AnimatedLights />
        <FloatingSmoke />
        <SmokeParticles />
        <GoldSparkles />
        <FloatingRing />
      </Canvas>
    </div>
  )
}
