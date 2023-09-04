import React from 'react'
import Logo1 from '../assets/Logo 1.png'
import Logo2 from '../assets/Logo 2.png'
import Logo3 from '../assets/Logo 3.png'
import Logo4 from '../assets/Logo 4.png'
import Logo5 from '../assets/Logo 5.png'
import Logo6 from "../assets/Logo 6.png"
import Logo  from "../assets/Logo.png"

const Client = () => {
  return (
    <div className=''>
        
        <h2 className=' flex items-center justify-center text-3xl md:text-4xl font-semibold'>Our Clients</h2>
     
     <p className='flex items-center justify-center '>We have been working with some Fortune 500+ clients</p>
      
       <div className="grid grid-cols-1 items-center md:grid-cols-7 gap-2 mt-10 mx-10 ">
        <img src={Logo}  alt="logo"  className='ml-4'/>
        <img src={Logo1} alt="logo" />
        <img src={Logo2} alt="logo" />
        <img src={Logo3} alt="logo" />
        <img src={Logo4} alt="logo" />
        <img src={Logo5} alt="logo" />
        <img src={Logo6} alt="logo" />

      </div>
    </div>
  )
}

export default Client
