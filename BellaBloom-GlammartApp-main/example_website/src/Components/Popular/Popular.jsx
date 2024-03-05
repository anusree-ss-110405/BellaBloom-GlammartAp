import React from 'react'
import './Popular.css';
import b1 from '../Assests/b1.jpg';
import b2 from '../Assests/b2.jpg';
import b3 from '../Assests/b3.jpg';
import b4 from '../Assests/b4.jpg';
import b5 from '../Assests/b5.jpg';
const Popular = () => {
  return (
    <div className="brands">
      <h1>Explore Our Top Brands</h1>
      <div className="brands-offers-1">
        <ul>
          <li><img src={b1} alt=""/></li>
          <li><img src={b2} alt=""/></li>
          <li><img src={b3} alt=""/></li>
        </ul>
      </div>
      <div className="brands-offers-2">
        <ul>
          <li><img src={b4} alt=""/></li>
          <li><img src={b5} alt=""/></li>
        </ul>
      </div>
    </div>
  )
}

export default Popular
