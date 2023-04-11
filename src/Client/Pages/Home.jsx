import React from 'react'
import { Link } from 'react-router-dom'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import Navbar from '../Components/Navbar'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
const Home = () => {
 
  return (
    <div className='mt-20 scroll-smooth'>
      <div>
      <Navbar/>
      </div>
      <div>
          <div id="container">
          Safe
          <div id="flip">
            <div className="">
              <div className="">
                Secure
              </div>
              <div>Satisfactory</div>
              <div>
                Confidental
              </div>
            </div>
            Awesome
          </div>
          </div>
      </div>
      <div className='grid md:grid-cols-2 gap-4'>
        <div className='grid-cols-2 grid justify-center mx-1 md:mx-4 my-4 px-2'>
    
<div className='items-center flex flex-col justify-center border mb-2 mx-2 md:w-52 h-40 p-2 hover:-translate-y-1 hover:scale-110  transition cursor-pointer ease-in-out delay-150 rounded-md  shadow-indigo-400  '>
<p className='font-semibold text-2xl mb-5'>Single Room</p>
<p className='font-semibold text-orange-600 text-xl'> Ksh 6000/=</p>
<p className='font-semibold mb-5'>per head</p>
</div>
<div className='items-center   flex flex-col justify-center border mb-2 mx-2 md:w-52 h-40 p-2 hover:-translate-y-1 hover:scale-110  transition cursor-pointer ease-in-out delay-150 rounded-md  shadow-indigo-400  '>
<p className='font-semibold text-2xl mb-5'>2 Sharing</p>
<p className='font-semibold text-orange-600 text-xl'> ksh 4000/=</p>
<p className='font-semibold mb-5'>per head</p>

</div>
<div className='items-center flex flex-col justify-center border mb-2 mx-2 md:w-52 h-40 p-2 hover:-translate-y-1 hover:scale-110  transition cursor-pointer ease-in-out delay-150 rounded-md  shadow-indigo-400  '>
<p className='font-semibold text-2xl mb-5'>3 Sharing</p>
<p className='font-semibold text-orange-600 text-xl'>ksh 3000/=</p>
<p className='font-semibold mb-5'>per head</p>

</div>
<div className='items-center   flex flex-col justify-center border mb-2 mx-2 md:w-52 h-40 p-2 hover:-translate-y-1 hover:scale-110  transition cursor-pointer ease-in-out delay-150 rounded-md  shadow-indigo-400  '>
<p className='font-semibold text-2xl mb-5'>4 Sharing</p>
<p className='font-semibold text-orange-600 text-xl'>ksh 2000/=</p>
<p className='font-semibold mb-5'>per head</p>

</div>

<Link to='/userlogin'>
<button className='flex gap-3 border border-orange-700 py-2 px-10 transition-all transition-400 w-full bg-none text rounded-full animate-pulse text-black font-extrabold items-center ml-5'>
  <span>Book Now</span>
  <span><AiOutlineArrowRight className='text-2xl font-bold animate-pulse'/></span>
</button>
</Link>

</div>
        <div className='justify-center md:mx-4 my-4 px-2'>
        <div
  id="carouselDarkVariant"
  className="relative"
  data-te-carousel-init
  data-te-carousel-slide>
  
  <div
    className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-te-carousel-indicators>
    <button
      data-te-target="#carouselDarkVariant"
      data-te-slide-to="0"
      data-te-carousel-active
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      data-te-target="#carouselDarkVariant"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      data-te-slide-to="1"
      aria-label="Slide 1"></button>
    <button
      data-te-target="#carouselDarkVariant"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      data-te-slide-to="2"
      aria-label="Slide 1"></button>
       <button
      data-te-target="#carouselDarkVariant"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      data-te-slide-to="2"
      aria-label="Slide 2"></button>
       <button
      data-te-target="#carouselDarkVariant"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      data-te-slide-to="3"
      aria-label="Slide 2"></button>
       <button
      data-te-target="#carouselDarkVariant"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      data-te-slide-to="3"
      aria-label="Slide 3"></button>
  </div>

 
  <div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
 
    <div
      className="relative float-left -mr-[100%] w-full !transform-none opacity-0 trans0tion-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item
      data-te-carousel-active>
      <img
        src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        className="block w-full md:h-[400px] object-cover rounded-md ring-offset-purple-800"
        alt="img" />
    
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item>
      <img
        src="https://images.pexels.com/photos/4907235/pexels-photo-4907235.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="block w-full md:h-[400px] object-cover rounded-md"
        alt="img" />
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item>
      <img
        src="https://images.pexels.com/photos/7968279/pexels-photo-7968279.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="block w-full md:h-[400px] object-cover rounded-md"
        alt="img" />
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item>
      <img
        src="https://images.pexels.com/photos/6017730/pexels-photo-6017730.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="block w-full md:h-[400px] object-cover rounded-md"
        alt="img" />
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item>
      <img
        src="https://images.pexels.com/photos/5138176/pexels-photo-5138176.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="block w-full md:h-[400px] object-cover rounded-md"
        alt="img" />
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item>
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
        className="block w-full md:h-[400px] object-cover rounded-md"
        alt="img" />
    </div>
  </div>


  <button
    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselDarkVariant"
    data-te-slide="prev">
    <span className="inline-block h-8 w-8 dark:grayscale">
    <IoIosArrowBack className='text-2xl font-extrabold text-white '/>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span
    >
  </button>

  <button
    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselDarkVariant"
    data-te-slide="next">
    <span className="inline-block h-8 w-8 dark:grayscale">
     <IoIosArrowForward className='text-2xl font-extrabold text-white'/>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span
    >
  </button>
</div>
        </div>
      </div> 
      <div>
        <div className="testm">
          <div><img src="https://w7.pngwing.com/pngs/446/646/png-transparent-saitama-illustration-one-punch-man-saitama-manga-sticker-one-punch-man-white-child-face-thumbnail.png" alt="" /></div>
          <div><img src="https://w7.pngwing.com/pngs/446/646/png-transparent-saitama-illustration-one-punch-man-saitama-manga-sticker-one-punch-man-white-child-face-thumbnail.png" alt="" /></div>
          <div><img src="https://w7.pngwing.com/pngs/446/646/png-transparent-saitama-illustration-one-punch-man-saitama-manga-sticker-one-punch-man-white-child-face-thumbnail.png" alt="" /></div>
          <div><img src="https://w7.pngwing.com/pngs/446/646/png-transparent-saitama-illustration-one-punch-man-saitama-manga-sticker-one-punch-man-white-child-face-thumbnail.png" alt="" /></div>
          <div><img src="https://w7.pngwing.com/pngs/446/646/png-transparent-saitama-illustration-one-punch-man-saitama-manga-sticker-one-punch-man-white-child-face-thumbnail.png" alt="" /></div>
          <div><img src="https://w7.pngwing.com/pngs/446/646/png-transparent-saitama-illustration-one-punch-man-saitama-manga-sticker-one-punch-man-white-child-face-thumbnail.png" alt="" /></div>
        </div>
      </div>
    
    </div>
  )
}

export default Home