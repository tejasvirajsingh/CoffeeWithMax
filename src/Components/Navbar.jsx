// 
import React, { useState } from 'react'
import { FaRegHeart , FaApple , FaAndroid} from 'react-icons/fa'
import {FiChevronDown, FiHelpCircle, FiMenu, FiSearch} from 'react-icons/fi'
import logo from '../assets/logo.png';

const Navbar = () => {

    const [isDropdownOpen , setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <nav className='fixed top-0 left-0 w-full flex items-center justify-between py-2 md:py-4 px-4 sm:px-6 bg-white border-b border-gray-100 z-50'>
            

                         {/* (Mobile view support for..) */}

        <div className='flex items-center justify-between w-full m:hidden'>
       {/* left side humbrag */}
        <div className='flex items-center gap-2'>
          <button onClick={ () => setIsMobileMenuOpen(!isMobileMenuOpen)} className='text-2xl text-gray-900'>
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
          <img src={logo} alt='Max' className='object-contain w-9 h-9' />
        </div>
            {/* Making right side of moblie menu */}

            <div>
              <a href='/login' className='text-xs font-bold text-gray-900' >Log in</a>
             <a href='/signup' className='bg-coffeeBrown text-white text-xs font-bold px-3 py-1 rounded-full' >Sign Up</a>

            </div>
        </div>

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
    {/* makeing logo and center name */}
 
    <div className='hidden md:flex absolute left-1/2 transform -translate-x-1/2 '>


          <div className='flex items-center gap-2'>
            <img src={logo} alt='coffeeCup' className='w-12 h-12 object-contain'></img>
            <h1 className='logo-font text-lg text-coffeeBrown leading-none pt-1'>Coffe With Max</h1>
          </div>
    </div>
 

  {/* Right side search box  */}

  <div className='hidden md:flex items-center gap-4'>

     <div className='relative'>
      <input type='text' placeholder='Search Creator' className='bg-gray-100 text-sm px-4 py-2 pl-10 rounded-full placeholder:text-gray-500'></input>
      <FiSearch className='absolute left-3 top-2.5 text-gray-500 text-base'></FiSearch>

     </div>
     <a href='/login' className='text-base font-bold text-gray-900 hover:text-coffeeBrown transition'>Log in</a>
     <a href='/signup' className='bg-coffeeBrown text-white font-bold text-base px-5 py-2 rounded-full hover:opacity-90 transition'>Sign Up</a>
  </div>

      </nav>

      {/* Mobile view supports */}

      {isMobileMenuOpen && (

        <div className='fixed top-0 left-0 w-full bg-white z-50 flex flex-col gap-6 p-6 pt-20 text-gray-900  text-lg font-semibold animate-siledIn overflow-y-auto  '>

          <a href='#' className='hover:text-coffeeBrown'>FaQ</a>
          <a href='#' className='hover:text-coffeeBrown flex items-center gap-2'>Wall of <FaRegHeart className='text-coffeeBrown'></FaRegHeart></a>
            <div className='flex flex-col gap-2'>
              <span className='text-gray-500 text-sm'>Resources</span>
              <a href='#' className='hover:text-coffeeBrown flex items-center gap-2'><FiHelpCircle /> Help Center</a>
              <a href='#' className='hover:text-coffeeBrown flex items-center gap-2'><FaApple /> IoS Apple</a>
              <a href='#' className='hover:text-coffeeBrown flex items-center gap-2'><FaAndroid  /> Android App</a>


            </div>
        </div>
      )}
    </>
  )
}

export default Navbar