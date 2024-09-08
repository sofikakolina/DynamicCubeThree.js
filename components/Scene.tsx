'use client'
import * as THREE from 'three'
import React, { useRef, useState, useMemo } from 'react'
import { Canvas, ThreeElements } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useAppSelector } from '@/store/store'

type TriangleProps = ThreeElements['mesh'] & { dot: number[][] }

const Triangle: React.FC<TriangleProps> = ({ dot, ...props }) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)

  const vertices = useMemo(() => new Float32Array([
    dot[0][0], dot[0][1], dot[0][2],  
    dot[1][0], dot[1][1], dot[1][2], 
    dot[2][0], dot[2][1], dot[2][2] 
  ]), [dot])

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))

  const edges = new Float32Array([
    dot[0][0], dot[0][1], dot[0][2], dot[1][0], dot[1][1], dot[1][2],
    dot[1][0], dot[1][1], dot[1][2], dot[2][0], dot[2][1], dot[2][2], 
    dot[2][0], dot[2][1], dot[2][2], dot[0][0], dot[0][1], dot[0][2] 
  ])

  const edgesGeometry = new THREE.BufferGeometry()
  edgesGeometry.setAttribute('position', new THREE.BufferAttribute(edges, 3))
  const edgesMaterial = new THREE.LineBasicMaterial({ color: 'black' })
  const edgesMesh = new THREE.LineSegments(edgesGeometry, edgesMaterial)

  return (
    <group>
      <mesh
        {...props}
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}>
        <primitive object={geometry} attach="geometry" />
        <meshStandardMaterial color={hovered ? 'hotpink' : '#2f74c0'} side={THREE.DoubleSide} />
      </mesh>
      <primitive object={edgesMesh} />
    </group>
  )
}

const Scene: React.FC = () => {
  const dots = useAppSelector(state => state.dots.dots)
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      {
        dots.map((dot, index) => (
          <Triangle dot={dot} key={index} />
        ))
      }
      <OrbitControls enableZoom={true} />
    </Canvas>
  )
}

export default Scene
