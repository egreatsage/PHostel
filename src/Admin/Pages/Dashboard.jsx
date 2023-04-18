import React from 'react'
import { AiOutlineAccountBook, AiOutlineAlibaba, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './dashboard.css'
const Dashboard = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-flex">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/78/4e/a6/hostel-house.jpg" width={"30px"} alt="" />
            <div className="brand-icons">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="sidebar-main">
          <div className="sidebar-user">
            <img src="" alt="" />
            <div>
              <h3>The Admin</h3>
              <span>
                Admin@gmail.com
              </span>
            </div>
          </div>
          <div className="sidebar-menu">
            <div className="menu-head">
              <span>Dashboard</span>
              <ul className='mt-7'>
                <Link className='flex gap-2 my-3' to='/bookings'>
                <span>icon</span>
                <h1>Bookings</h1>
                </Link>
                <Link className='flex gap-2 my-3' to='/bookings'>
                <span>icon</span>
                <h1>Bookings</h1>
                </Link>
                <Link className='flex gap-2 my-3' to='/bookings'>
                <span>icon</span>
                <h1>Bookings</h1>
                </Link>
                <Link className='flex gap-2 my-3' to='/bookings'>
                <span>icon</span>
                <h1>Bookings</h1>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-content">
          <header>
            <span>
              <AiOutlineMenu/>
            </span>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </header>
        </div>
        <main>
          <div className="page-heaeder">
            <div>
              <h1>
                Analytics Dashboard
              </h1>
              <small>
                Monitor Students Available
              </small>
            </div>
            <div>
              <button>
                <span><AiOutlineAccountBook/></span>
              </button>
              <button>
              <span><AiOutlineAlibaba/></span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard