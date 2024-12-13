import React, { useMemo,  useRef, useEffect } from 'react'
import { useGLTF, } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three'

// Interpolation Function Variants
const colorInterpolationFunctions = {
  // 1. Radial Gradient (Rainbow-like)
  radialRainbow: (t) => {
    const hue = (1 - t) * 240; // Blue to Red
    return new THREE.Color(`hsl(${hue}, 100%, 50%)`);
  },

  // 2. Exponential Falloff
  exponentialFalloff: (t) => {
    const color1 = new THREE.Color(0xdaa425);  // Golden
    const color2 = new THREE.Color(0x6fc0db);  // Cyan
    const color3 = new THREE.Color(0xffffff);  // White
    
    if (t < 0.5) {
      // Exponential interpolation for first half
      const expT = Math.pow(t * 2, 0.5);
      return color1.clone().lerp(color2, expT);
    } else {
      // Exponential interpolation for second half
      const expT = Math.pow((t - 0.5) * 2, 2);
      return color2.clone().lerp(color3, expT);
    }
  },

  // 3. Sinusoidal Color Wave
  sinusoidalWave: (t) => {
    const r = Math.sin(t * Math.PI * 2) * 0.5 + 0.5;
    const g = Math.sin((t + 0.33) * Math.PI * 2) * 0.5 + 0.5;
    const b = Math.sin((t + 0.67) * Math.PI * 2) * 0.5 + 0.5;
    return new THREE.Color(r, g, b);
  },

  // 4. Plasma-like Interpolation
  plasma: (t) => {
    const r = Math.sin(t * Math.PI * 3);
    const g = Math.cos(t * Math.PI * 2);
    const b = Math.sin(t * Math.PI * 4);
    return new THREE.Color(
      Math.abs(r),
      Math.abs(g),
      Math.abs(b)
    );
  },

  // 5. Cold to Hot Gradient
  coldToHot: (t) => {
    const color1 = new THREE.Color(0xedc530);  // Golden
    const color2 = new THREE.Color(0x6fc0db);  // Cyan
    const color3 = new THREE.Color(0xffffff);  // White
    
    if (t < 0.5) {
      return color1.clone().lerp(color2, t * 2);
    } else {
      return color2.clone().lerp(color3, (t - 0.5) * 2);
    }
  }
};

const Space = (props) => {
  const { nodes, materials } = useGLTF('/models/need_some_space.glb')


  const pointsRef = useRef()
  const groupRef = useRef()
  const { viewport, camera } = useThree()



  // Create a custom geometry with color attribute
  const coloredGeometry = useMemo(() => {
    // Clone the original geometry to avoid modifying the source
    const geometry = nodes.Object_2.geometry.clone()
    
    // Calculate colors based on distance from center
    const positions = geometry.getAttribute('position')
    const colors = new THREE.BufferAttribute(new Float32Array(positions.count * 3), 3)
    
    // Find the center of the point cloud
    const center = new THREE.Vector3()
    geometry.computeBoundingBox()
    geometry.boundingBox.getCenter(center)

    // Choose interpolation function (change this to try different styles)
    const interpolationFunc = colorInterpolationFunctions.exponentialFalloff;

    // Calculate max distance for normalization
    const maxDistance = geometry.boundingBox.max.distanceTo(geometry.boundingBox.min) / 2

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i)
      const y = positions.getY(i)
      const z = positions.getZ(i)

      // Calculate distance from center
      const point = new THREE.Vector3(x, y, z)
      const distance = point.distanceTo(center)
      
      // Normalize distance
      const t = Math.min(distance / maxDistance, 1)

      // Get color using selected interpolation function
      const resultColor = interpolationFunc(t)

      // Set color for this vertex
      colors.setXYZ(i, resultColor.r, resultColor.g, resultColor.b)
    }

    // Add color attribute to geometry
    geometry.setAttribute('color', colors)

    return geometry
  }, [nodes.Object_2.geometry])

  // Create a custom material that matches the original
  const customMaterial = useMemo(() => {
    return new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1,
      sizeAttenuation: false,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8,
      depthWrite: false
    })
  }, [])
 
  //  useFrame((state, delta) => {
  //   if (groupRef.current) {
  //     // Continuous clockwise rotation around Y-axis
  //     groupRef.current.rotation.y += 0.2 * delta;

  //     // Ensure object remains centered
  //     const { width, height } = viewport
  //     groupRef.current.position.set(0, 0, 0)
  //   }
  // });

  // // Initial setup to ensure proper positioning
  // useEffect(() => {
  //   if (groupRef.current) {
  //     // Ensure the group is positioned at the center
  //     groupRef.current.position.set(0, 0, 0)
  //   }
  // }, [])


  return (
    <group ref={groupRef} {...props} dispose={null} >
      <points
      ref={pointsRef}
        geometry={coloredGeometry}
        material={customMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.015}
      />
    </group>
  )
}

useGLTF.preload('/models/need_some_space.glb')
export default Space