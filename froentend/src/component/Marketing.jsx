import React from 'react'
import image18 from "../assets/image 18.png"
import image19 from "../assets/image 19.png"
import image20 from "../assets/image 20.png"

function Marketing() {
  return (
    <div className='my-10 p-5' >
       <div className='w-full '>
            <h2 className=' flex items-center text-center justify-center text-4xl md:text-4xl font-semibold mx-20 mt-5' >Creating the Maketing</h2>
             <p className='text-center m-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quidem odio unde eius nostrum fugiat ut nam sed modi voluptatibus vitae, debitis voluptatum tempore natus numquam, eaque excepturi aspernatur doloribus.</p>
        </div>
        <div className='flex justify-between'>
        <div className='my-6 relative'>
            <img src={image18} alt="" />
            <div className='bg-slate-100 my-0 mx-3 mt-9  absolute top-55 bottom-0 pb-9 shadow-md h-20'>
                <p className='text-center m-5'>Creating Streamlined Safeguarding Processes with OneRen</p>
               <a href="#">
                <p className='text-center text-lime-400 mt-9 text-xl bg-slate-100 shadow-md p-2'>Readmore</p>
                </a>
            </div>
            </div> 
            <div className='my-6 relative'>
            <img src={image19} alt="" />
            <div className='bg-slate-100 my-0 mx-3 mt-9  absolute top-55 bottom-0 pb-9 shadow-md h-20'>
                <p className='text-center m-5'>Creating Streamlined Safeguarding Processes with OneRen</p>
                <a href="#">
                <p className='text-center text-lime-300 mt-9 text-xl bg-slate-100 shadow-md p-2'>Readmore</p>
                </a>
            </div>
            </div> 
           <div className='my-6 relative'>
            <img src={image20} alt="" />
            <div className='bg-slate-100 my-0 mx-3 mt-9  absolute top-55 bottom-0 pb-9 shadow-md h-20'>
                <p className='text-center m-5'>Creating Streamlined Safeguarding Processes with OneRen</p>
                <a href="#">
                <p className='text-center text-lime-300 mt-9 text-xl bg-slate-100 shadow-md p-2'>Readmore</p>
                </a>
            </div>
            </div> 
            </div> 
    </div>
  )
}

export default Marketing
