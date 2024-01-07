import React from 'react'
import './style.css'
import logo1 from '../../assests/logo1.png'
import logo2 from '../../assests/logo2.png'
import logo3 from '../../assests/logo3.png'
import logo4 from '../../assests/logo4.png'
import logo5 from '../../assests/logo5.png'
import logo6 from '../../assests/logo6.png'
import logo7 from '../../assests/logo7.png'
import logo8 from '../../assests/logo8.png'


const Logo = () => {
  return (
    <div className='logo-Cloud'>
        <div className='container'>
        <img className = " company-logo"src= {logo1} alt='logo1'/>
        <img className = " company-logo"src={logo2} alt="logo2" />
        <img className = " company-logo"src={logo3} alt="logo2" />
        <img className = " company-logo" src={logo4} alt="logo2" />
        <img className = " company-logo" src={logo5} alt="logo2" />
        <img className = " company-logo" src={logo6} alt="logo2" />
        <img className = " company-logo" src={logo7} alt="logo2" />
        <img className = " company-logo" src={logo8} alt="logo2" />

        </div>

    </div>
  )
}

export default Logo