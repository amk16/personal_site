import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

const FloatingGarden = ({ scale = 1, position = [-3.5, -4, 2] }) => {
  const modelRef = useRef()
  
  // Configure DRACO loader with useGLTF
  const { scene, materials } = useGLTF('/floating_garden5.glb', true, (loader) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')
    dracoLoader.setDecoderConfig({ type: 'js' })
    loader.setDRACOLoader(dracoLoader)
  })

  useEffect(() => {
    // Handle materials
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

    // Calculate and apply center offset
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    scene.position.set(-center.x, -center.y, -center.z)
  }, [scene])

  useFrame((state) => {
    if (modelRef.current) {
      const time = state.clock.getElapsedTime()
      // Apply floating animation directly to the primitive
      modelRef.current.position.y = position[1] + Math.sin(time) * 0.1
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      
      <primitive 
        ref={modelRef}
        object={scene}
        position={position}
        scale={[scale, scale, scale]}
        rotation={[0, -2.5, 0]}
      />
    </>
  )
}

// Preload with DRACO loader configuration
useGLTF.preload('/floating_garden5.glb', true, (loader) => {
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')
  dracoLoader.setDecoderConfig({ type: 'js' })
  loader.setDRACOLoader(dracoLoader)
})

export default FloatingGarden