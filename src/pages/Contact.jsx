import React, { Suspense, useRef, forwardRef, useImperativeHandle, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import Loader from '../components/Loader'
import Satellite from '../components/satellite'
import gsap from 'gsap'
import ContactForm from '../components/form'


// Camera Controller component to handle animations
const CameraController = forwardRef(({ onPositionChange }, ref) => {
  const { camera } = useThree()
  
  const moveCamera = (position, target) => {
    gsap.to(camera.position, {
      duration: 2,
      x: position[0],
      y: position[1],
      z: position[2],
      ease: "power2.inOut"
    })
    
    gsap.to(camera.rotation, {
      duration: 2,
      x: target[0],
      y: target[1],
      z: target[2],
      ease: "power2.inOut"
    })
  }

  // Define camera positions
  const cameraPositions = [
    { position: [0, 0, 3], rotation: [0, 0, 0] },
    { position: [0, 0, 2], rotation: [0, 0, 0] },
    { position: [0, 0, 1], rotation: [0, 0, 0] }
  ]

  // Position tracking
  const currentPositionRef = useRef(0)

  // Click handler to cycle through positions
  const handlePositionChange = () => {
    currentPositionRef.current = (currentPositionRef.current + 1) % cameraPositions.length
    const newPos = cameraPositions[currentPositionRef.current]
    moveCamera(newPos.position, newPos.rotation)
    if (onPositionChange) {
      onPositionChange(currentPositionRef.current + 1)
    }
  }

  // Expose handlePositionChange to parent through ref
  useImperativeHandle(ref, () => ({
    handlePositionChange
  }))

  // Initialize position number
  React.useEffect(() => {
    if (onPositionChange) {
      onPositionChange(1) // Initial position number
    }
  }, [onPositionChange])

  return null // Component doesn't render anything visible
})

const Contact = () => {
  const [currentPosition, setCurrentPosition] = React.useState(1)
  const cameraControllerRef = useRef()

  const handleButtonClick = () => {
    if (cameraControllerRef.current) {
      cameraControllerRef.current.handlePositionChange()
    }
  }

  return (
    <section className='w-full h-screen relative'>
      {/* Page Header */}
      <div className="w-full text-center pt-10 absolute z-20">
        <h1 className="text-4xl font-bold text-white">Contact</h1>
      </div>
      
      {/* Contact Form - Now using the imported component */}
      <ContactForm />

      <Canvas 
        className='w-full h-screen bg-transparent' 
        camera={{ 
          position: [0, 0, 5],
          near: 0.1,
          far: 1000
        }}
      >
        <Suspense fallback={<Loader />}>
          <CameraController 
            ref={cameraControllerRef}
            onPositionChange={setCurrentPosition}
          />
          
          <Satellite />
          <ambientLight intensity={1} /> 
          <pointLight position={[3.5, -1, 3]} intensity={5} />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Contact