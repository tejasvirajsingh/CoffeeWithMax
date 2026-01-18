// 
import React, { useState } from 'react'


import { FaRegHeart , FaApple , FaAndroid} from 'react-icons/fa'
import {FiChevronDown, FiHelpCircle} from 'react-icons/fi'


const Navbar = () => {

    const [isDropdownOpen , setIsDropdownOpen] = useState(false);
  return (
    <>
      <nav className='fixed top-0 left-0 w-full flex items-center justify-between py-2 md:py-4 px-4 sm:px-6 bg-white border-b border-gray-100 z-50'>

        {/* Now we create navbar funtctions and items.. */}
     <div className='hidden md:flex items-center gap-8 text-base font-bold  text-gray-900'>
        <a href="#" className='hover:text-coffeeBrown transition'>FAQ</a>
        <a href="#" className='hover:text-coffeeBrown transition'>Wall of <FaRegHeart className='text-coffeeBrown'> </FaRegHeart> </a>
     <div className='relative z-50'>

        <div className='flex items-center gap-1 cursor-pointer hover:text-coffeeBrown transition '
        onClick={ () => setIsDropdownOpen(!isDropdownOpen)}>
            <span>Resources</span>
            <FiChevronDown className='text-base'></FiChevronDown>

        </div>
   {/* make a dropDown section */}

   {isDropdownOpen &&  (
   
   <div className='absolute top-10 left-0 w-52 bg-white shadow-xl rounded-xl p-4  space-y-4 border border-gray-100 z-50'>

    <a href="#" className='flex items-center gap-2 text-sm hover:text-coffeBrown'>
        <FiHelpCircle  className='text-lg'/>

        <span>Help Center</span>
        </a>

    <a href="#" className='flex items-center gap-2 text-sm hover:text-coffeBrown'>
        <FaApple  className='text-lg'/>

        <span>IOs Apple</span>
        </a>

    <a href="#" className='flex items-center gap-2 text-sm hover:text-coffeBrown'>
        <FaAndroid  className='text-lg'/>

        <span>Android App</span>
        </a>

   </div>

   )}


     </div>
     
     
     </div>

      </nav>
    </>
  )
}

export default Navbar