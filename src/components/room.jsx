import React, { useRef, useEffect } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Room = ({ scale = 1.8, position = [0, -4, 2] }) => {
  const modelRef = useRef()
  const { scene, materials } = useGLTF('/just_room.glb')

  useEffect(() => {
    scene.traverse((node) => {
      if (node.isMesh && node.material?.name === "Blueprint Wireframe Sketch Style") {
        const wireMaterial = new THREE.MeshBasicMaterial({
          color: '#800080',
          wireframe: true,
          side: THREE.DoubleSide
        })
        node.userData.originalMaterial = node.material
        node.material = wireMaterial
      }
    })

    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    scene.position.set(-center.x, -center.y, -center.z)
  }, [scene])

  useFrame((state) => {
    if (modelRef.current) {
      const time = state.clock.getElapsedTime()
      modelRef.current.position.y = position[1] + Math.sin(time) * 0.1
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={3} castShadow />
      
      
      
      <primitive 
        ref={modelRef}
        object={scene}
        position={position}
        scale={[scale, scale, scale]}
        rotation={[0, -.5, 0]}
      />
    </>
  )
}

useGLTF.preload('/just_room.glb')

export default Room 