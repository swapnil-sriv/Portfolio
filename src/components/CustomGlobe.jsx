import React from 'react'
import Globe from 'react-globe.gl';

import * as THREE from '//unpkg.com/three/build/three.module.js';

    const { useEffect, useRef } = React;

    // custom globe material
    const globeMaterial = new THREE.MeshPhongMaterial();
    globeMaterial.bumpScale = 10;
    new THREE.TextureLoader().load('//unpkg.com/three-globe/example/img/earth-water.png', texture => {
      globeMaterial.specularMap = texture;
      globeMaterial.specular = new THREE.Color('grey');
      globeMaterial.shininess = 50;
    });

const CustomGlobe = () => {

      const globeEl = useRef();

      useEffect(() => {
        const directionalLight = globeEl.current.lights().find(obj3d => obj3d.type === 'DirectionalLight');
        directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
      }, []);

      return (<Globe
        ref={globeEl}
        globeMaterial={globeMaterial}
        height={326} 
        width={326} 
        backgroundColor='rgba(0,0,0,0)' 
        backgroundImageOpacity={0.5}
        showAtmosphere
        showGraticules
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      />);
      }
   
      

export default CustomGlobe;