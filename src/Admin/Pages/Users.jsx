import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Components/Nav'

const Users = () => {
  return (
    <div>
    <Nav/>
    <div className='flex  mt-20 ml-5'>
        <div className='hidden overflow-y-auto fixed x-50 relative md:flex md:flex-col bg-[lavender] w-64 h-screen shadow-lg border-blue-gray-400 rounded-md mt-8 p-16 '>
          <Link className='flex hover:bg-gray-700 hover:text-white px-4 hover:rounded-md py-1 my-3 font-semibold tracking-wide' to='/dashboard'><span></span><span>Dashboard</span></Link>
          <Link className='flex hover:bg-gray-700 hover:text-white px-4 hover:rounded-md py-1 my-3 font-semibold tracking-wide' to='/bookings'><span></span><span>Bookings</span></Link>
          <Link className='flex hover:bg-gray-700 hover:text-white px-4 hover:rounded-md py-1 my-3 font-semibold tracking-wide' to='/occupants'><span></span><span>Occupants</span></Link>
          <Link className='flex hover:bg-gray-700 hover:text-white px-4 hover:rounded-md py-1 my-3 font-semibold tracking-wide' to='/'><span></span><span>Users</span></Link>
          <Link className='flex hover:bg-gray-700 hover:text-white px-4 hover:rounded-md py-1 my-3 font-semibold tracking-wide' to='/'><span></span><span>Home</span></Link>
          <Link className='flex hover:bg-gray-700 hover:text-white px-4 hover:rounded-md py-1 my-3 font-semibold tracking-wide' to='/'><span></span><span>Home</span></Link>
          <Link className='flex hover:bg-gray-700 hover:text-white px-4 hover:rounded-md py-1 my-3 font-semibold tracking-wide' to='/'><span></span><span>Home</span></Link>
          <Link className='flex hover:bg-gray-700 hover:text-white px-4 hover:rounded-md py-1 my-3 font-semibold tracking-wide' to='/'><span></span><span>Home</span></Link>
        </div>
        <div>
       
        </div>
    </div>
</div>
  )
}

export default Users