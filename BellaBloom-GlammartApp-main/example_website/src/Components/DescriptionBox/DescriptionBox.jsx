import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates the buying and selling of goods and services over the internet. It serves as a virtual storefront where businesses showcase their products or services, and customers can browse, select items, and make purchases electronically. Key features include product listings, shopping carts, secure checkout processes, payment gateways, and account management. E-commerce websites have become integral to modern commerce, providing a convenient and efficient way for businesses and consumers to engage in transactions without the need for physical storefronts.</p>
        <p>"Embark on a shopping spree with our dynamic e-commerce platform! Experience effortless navigation, detailed product listings, and secure transactions. Our user-friendly site offers a streamlined checkout, personalized accounts, and a seamless shopping journey. Elevate your online shopping experience with us – where style meets simplicity!"</p>
      </div>
    </div>
  )
}

export default DescriptionBox
