import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useReducer, useRef } from "react"


const SpaceCamera = ({children, isMobile}) => {
    const groupRef = useRef();
    useFrame((state,delta)=>{
        easing.damp3(state.camera.position, [0,0,20], 0.25, delta);
        if(!isMobile){
            easing.dampE(groupRef.current.rotation, [-state.pointer.y/1.5,state.pointer.x/2,0], 0.25,delta);
        }
    })
  return (
    <group ref={groupRef} scale={isMobile?0.7:1}  position={[0, 0, 0]}>{children}</group>
  )
}

export default SpaceCamera