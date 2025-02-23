
import React from 'react'

const Button = ({name,isBeam=false,containerClass}) => {
  return (
    <button className={`btn glowing-border ${containerClass}`}>
    {name} 
    </button>
  )
} 

export default Button