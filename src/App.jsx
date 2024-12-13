import { useState } from 'react'

import './App.css'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Project from './sections/Project'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {


  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App

