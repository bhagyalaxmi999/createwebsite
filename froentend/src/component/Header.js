import React,{useState,useContext} from 'react'
import {Link,useNavigate, NavLink} from "react-router-dom";
import Icon from "../assets/Icon.png"
import Nexcent from '../assets/Nexcent.png'


const Header = () =>  {

  return (

         <div>
            <header className=' flex items-center fixed shadow-md w-full h-16 px-4 md:px-4 bg-slate-200 '>
          <div className='flex items-center h-50 gap-4 mx-10'>
          <img  className=""src={Icon} alt="" /><img  className ="" src={Nexcent} alt="" />
       </div>
        <div className="flex items-center gap-4 md:gap-7 ">
        <nav className='flex gap-10 mx-10 md:gap-18 text-base'>
            <Link to ={""}>Home</Link>
            <Link to ={"service"}>Service</Link>
            <Link to ={"feature"}>Feature</Link>
            <Link to ={"product"}>Product</Link>
            <Link to ={"testimonial"}>Testimonial</Link>
           
            <Link to ={"faq"}>FAQ</Link>
            <Link to ={"/login"}  className="text-lime-500 "><button className=''>Login</button></Link>
          <Link to ={"/signup"} className="bg-lime-800 p-1 text-stone-200">Signup</Link>
          </nav>              
            </div>
            </header>   

            
     </div>
    
   

          
  )
}

export default Header

