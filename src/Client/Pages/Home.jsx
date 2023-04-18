import React from 'react'
import { AiFillFacebook, AiFillYoutube, AiOutlineWhatsApp } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <img className='logo' src="https://thumbs.dreamstime.com/z/house-home-residence-icon-logo-house-home-residence-icon-logo-white-background-simple-vector-sign-144081685.jpg" alt="" />
               <nav>
                <ul>
                  <li><a href=''>Home</a></li>
                  <li><a href=''>Amenities</a></li>
                  <li><a href=''>Hosteller</a></li>
                  <li><a href=''>ContactUs</a></li>
                </ul>
               </nav>
               <img className='menu-icon hidden md:flex' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAABLS0uWlpbPz8/8/Pzu7u7Hx8efn5+FhYWPj49eXl7h4eH19fWioqIeHh46OjpHR0e8vLzW1tbCwsLKyspZWVlCQkJRUVFycnKurq60tLQNDQ16enpoaGgXFxd+XyVdAAACPElEQVR4nO3d6VLqQBRF4QYMUwSHAHFAff+3lOZeU235z6qd3Z6s7w1WQROS9JASAAAAAAAAAAAAAAAAAExbs9q28/G121UzSt9yM/PZLPWBa2Nfthb3NSdz4Gx2kn5Vm97dd9ErE/2fYHbSBbrH4BfZWFy6ywaqX1TnZeK7jSawcXcVND82K3dWYSUp3LqzCltJYevOKrSSwrk7qzCn8Fee3FmFJ0nhszur8CwpfHFnFV4khbfurMKtpDDdu7sG95rAdHCHDQ6iwvTgLvtPc63IahmJolGYPbrbrh51gSm9uusuXpWBKR0/zH0fR21gSjvvnf5mpw7Mjev+bKk79+sx+q6W3c34uhGe6AMAAAAAAAAAgL9md9wvxrc/jvVe5uCbwtfKpigUOu90hf5GHbiw9mULbeCbu+/iTRlYxzRhzQThq1pmemtmeV80ntf3P51VhXt32WAvKrxzhw3uNIGdu6vQSQprWdeVadZ2vbuzCu+Swvhz9VlvMSbNZxh/HMb/LY1/PYz/n2YC/0tT+HuL+PeHE7jHn8Bzmgk8a7M/L30QXQm/if7MO4v+3gIAAAAAAAAAAPwhwfeJir7XV/j92sLvuRd+38Twe1/G3780/B608fcRDr8XdC2jMNOMxPh7ssffVz/+XP346y3iF8Y/Z6aOCcL/aKYJ1zLLO9PM9I5/Zlf8c9cmcHZeNWu7ZEtmJnCG5QTOIY1/lmzyL2ATjsEv4c90TvHP5QYAAAAAAAAAAAAAAACAen0CwaI/7mLCS7YAAAAASUVORK5CYII=" alt="" />
        </div>
        <div className="row">
          <div className="col-1">
            <h2>Le Pamus Residency</h2>
            <h3>Mixed Hostels for Students</h3>
            <p>Safe Secure Satisfactor</p>
            <button type='button'>Book Now <img src="https://cdn.pixabay.com/photo/2012/04/11/10/24/arrow-27324__340.png" alt="" /></button>
          </div>
          <div className="col-2">
             <img className='bgimage' src="https://images.unsplash.com/photo-1522079185018-c7dfc98897c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" />
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
        <div className="social-links flex gap-2 mb-6">
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