import React from 'react'
import Icona from "../assets/Icon a.png"
import Iconb from "../assets/Icon b.png"
import Iconc from "../assets/Icon c.png"
import Icond from "../assets/Icon d.png"

const Text = () => {
  return (
    <div className='flex items-center justify-center bg-slate-300 px-20 py-58 w-full '>
      <section className="w-50 gap-10 p-10  my-5">
        <h1>
          <span className='text-center text-2xl md:text-3xl font-semibold'>
            Helping a Local
          </span>
          <br />
          <span className='text-center text-3xl md:text-3xl font-semibold text-lime-500'>bussiness renivent it'self</span>
        </h1>
        <p>We reached here with our hard work and dedication
           
        </p>
      </section>

     <section className='flex items-center justify-center '>
      <div>
      <div className='flex gap-3 m-5 p-5'>
        <img src={Icona} alt="" />
        <div>
          <h1>2,245,341</h1>
          <p>Members</p>
        </div>
      </div>
      <div className='flex gap-3 m-5 p-5'>
        <img src={Iconb} alt="" />
        <div>
          <h1>46,328</h1>
          <p>Clubs</p>
        </div>
      </div>
      </div>
      <div>

      <div className='flex gap-3 m-5 p-5'>
        <img src={Iconc} alt="" />
        <div>
          <h1>828,867</h1>
          <p>Event Booking</p>
        </div>
      </div>
      <div className='flex gap-3 m-5 p-5'>
        <img src={Icond} alt="" />
        <div>
          <h1>1,926,436</h1>
          <p>Payments</p>
        </div>
      </div>
      </div>
     </section>
     
    </div>
  )
}

export default Text
