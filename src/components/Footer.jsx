import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={assets.logo} alt="" className="w-16 h-16 object-cover rounded-full border-2 border-x-blue-950" />
            <p className='text-gray-400 mt-4'>We are a leading construction company dedicated to delivering high-quality projects with innovation and excellence.</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
                <a href="#" className='hover:text-white'>Home</a>
                <a href="#About" className='hover:text-white'>About us</a>
                <a href="#Contact" className='hover:text-white'>Contact us</a>
            </ul>
        </div>
        
        <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Stay Updated!</h3>
            <p className='text-gray-400 mb-4 max-w-80'>Get exclusive updates, industry insights, and special offers—straight to your inbox!</p>
            <div className='flex gap-2'>
                <input type="email" placeholder="Enter your email" className='p-2 rounded bg-gray-800 text-gray-400 broder border-gray-700 focus:outline-none w-full md:w-auto'/>
                <button className='py-3 px-6 rounded-lg bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300 active:scale-95'>
                Don’t Miss Out!
</button>
            </div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
  Copyright © 2024 High Rise Engineering. Proudly Built for a Better Future.
</div>

    </div>
  )
}

export default Footer
