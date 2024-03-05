import React from 'react'
import './Offers.css';
import popular1 from '../Assests/popular1.jpg';
import popular2 from '../Assests/popular2.jpg';
import popular3 from '../Assests/popular3.jpg';
import popular4 from '../Assests/popular4.jpg';
import popular5 from '../Assests/popular5.jpg';
import popular6 from '../Assests/popular6.jpg';
import popular7 from '../Assests/popular7.jpg';
import popular8 from '../Assests/popular8.jpg';
import popular9 from '../Assests/popular9.jpg';
import popular11 from '../Assests/popular11.jpg';
const Offers = () => {
  return (
    <div className="popul">
      <h1>Festive Glow Up Essentials</h1>
      <div className="popul-1">
        <ul>
          <li><img src={popular1} alt=""/></li>
        </ul>
      </div>
      <div className="popul-2">
        <ul>
          <li><img src={popular2} alt=""/></li>
          <li><img src={popular3} alt=""/></li>
          <li><img src={popular4} alt=""/></li>
          <li><img src={popular5} alt=""/></li>
          <li><img src={popular6} alt=""/></li>
          <li><img src={popular7} alt=""/></li>
          <li><img src={popular8} alt=""/></li>
          <li><img src={popular9} alt=""/></li>
          <li><img src={popular11} alt=""/></li>
        </ul>
      </div>
    </div>
  )
}

export default Offers
