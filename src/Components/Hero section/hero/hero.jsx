import React from 'react'
import './heroStyle.css'

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className='container'>
            <div className='row'>
                <div className='content'>
                    <div className='sub-heading'>
                        Seamless experience
                        <div className='div'>
                            <p className='title'>
                                Unleashing the Next Genration of Card Solutions 
                            </p>
                            <p className='para-text' style={{marginLeft:'50px', marginRight:'50px'}}>
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uteim 
                                ad minim veniam, quis nostrud
                            </p>
                        </div>
                    </div>
                    <div className='content-2'>
                        <div className='action'>
                            <button className="buttons-instance"
                           type="primary">Unlock your Card </button>
                        </div>
                        <div className='text-wrapper'>*No credit card required</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero