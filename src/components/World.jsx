import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Target = (props) => {
    const targetRef = useRef();
    const {scene} = useGLTF('/models/wonderful_world.glb');
    useGSAP(()=>{
      gsap.to(targetRef.current.position,{
        y:targetRef.current.position.y + 0.5,
        duration: -1,
        repeat: -1,
      
      })
    })
  return (
   <mesh {...props} ref={targetRef}>
    <primitive object={scene}/>
   </mesh>
  )
}
useGLTF.preload('/models/need_some_space.glb')

export default Target