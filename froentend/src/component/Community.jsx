import React from 'react'
import Icon1 from "../assets/Icon 1.png"
import Icon2 from "../assets/Icon 2.png"
import Icon3 from "../assets/Icon 3.png"

const Community = () => {
  return (
    <div className='my-10 px-10 py-5 m-10'>
        <div className='w-full '>
            <h2 className=' flex items-center text-center justify-center text-4xl md:text-4xl font-semibold m-20' >Manage your entire community in<br></br> a single system</h2>
        </div>
        
    
       <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-4 mt-10 mx-10 ">
           <div 
           className='bg-white-100 shadow p-8 m-4 gap-10 items-center'>
               <img src={Icon1} alt="icon" 
               className='mx-20'/>
               <h2 className='text-center text-3xl font-semibold capitalize'>Membership Organisations</h2>
               <p className='text-center'>Our membership management software provides full automation of membership renewals and payments</p>
           </div>
           <div className='bg-white-100 shadow p-8 m-4 gap-5 items-center'>
               <img src={Icon2} alt="icon" className='mx-20' />
               <h2  className=' text-center text-3xl font-semibold'>National <br></br>Associations</h2>
               <p className='text-center '>Our membership management software provides full automation of membership renewals and payments</p>
           </div>
           <div className='bg-white-100 shadow p-8 m-4 gap-5 items-center'>
               <img src={Icon3} alt="icon" className=' mx-20' />
               <h2  className=' text-center text-3xl font-semibold'>Clubs And <br></br>Groups</h2>
               <p className='text-center'>Our membership management software provides full automation of membership renewals and payments</p>
           </div>
       </div>
  
</div>

    
  )
}

export default Community
