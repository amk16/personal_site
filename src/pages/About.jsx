import React, { Suspense, useRef, forwardRef, useImperativeHandle } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import Loader from '../components/Loader'
import Room from '../components/room'
import gsap from 'gsap'


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

const About = () => {
  const [currentPosition, setCurrentPosition] = React.useState(1)
  const cameraControllerRef = useRef()

  const handleButtonClick = () => {
    if (cameraControllerRef.current) {
      cameraControllerRef.current.handlePositionChange()
    }
  }

  return (
    <section className='w-full h-screen relative flex'>
      {/* Page Header */}
      <div className="w-full text-center pt-10 absolute z-20">
        <h1 className="text-4xl font-bold text-white">About</h1>
      </div>
      
      <div className='w-1/2 h-full'>
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
            <hemisphereLight intensity={2} />
            <Room />
          </Suspense>
        </Canvas>
        <div className="absolute bottom-35 right-2/4 transform rotate-20 -translate-x-1/4">
          <div className="mb-4 self-start ml-32"> 
          <img 
            src="/arrow.png" 
            alt="Arrow" 
            className="w-35 h-12 transform rotate-180 ml-16"
          />
          <div className="text-white text-xl font-medium mb-2 transform rotate-340 ml-24">My Room</div>

          </div>
        </div>
      </div>

      
      <div className="w-1/2 h-full flex items-center justify-center flex-col">
        <div className="mb-4 self-start ml-10">
          <div className="text-white text-xl font-medium mb-2">Get to know Me</div>
          <img 
            src="/arrow.png" 
            alt="Arrow" 
            className="w-35 h-12 transform rotate-20"
          />
        </div>
        
        <div className="card">
          <div className="flex justify-center mb-2">
            <img 
              src="/avatar.png" 
              alt="Ali Malik" 
              className="w-16 h-16 rounded-full object-cover border-2 border-white"
            />
          </div>

          <h1 className='text-white text-4xl font-bold'>
            Ali Malik
            <br/>
            <div className='text-white text-xxs font-bold'>
              Coder | Creator 
            </div>
            
          </h1>
          <p>
          I've been coding for about 7 years now, and I really love creating and designing cool, interesting projects. What keeps me going is my natural curiosity – I'm always exploring and trying out new things. These days, I'm focused on honing my craft, getting better with each project and always learning something new along the way.
           

          </p>
        </div>
      </div>
    </section>
  )
}

export default About