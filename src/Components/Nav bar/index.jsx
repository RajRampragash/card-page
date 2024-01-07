import React from 'react'
import './style.css'




const NavBar = () => {
  return (
    <div className='Nav_bar'>
        <div className='Nav_left'>
            <h3>Mode<span>UI</span></h3>
        </div>
        <div className='Nav_center'>
            <h4> Card access</h4>
            <h4> Banking</h4>
            <h4>Processing</h4>
            <h4>About</h4>
            <h4>Carrier</h4>
            <h4>Contact</h4>
           
        </div>
        <button className='Nav_left'>login</button>
    
     
    
   </div>
    
    
    
  )
}

export default NavBar