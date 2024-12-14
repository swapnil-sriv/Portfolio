import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import CustomGlobe from '../components/CustomGlobe'
import Button from '../components/Button'

const About = () => {
    const [hasCopied, sethasCopied] = useState(false); 
    const handleCopy = ()=>{
        navigator.clipboard.writeText("swapnilsriv441@gmail.com");
        sethasCopied(true);
        setTimeout(()=>{
            sethasCopied(false);
        },2000);
    }

  return (
    <section className='c-space my-20' id='about'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src='/assets/grid1.png' alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain'/>
                <div>
                    <p className='grid-headtext'>Hi, I'm Swapnil</p>
                    <p className='grid-subtext'> I love building cool stuff on the web, working on both the frontend and backend. I also enjoy tackling challenges and finding solutions along the way.  </p>
                </div>
                </div>

            </div>
            <div className='col-span-1 xl:row-span-3'> 
                <div className='grid-container'>
                    <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:w-[276px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>Tech Stack</p>
                        <p className='grid-subtext'>I specialize in C++ and JavaScript, with experience in web development using technologies like Node.js, React, and SQL/NoSQL databases.</p>

                    </div>
                </div>
            </div>
            <div className='col-span-1 row-span-4'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                        <CustomGlobe/>
                    </div>
                 <div>
                    <p className='grid-headtext'>I work remotely across most timezones</p>
                    <p className='grid-subtext'>I'm based in India with remote work available.</p>
                    <a href="#contact" className="w-fit">

                    <Button name='Contact Me' isBeam containerClass='w-full mt-10'>
                        
                    </Button>
                    </a>
                    
                 </div>
                </div>
                        </div>
                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[256px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>My Passion for Coding</p>
                            <p className='grid-subtext'>I love solving problems and building things through code. Coding isn't just my profession, it is my passion!</p>
                    </div>
                </div>
            </div>
            <div className='xl:col-span-1 xl:row-span-2'>
                <div className='grid-container'>
                    <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'>Contact Me</p>
                        <div className='copy-container glowing-border bg-opacity-0 p-1 backdrop-blur-none' onClick={handleCopy}>
                            <img src={hasCopied?'assets/tick.svg':'assets/copy.svg'} alt="copy" />
                            <p className='lg:text-lg md:text-xl font-medium text-gray_gradient'>swapnilsriv441@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </section>
  )
}

export default About