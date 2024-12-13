import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import DemoComputer from '../components/DemoComputer';


const Project = () => {
    const [selectedProjectInd, setSelectedProjectInd] = useState(0);
    const currentProject = myProjects[selectedProjectInd];
    
    const handleNavigation = (direction)=>{
        setSelectedProjectInd((prevInd)=>{
            if(direction === 'next'){
                return (prevInd + 1) % myProjects.length;
        }
    else if(direction === 'prev'){
        return (prevInd - 1 + myProjects.length) % myProjects.length;
        }
        });
    }
    

  return (
    <section className='c-space my-20' id='project'>
        <p className='head-text'>My work</p>
        <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
            <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 justify-between shadow-2xl shadow-black-200 backdrop-blur-md'>
                <div className='absolute top-0 right-0'>
                    <img src={currentProject.spotlight} alt="spotlight" className='w-full h-96 object-cover rounded-xl' />
                </div>
                <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
                    <img src={currentProject.logo} alt="logo" className='w-10 h-10 shadow-sm'/>
                     </div>
                     <div className='flex flex-col gap-5 text-white-600 my-5'>
                        <p className='text-white text-2xl font-semibold animatedText'>{currentProject.title}</p>
                        <p className='animatedText'>{currentProject.desc}</p>
                        <p className='animatedText'>{currentProject.subdesc}</p>
                     </div>
                     <div className='flex items-center justify-between flex-wrap gap-5'>
                        <div className='flex items-center gap-3'>
                            {currentProject.tags.map((tag,index)=>(
                                <div key={index} className='tech-logo'>
                                    <img src={tag.path} alt={tag.name} />

                                    </div>
                            ))}
                        </div>
                        <a className='flex items-center gap-2 cursor-pointer text-white-600 glowing-border mx-0' href={currentProject.href} target='_blank' rel='moreferrer'> 
                            <p>Check it out</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className='w-3 h-3' />
                        </a>
                     </div>
                     <div className='flex justify-between items-center mt-7'>
                        <button className='arrow-btn' onClick={()=>handleNavigation('prev')}>
                        <img src="/assets/left-arrow.png"   alt="arrow" className='w-4 h-4'/>

                        </button>
                     
                        <button className='arrow-btn' onClick={()=>handleNavigation('next')}>

                        <img src="/assets/right-arrow.png"   alt="arrow" className='w-4 h-4' />
                        </button>
                     </div>
                    
            </div>
            <div className='border-black-300 border-x-black-200 rounded-lg h-96 md:h-full'>

                 <Canvas>
                    <ambientLight intensity={0.8}/>
                    <directionalLight position={[10,10,5]}/>
                    <Center>
                        <Suspense fallback={<CanvasLoader/>}>
                            <group scale={2}
                            position={[0,-3,0]}
                            rotation={[0,-0.1,0]}>
                                <DemoComputer scale={1.0}
                                rotation={[0,0, 0]}
                                position={[0,1,0]}
                                texture={currentProject.texture}
                                
                                />
                            </group>
                        </Suspense>
                    </Center>
                    <OrbitControls maxPolarAngle={Math.PI/2}/>
                 </Canvas>
            </div>
        </div>
    </section>
  )

}

export default Project