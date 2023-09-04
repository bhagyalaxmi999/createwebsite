import React from 'react'
import Frame from '../assets/Frame.png'

const Content = () => {
  return (
    <>
    <div class="flex  mt-5">
    <img src={Frame} alt="Image" class="w-full" />
    <div class="mt-20">
      <h2 class="text-xl md:text-3xl font-semibold  py-3 gap-5 justify-center mx-12 mt-5">The unseen of spending three years at Pixelgrade</h2>
      <p class="text-gray-600  gap-5 mx-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dignissimos dolorum. Voluptates explicabo obcaecati eligendi at, ipsum in magnam deleniti?</p>
    
    <button className='font-bold bg-lime-500 text-slate-200 ml-10 my-10 px-4 py-2 rounded-md py-3 gap-5 mx-12'>Lern more</button>
  </div>
  </div>

  
  </>
  
  )
}    


export default Content    
