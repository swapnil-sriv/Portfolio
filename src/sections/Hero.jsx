import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Space from "../components/Space";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import World from "../components/World";
import SpaceCamera from "../components/SpaceCamera";
import Button from "../components/Button";

const Hero = () => {
  const controls = useControls({
    Space: {
      positionX: {
        value: 2.5,
        min: -10,
        max: 10,
      },
      positionY: {
        value: 2.5,
        min: -10,
        max: 10,
      },
      positionZ: {
        value: 2.5,
        min: -10,
        max: 10,
      },
      rotationX: {
        value: 2.5,
        min: -10,
        max: 10,
      },
      rotationY: {
        value: 2.5,
        min: -10,
        max: 10,
      },
      rotationZ: {
        value: 2.5,
        min: -10,
        max: 10,
      },
      scale: {
        value: 1,
        min: 0.1,
        max: 10,
      },
    },
  });

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className=" relative min-h-screen w-full flex flex-col" id="hero">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-poppins">
          Hi, I am Swapnil
          <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient ">
        Designing and developing with a touch of creativity!
        </p>

        <div className="w-full h-full absolute inset-0">
        <div className="fixed inset-0 z-0">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <SpaceCamera isMobile={isMobile}>

              <Space
                scale={isMobile ? 5.0 : 5.0}
                position={[-9, -9.5, 3]}
                rotation={[0.4, 0, 0]}
                //   scale={[x.scale, x.scale,x.scale]}
                //   rotation={[x.rotationX, x.rotationY,x.rotationZ]}
                //   position={[x.positionX, x.positionY,x.positionZ]}
                />
                </SpaceCamera>
              {/* <World position={[0,0,0]}/> */}
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
          </div>
          <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space ">
            <a href="#about" className="w-fit">
                <Button name="Let's work together!" isBeam containerClass='sm:w-fit w-full sm:w-96 px-8' ></Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
