import React from 'react'
import Map from './Map'
import {AiFillPhone} from 'react-icons/ai'
import {HiOutlineMailOpen} from 'react-icons/hi'
import Navbar from '../Components/Navbar'
const ContactUs = () => {
  return (
    <div className='mt-20 mx-2 w-screen overflow-x-hidden'>
        <div>
      <Navbar/>
      </div>
        <div className="items-center gap-8  grid md:grid-cols-2">
            <div>
              
                <h2 className='text-center text-xl font-semibold'>Write Us A Message</h2>
                <form className=' md:my-1 my-8 '>
                <input type="text" placeholder='Enter Your Name' className=' md:mx-8 mb-6  w-full border-gray-600 text-gray-800 py-2 rounded-2xl px-4 border ' />
                <input type="email" placeholder='Enter Your Email/Phone Number' className=' md:mx-8 mb-6 w-full border-gray-600 text-gray-800 py-2 rounded-2xl px-4 border ' />
                <textarea type="text" placeholder='Write A Message' className=' md:mx-8 mb-6 w-full border-gray-600 text-gray-800 py-6 rounded-2xl px-4 border ' />
                </form>
     
              <div className="md:flex gap-4 md:ml-9 ml-5">
          
                <p className='flex my-6 '> <span> <AiFillPhone className='text-[indigo] text-2xl mr-2'/> </span> Phone Number: <span>+254769375210</span></p>
                <p className='flex my-6'> <span><HiOutlineMailOpen className='text-[indigo] text-2xl mr-2'/></span> Email: <span>+pamushostel@gmail.com</span></p>
              </div>
            
            </div>
            <div className='md:ml-6 mt-1'>
               
                <div className='w-full'>
                <Map/>
                </div>
            </div>
        </div>
        <div>
          
        </div>
    
    </div>
  )
}

export default ContactUs