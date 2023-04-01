import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Profile from '../../Common/Profile'
const Nav = () => {
  return (
    <div>
      <div className='fixed w-full top-0 z-50 px-4 bg-white py-2 flex justify-between '>
              <div className='items-center flex text-2xl font-semibold '>
                <h1>Pamus Admin </h1>
              </div>
              <div>
               <div className='md:flex gap-3 text-gray-700 items-center hidden'>
            
               </div>
               <div className='flex'>
               <Profile/>
                <button
  className=" bg-none px-6 mx-2 pt-2.5 pb-2 text-xl bold leading-normal text-black md:hidden  transition duration-200 ease-in-out"
  type="button"
  data-te-offcanvas-toggle
  data-te-target="#offcanvasRight"
  aria-controls="offcanvasRight"
  data-te-ripple-init
  data-te-ripple-color="light">
  <AiOutlineMenu />
</button>
               </div>
              
              </div>
      </div>
      <div>
    

<div
  className="invisible fixed bottom-0 top-0 right-0 z-[1045] flex w-96 max-w-full translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
 
  id="offcanvasRight"
  aria-labelledby="offcanvasRightLabel"
  data-te-offcanvas-init>
  <div className="flex items-center justify-between p-4">
    <h5
      className="mb-0 font-semibold leading-normal"
      id="offcanvasRightLabel">
    Pamus Admin
    </h5>
    <button
      type="button"
      className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
      data-te-offcanvas-dismiss>
      <span
        className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
      <AiOutlineClose className='text-black font-bold text-2xl'/>
      </span>
    </button>
  </div>
  <div className="flex flex-col items-center gap-8 mt-20">
      <Link to={'/'}>Home</Link>
      <Link to={'/contactus'}>Contact Us</Link>
      <Link to={'/userprofile'}>Student</Link>
  </div>
</div>
      </div>
    </div>
  )
}

export default Nav