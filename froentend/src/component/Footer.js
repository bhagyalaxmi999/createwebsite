import React from 'react'
import Icon from "../assets/Icon.png"
import Nexcent from '../assets/Nexcent.png'

function Footer() {
  return (
    
    <footer class="bg-gray-900 text-white p-4">
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class=" mt-4 mb-4">
        <div className='flex text-slate-300 p-2'>
      <img  className=""src={Icon} alt="" /><img  className ="" src={Nexcent} alt="" />
      </div>
        <p>Copyright © 2020 Nexcent ltd. </p>
        <p>reserved</p>

        
        
      </div>
      <div class="mb-4">
        <h3 class="text-xl font-semibold mb-2">Company</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="mb-4">
        <h3 class="text-xl font-semibold mb-2">Supporty</h3>
        <ul>
          <li><a href="#">Help center</a></li>
          <li><a href="#">terms and sevice</a></li>
          <li><a href="#">Legal</a></li>
          <li><a href="#">Privicy policy</a></li>
          <li><a href="#">Status</a></li>
        </ul>
      </div>
      
      <div class="mb-4">
        <h3 class="text-xl font-semibold mb-2">Stayup to date</h3>
        
        <form class="mt-2">
          <input type="email" placeholder="Email address" class="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-400" />
         
        </form>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
