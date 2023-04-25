import React, { Fragment, useState } from 'react'
import { AiFillFacebook, AiFillYoutube, AiOutlineWhatsApp } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import Navbar from '../Components/Navbar'
import Booking from '../Pages/Booking'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react'
const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <div>
       <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-1">
            <h2>Le Pamus </h2>
            <h3>Mixed Hostels for Students</h3>
            <p>Safe Secure Satisfactor</p>
            <button 
            
              type='button'

  data-te-toggle="modal"
  data-te-target="#exampleModalScrollable"
  data-te-ripple-init
  data-te-ripple-color="light">
    Book Now
             <img className='animate-pulse ' src="https://cdn.pixabay.com/photo/2012/04/11/10/24/arrow-27324__340.png" alt="" /></button>
          </div>
          <div>
          <Fragment>
      <Dialog
        open={open}
        size='xl'
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },

        }}
        className='overflow-y-auto'
      >
        <DialogHeader>Enter your details</DialogHeader>
        <DialogBody divider className='text-black'>
          <Booking/>
        </DialogBody>
        <DialogFooter>
         
        </DialogFooter>
      </Dialog>
    </Fragment>
   

   <div>
   <div
  data-te-modal-init
  class="fixed left-0 top-0 z-[1055] mt-12 hidden h-full w-[90%] md:ml-12  overflow-y-auto overflow-x-hidden outline-none"
  id="exampleModalScrollable"
  tabindex="-1"
  aria-labelledby="exampleModalScrollableLabel"
  aria-hidden="true">
  <div
    data-te-modal-dialog-ref
    class="pointer-events-none relative h-[calc(100%-1rem)] w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
    <div
      class="pointer-events-auto relative flex max-h-[100%] w-full flex-col overflow-hidden rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
      <div
        class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        
        <h5
          class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
          id="exampleModalScrollableLabel">
          Enter the details below
        </h5>
     
        <button
          type="button"
          class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-modal-dismiss
          aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="relative overflow-y-auto p-4">
      <Booking/>
      </div>

      
      <div
        class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
      
      </div>
    </div>
  </div>
</div>
    </div>`
          </div>
          <div className="col-2">
             <img className='bgimage ' src="https://images.unsplash.com/photo-1522079185018-c7dfc98897c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" />
          <div className="color-box">
          <div className="color-box">
          <div className="color-box">
          </div>
          </div>
          </div>
          <div className="color-box2">
          </div>
          
          </div>
        </div>
        <div className="social-links flex md:gap-4 mb-6">
          <div className='hover:bg-blue-600 text-[blue] hover:text-white border rounded-full shadow-lg text-2xl p-2 border-gray-300 cursor-pointer'><AiFillFacebook/></div>
          <div className='hover:bg-[#212121]  hover:outline-[#B4003A]  hover:text-white border rounded-full shadow-lg text-2xl p-2 border-gray-300 cursor-pointer'><FaTiktok/></div>
          <div className='border text-[red] hover:text-white hover:bg-[red] rounded-full shadow-lg text-2xl p-2 border-gray-300 cursor-pointer'><AiFillYoutube /></div>
          <div className='border text-[green] hover:text-white hover:bg-[green] rounded-full shadow-lg text-2xl p-2 border-gray-300 cursor-pointer'><AiOutlineWhatsApp/></div>
        </div>
      </div>
    </div>
  )
}

export default Home