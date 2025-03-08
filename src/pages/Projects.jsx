import React, { Suspense, useRef, forwardRef, useImperativeHandle } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import Loader from '../components/Loader'
import Desk from '../components/Table'
import gsap from 'gsap'
import Table from '../components/Table'
import Card from '../components/card'

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

const Projects = () => {
  const [currentPosition, setCurrentPosition] = React.useState(1)
  const cameraControllerRef = useRef()

  const handleButtonClick = () => {
    if (cameraControllerRef.current) {
      cameraControllerRef.current.handlePositionChange()
    }
  }

  return (
    <section className='w-full h-screen relative'>
      {/* Skills Title */}
      <div className="w-full text-center pt-10">
        <h1 className="text-4xl font-bold">Skills</h1>
      </div>

      {/* Card Component */}
      <div className="w-full absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <Card />
      </div>

      {/* <Canvas 
        className='w-1/2 h-screen bg-transparent' 
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
          
          <Table />
        </Suspense>
      </Canvas> */}
    </section>
  )
}

export default Projects