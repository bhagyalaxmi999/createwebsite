import React from 'react'
import Picture from "../assets/Picture.png";
import Customer from "../assets/Customer.png"


const Unlock = () => {
  return (
    <div className='mt-10'>
      <div> <img src={Picture} alt="picture" /></div>
      <div>
      <img src={Customer} alt="customer" />
      </div>
    </div>
  )
}

export default Unlock
