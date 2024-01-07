import React from 'react'
import { Text } from '../Text'
import './style.css'

const Footer = () => {
  return (
    <>
    <div className='footer'>
         <Text
                        className="leading-[28.00px] md:max-w-full max-w-lg text-base text-blue_gray-600 text-center"
                        size="txtInterMedium16Bluegray600"
                      >
                        Mode UI is a comprehensive design system that empowers
                        designers and developers to create cohesive and visually
                        stunning user interfaces across various platforms and
                        devices
                      </Text>
                      <div class="footer-content">
            <div class="footer-links">
                <ul>
                    <li><a href="/">About us</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Contact us</a></li>
                </ul>
            </div>
            <div class="footer-features">
                <ul>
                    <li><a href="/">Features</a></li>
                    <li><a href="/">Mode Ul</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-legal">
            <ul>
                <li><a href="/">Privacy policy</a></li>
                <li><a href="/">Terms & Conditions</a></li>
                <li><a href="/">Disclaimer</a></li>
                <li><a href="/">Affiliate programme</a></li>
            </ul>
            <p className='copy'>&copy; 2023 Mode UI inc. All Rights Reserved.</p>
        </div>
                      
                
    </div>
    </>
  )
}

export default Footer