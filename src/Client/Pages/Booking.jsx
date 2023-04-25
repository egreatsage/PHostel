import { Input, Select } from '@material-tailwind/react'
import React from 'react'

const Booking = () => {
  return (
    <div>
      <form >
        <div className='grid md:py-6 w-full md:grid-cols-3 gap-3 overflow-x-hidden'>
        <div className='my-3'><Input color='teal' type='text' className='text-black' variant='standard' label='Full Name' required/></div>
    <div className='my-3 flex items-center mt-9'>
    <select className='w-full border-b text-gray-600 border-b-gray-400 cursor-pointer ' id="Gender" type='text' label="Select Gender" required>
    <option disabled value="Select Gender">Select Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
</select>
    </div>
      <div className='my-3'><Input color='teal' type='tel' className='text-black' variant='standard' label='Phone Number' required/></div>
      <div className='my-3'><Input color='teal' type='text' className='text-black' variant='standard' label='Your Institution  ' required/></div>
      <div className='my-3'><Input color='teal' type='email' className='text-black' variant='standard' label='Your Email' required/></div>
      <div className='my-3'><Input color='teal' type='text' className='text-black' variant='standard' label='Guardian/Parent Name ' required/></div>
      <div className='my-3'><Input color='teal' type='tel' className='text-black' variant='standard' label='Guardian/Parent Contact' required/></div>
      <div className='my-3 flex items-center mt-9'>
    <select className='w-full border-b text-gray-600 border-b-gray-400 cursor-pointer ' id="Sharing" type='text' label="Room Sharing" required>
    <option disabled value="Sharing">Select sharing type</option>
  <option value="Single room">Single room</option>
  <option value="Two sharing">Two sharing</option>
</select>
</div>
      <div className='my-3'><Input color='teal' type='date' className='text-black' variant='standard' label='Check In' required/></div>
      
        </div>
        <div  className='flex justify-end '> <button type='submit' className='rounded-full bg-[green] text-white font-semibold px-3 py-1'>Submit Booking</button></div>
      </form>
    </div>
  )
}

export default Booking