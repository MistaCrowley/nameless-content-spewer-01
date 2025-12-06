/*
built from: 
https://www.youtube.com/watch?v=9L4TH8oy7ZY
*/
"use client"
import React from 'react';
import { useRef } from 'react'
import { OrbitControls } from "@react-three/drei"
import { useGLTF } from "@react-three/drei"
import { Canvas, useFrame } from '@react-three/fiber';
import ODLogo from "@/components/atoms/ODLogo"

const ODSigil = ({position, size}) => {
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta * 2.0
    ref.current.position.z = -50
    //ref.current.color = "red"
    //ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
  })
  return(
      <mesh position={position} ref={ref}>
        <ODLogo/>
        <boxGeometry/>
        <meshStandardMaterial color={"red"}/>
      </mesh>
    )
}


const odtest = () => {


  return (
    <div className="w-full h-full">
      <Canvas>
        <directionalLight intensity={1} color={"00ff00"} position={[0,0,2]}/>
        <ambientLight color={"#00ff00"} intensity={1}/>        
        <ODSigil position={[0,0,0]} size={[1,1,1]}/>
      </Canvas>
    </div>
    )
}

export default odtest

/*
        <OrbitControls/>
        <mesh
          position={[0,0,-50]}
          rotation-y={360}
        >
          <ODLogo/>
        </mesh>
   */