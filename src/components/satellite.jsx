import React, { useRef, useEffect } from 'react'
import { SpotLight, useGLTF, useHelper, OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Satellite = ({ scale = .6, position = [4, -3, 4] }) => {
  const modelRef = useRef()
  const directionalLightRef = useRef()
  const pointLightRef = useRef()
  const fillLightRef = useRef()
  const { scene, materials } = useGLTF('/satellite.glb')

  useEffect(() => {
    // Log materials to see what we're working with
    
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    scene.position.set(-center.x, -center.y, -center.z)
  }, [scene])

  //useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'red')
  useHelper(pointLightRef, THREE.PointLightHelper, 0.5, 'blue')
  useHelper(fillLightRef, THREE.DirectionalLightHelper, 1, 'green')

  useFrame((state) => {
    if (modelRef.current) {
      const time = state.clock.getElapsedTime()
      modelRef.current.position.y = position[1] + Math.sin(time) * 0.1
    }
  })

  return (
    <>
      {/* Increased ambient light for overall brightness */}
      
      
      {/* Main directional light */}
      <directionalLight 
        ref={directionalLightRef}
        position={[-2, 2, 5]} 
        intensity={1}
        castShadow
      />

      {/*
      <pointLight 
        ref={pointLightRef}
        position={[-1.2, -.5 , 1]} 
        intensity={1} 
      />
      }
      
      {/* Fill light from opposite direction */}
      {/* <directionalLight 
        ref={fillLightRef}
        position={[-4, -2, -3]} 
        intensity={1.5}
      /> */}
      
      <primitive 
        ref={modelRef}
        object={scene}
        position={position}
        scale={[scale, scale, scale]}
        rotation={[0, .6, 0]}
      />

      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        minDistance={2}
        maxDistance={10}
      />
    </>
  )
}

useGLTF.preload('/satellite.glb')

export default Satellite