import React from 'react'
import { useState } from 'react'

import { navLinks } from '../constants/index.js'

const NavItems = ()=>{
     return  (
        <ul className='nav-ul '>
            {navLinks.map(({id,name,href})=>(
                <li key={id} className='nav-li '>
                    <a href={href} className='nav-li_a glowing-border'  onClick={()=>{}}>
                        {name}
                    </a>
                </li>
              
           ))}
        </ul>
     )
}



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = ()=>{
        setIsOpen((prevMenu)=>!prevMenu);
    }

  return (
    <>
    <header className='fixed top-0 left-0 right-0 z-50 bg-white-800 bg-opacity-5 backdrop-blur-md  border-x-black-600 shadow-xl shadow-black-200' >
    <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-3 mx-auto c-space shadow-2xl'>
            <a href='/' className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
            Swapnil
            </a>
            <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden  flex" aria-label="Toggle Menu">
                <img src={isOpen?"assets/close.svg":"assets/menu.svg"} alt="toggle" className='w-6 h-6'></img>
            </button>
            <nav className='sm:flex hidden'><NavItems/> </nav>
        </div>
    </div>
    <div className={`nav-sidebar-blur ${isOpen?'max-h-screen':'max-h-0'}`}>
        <nav className='p-5'>
            
            <NavItems/>
        </nav>
    </div>
    </header>
    </>
  )
}

export default Navbar