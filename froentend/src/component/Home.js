import React from 'react'
import Illustration from "../assets/Illustration.png"
import Client from './Client'
import Community from './Community'
import Content from './Content'
import Last from './Last'
import Marketing from './Marketing'
import Text from './Text'
import Unlock from './Unlock'
import Footer from'./Footer'
import Logout from './Logout';

const Home = () => {
  return (
    <div className="">
<div className='md:flex gap-4 py-20 px-10 md:px-10 shodow-md w-full bg-slate-200'>
     <div className="md:w-1/2 pt-10">
       <div className=" mx-5 pt-10 ">
       <p className='text-4xl md:text-5xl font-semibold  py-3 gap-5 m-5'>Lessons and insights</p>
            <span className=' text-4xl md:text-5xl font-semibold  py-3  m-5 gap-5 text-lime-500'>from 8 yers</span> 
         <p className='py-3 text-base ml-5'>Where to grow your business as a photographer: site or social media?
         </p>
         <button className='font-bold bg-lime-500 text-slate-200 ml-5 px-4 py-2 rounded-md'>Register Now</button>
       </div>
      </div>
      <div className=" md:w-1/2 flex flex-wrap gap-5 p-2 pt-20 justify-center ">
        <img src={Illustration} alt=""  />
      </div>
      </div>
      {/* client */}
<div className='mt-10'>
<Client/>
</div>
<div className=''>
  <Community/>
</div>
<div>
  <Content/>
</div>
<Text/>
<Unlock/>
<Marketing/>
<Last/>
<Footer/>
<Logout/>
     
    </div>
  )
}

export default Home


