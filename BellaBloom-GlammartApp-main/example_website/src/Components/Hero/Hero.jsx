import React from 'react'
import './Hero.css'
import Hero1 from '../Assests/Hero1.jpg'
import Hero2 from '../Assests/Hero2.jpg'
import Hero3 from '../Assests/Hero3.jpg'
import Hero4 from '../Assests/Hero4.jpg'
import Hero5 from '../Assests/Hero5.jpg'
const Hero = () => {

  return ( 
    
    <div className='ad-pic'>
      <ul>
        <li><img src={Hero1} alt=""/></li>
        <li><img src={Hero2} alt=""/></li>
        <li><img src={Hero3} alt=""/></li>
        <li><img src={Hero4} alt=""/></li>
        <li><img src={Hero5} alt=""/></li>
      </ul>
    </div>

  )
}

export default Hero
