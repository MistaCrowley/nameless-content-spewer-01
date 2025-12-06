"use client"  
import {useRef} from "react"

import { Canvas, useFrame, useLoader, useGLTF} from "@react-three/fiber"
//import { useGLTF } from '@react-three/drei'
//import { Circle, Html, OrbitControls, Stats, useProgress } from '@react-three/drei';
const Cube = ({position, size, color}) => {
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta * 2.0
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
  })

  return(
      <mesh position={position} ref={ref}>
        <boxGeometry args={size}/>
        <meshStandardMaterial color={color}/>
      </mesh>
    )
}

const threedee = () => {

  return (
    <Canvas> 
      <directionalLight intensity={0.5} position={[0,0,2]}/>
      <ambientLight intensity={0.1}/>
      
      {/*<group position={[0,-1,0]}>
      <Cube position={[1,0,0]} color={"green"} size={[1,1,1]}/>
      <Cube position={[-1,0,0]} color={"hotpink"} size={[1,1,1]}/>
      <Cube position={[-1,2,0]} color={"blue"} size={[1,1,1]}/>
      <Cube position={[1,2,0]} color={"yellow"} size={[1,1,1]}/>
      </group>*/}

      <Cube position={[0,0,0]} size={[1,1,1]} color={"orange"}/>

    </Canvas>
  )
}

export default threedee
