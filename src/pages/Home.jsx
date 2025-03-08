import React, { Suspense, useRef, forwardRef, useImperativeHandle } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import FloatingGarden from '../components/floating_garden'
import gsap from 'gsap'
import './text.css'
import GitHubButton from '../components/github'
import LinkedInButton from '../components/linkedin'
import ResumeButton from '../components/resume'


// Camera Controller component
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

  const cameraPositions = [
    { position: [0, 0, 3], rotation: [0, 0, 0] },
    { position: [0, 0, 2], rotation: [0, 0, 0] },
    { position: [0, 0, 1], rotation: [0, 0, 0] }
  ]

  const currentPositionRef = useRef(0)

  const handlePositionChange = () => {
    currentPositionRef.current = (currentPositionRef.current + 1) % cameraPositions.length
    const newPos = cameraPositions[currentPositionRef.current]
    moveCamera(newPos.position, newPos.rotation)
    if (onPositionChange) {
      onPositionChange(currentPositionRef.current + 1)
    }
  }

  useImperativeHandle(ref, () => ({
    handlePositionChange
  }))

  React.useEffect(() => {
    if (onPositionChange) {
      onPositionChange(1)
    }
  }, [onPositionChange])

  return null
})

const Home = () => {
  const [currentPosition, setCurrentPosition] = React.useState(1)
  const cameraControllerRef = useRef()

  const handleButtonClick = () => {
    if (cameraControllerRef.current) {
      cameraControllerRef.current.handlePositionChange()
    }
  }

  return (
    <section className='w-full h-screen relative'>
      {/* Welcome Text */}
      <div className="absolute top-20 left-30 z-10 text-white text-7xl font-bold font-mplus-black">
        Hey,
      </div>
      
      <div className='absolute top-50 left-30 z-10 text-white text-5xl font-bold'>
        welcome to my site
      </div>
      
      {/* Social Links */}
      <div className='absolute top-80 left-30 z-10 flex space-x-6'>
        <a 
          href="https://github.com/amk16" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <GitHubButton />
        </a>
        <a 
          href="https://www.linkedin.com/in/ali-malik-b743021ab/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <LinkedInButton />
        </a>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <ResumeButton />
        </a>
      </div>

      <Canvas 
        className='w-full h-screen bg-transparent' 
        camera={{ 
          position: [0, 0, 5],
          near: 0.1,
          far: 1000
        }}
      >
        <Suspense fallback={null}>
          <CameraController 
            ref={cameraControllerRef}
            onPositionChange={setCurrentPosition}
          />
          <hemisphereLight intensity={2} />
          <FloatingGarden />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home