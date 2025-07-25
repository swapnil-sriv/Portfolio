import React from 'react'

const Footer = () => {
  return (
    <section className='c-space my-20 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms and Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>

        <div className='flex gap-3'>
                <a href="https://github.com/swapnil-sriv/">
            <div className='social-icon'>
                <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2 scale-110 hover:scale-150' />  
                </div>
                </a>
                <a href="https://linkedin.com/in/swapnil-srivastava-b702a9265">
            <div className='social-icon'> 
                <img src="/assets/linkedin.png" alt="linkedin" className='scale-75 hover:scale-95' />  </div>
                </a>
            
        </div>

        <p className='text-white-500'>Made by Swapnil Srivastava.</p>
        
    </section>
  )
}

export default Footer