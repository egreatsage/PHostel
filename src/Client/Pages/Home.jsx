import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
const Home = () => {
  return (
    <div className='mt-20 scroll-smooth'>
      <div>
      <Navbar/>
      </div>
      <div>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-4 md:mx-3 mx-2 items-center'>
          <div className='items-center my-6 flex flex-col justify-center shadow-md border md:w-64 w-full  hover:-translate-y-1 hover:scale-110  transition cursor-pointer ease-in-out delay-150 h-60 rounded-md  shadow-indigo-400  '>
            <p className='font-semibold text-2xl mb-5'>Single Room</p>
            <p className='font-semibold text-blue-700 text-xl'>6000/=</p>
            <p className='font-semibold mb-5'>per head</p>
            <Link to='/booking'>
            <button className='rounded-md font-semibold border border-indigo-300 hover:shadow-indigo-300 shadow-md px-3 py-1'>Book now</button></Link>
          </div>
          <div className='items-center  my-6 flex flex-col justify-center shadow-md border md:w-64 w-full  hover:-translate-y-1 hover:scale-110  transition cursor-pointer ease-in-out delay-150 h-60 rounded-md  shadow-indigo-400  '>
            <p className='font-semibold text-2xl mb-5'>2 Sharing</p>
            <p className='font-semibold text-blue-700 text-xl'>4000/=</p>
            <p className='font-semibold mb-5'>per head</p>
            <Link to='/booking'>
            <button className='rounded-md font-semibold border border-indigo-300 hover:shadow-indigo-300 shadow-md px-3 py-1'>Book now</button></Link>
          </div>
          <div className='items-center my-6 flex flex-col justify-center shadow-md border md:w-64 w-full  hover:-translate-y-1 hover:scale-110  transition cursor-pointer ease-in-out delay-150 h-60 rounded-md  shadow-indigo-400  '>
            <p className='font-semibold text-2xl mb-5'>3 Sharing</p>
            <p className='font-semibold text-blue-700 text-xl'>3000/=</p>
            <p className='font-semibold mb-5'>per head</p>
            <Link to='/booking'>
            <button className='rounded-md font-semibold border border-indigo-300 hover:shadow-indigo-300 shadow-md px-3 py-1'>Book now</button></Link>
          </div>
          <div className='items-center my-6 flex flex-col justify-center shadow-md border md:w-64 w-full  hover:-translate-y-1 hover:scale-110  transition cursor-pointer ease-in-out delay-150 h-60 rounded-md  shadow-indigo-400  '>
            <p className='font-semibold text-2xl mb-5'>4 Sharing</p>
            <p className='font-semibold text-blue-700 text-xl'>2000/=</p>
            <p className='font-semibold mb-5'>per head</p>
            <Link to='/booking'>
            <button className='rounded-md font-semibold border border-indigo-300 hover:shadow-indigo-300 shadow-md px-3 py-1'>Book now</button></Link>
          </div>
          
        </div>
      </div>
      
     
    </div>
  )
}

export default Home