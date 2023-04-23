import React from 'react'
import { AiOutlineAccountBook, AiOutlineAlibaba, AiOutlineArrowRight, AiOutlineClose, AiOutlineHome, AiOutlineMenu, AiOutlineMessage, AiOutlinePieChart, AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './dashboard.css'
import Profile from '../../Common/Profile'
import { MdLiving, MdSpaceDashboard } from 'react-icons/md'
import { TbBrandBooking } from 'react-icons/tb'
const Dashboard = () => {
  return (
  <div>
      <div>
      <input type='checkbox' name='' id='sidebar-toggle'/>
      <div className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-flex">
            <div className="brand-icons flex ">
              <span>Pamus Admin</span>
           
            <label htmlFor='sidebar-toggle' className='md:hidden mt-2 flex ml-14'>
            <span>
              <AiOutlineClose className='cursor-pointer'/>
            </span>
            </label>
         
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
              <span>
           </span>
            </div>
          </div>
          <div className="sidebar-menu">
            <div className="menu-head">
              <span>Dashboard</span>
              <ul className='mt-7'>
                <Link className='flex gap-2 my-3 items-center' to='/dashboard'>
                <span><MdSpaceDashboard/></span>
                <h1>Dashboard</h1>
                </Link>
                <Link className='flex gap-2 my-3 items-center' to='/bookings'>
                <span><TbBrandBooking/></span>
                <h1>Bookings</h1>
                </Link>
                <Link className='flex gap-2 my-3 items-center' to='/occupants'>
                <span><MdLiving/></span>
                <h1>Occupants</h1>
                </Link>
                <Link className='flex gap-2 my-3' to='/occupants'>
                <span><AiOutlineUser/></span>
                <h1>Occupants</h1>
                </Link>
                <Link className='flex gap-2 my-3' to='/occupants'>
                <span><AiOutlineUser/></span>
                <h1>Occupants</h1>
                </Link>
               
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      <div className="main-content">
          <header>
           <div className="menu-toggle">
            <label htmlFor='sidebar-toggle'>
            <span>
              <AiOutlineMenu/>
            </span>
            </label>
           </div>
            <div className='header-icons'>
             <Profile/>
            </div>
          </header>
          <main>
          <div className="page-header">
            <div>
              <h1>
                Analytics Dashboard
              </h1>
              <small>
                Monitor Students Available
              </small>
            </div>
            <div>

            </div>
          </div>
          <div className="cards">
            <div className="card-single">
              <div className="card-flex">
                <div className="card-info">
                  <div className="card-head">
                       <span>Purchases</span>
                       <small>number of purchases</small>
                  </div>
                  <h2>17,000</h2>
                  <small>2% less</small>
                </div>
                <div className="card-chart">
                  <span><AiOutlinePieChart/> </span>
                </div>
              </div>
            </div>
            <div className="card-single">
              <div className="card-flex">
                <div className="card-info">
                  <div className="card-head">
                       <span>Purchases</span>
                       <small>number of purchases</small>
                  </div>
                  <h2>17,000</h2>
                  <small>2% less</small>
                </div>
                <div className="card-chart">
                  <span><AiOutlinePieChart/> </span>
                </div>
              </div>
            </div>
            <div className="card-single">
              <div className="card-flex">
                <div className="card-info">
                  <div className="card-head">
                       <span>Purchases</span>
                       <small>number of purchases</small>
                  </div>
                  <h2>17,000</h2>
                  <small>2% less</small>
                </div>
                <div className="card-chart">
                  <span><AiOutlinePieChart/> </span>
                </div>
              </div>
            </div>
          </div>
          <div className="jobs-grid">
            <div className="analytics-card mb-3">
               <div className="analytics-head">
                <h1>Action needed</h1>
                <span><AiOutlineMessage/></span>
               </div>
               <div className="analytics-chart">
                <div className="chart-circle">
                  <h1>74%</h1>
                </div>
                <div className="analytics-note">
                  <small>Use the hover utility class from to change the background color of a data row when hovering over the element with the cursor.</small>
                </div>
               </div>
               <div className="analytics-btn">
                <button>Generate Report</button>
               </div>
            </div>
            <div className="jobs">
              <h3 className='flex items-center gap-4 cursor-pointer'><span>See All Active Users</span> <span><AiOutlineArrowRight/></span></h3>
            <div className="flex flex-col table-responsive">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead
            className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
            <tr>
              <th scope="col" className="px-6 py-4">#</th>
              <th scope="col" className="px-6 py-4">First</th>
              <th scope="col" className="px-6 py-4">Last</th>
              <th scope="col" className="px-6 py-4">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
              <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td className="whitespace-nowrap px-6 py-4">Mark</td>
              <td className="whitespace-nowrap px-6 py-4">Otto</td>
              <td className="whitespace-nowrap px-6 py-4">@mdo</td>
            </tr>
            <tr
              className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td className="whitespace-nowrap px-6 py-4">Jacob</td>
              <td className="whitespace-nowrap px-6 py-4">Thornton</td>
              <td className="whitespace-nowrap px-6 py-4">@fat</td>
            </tr>
            <tr
              className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
              <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td
                colspan="2"
                className="whitespace-nowrap px-6 py-4 text-center">
                Larry the Bird
              </td>
              <td className="whitespace-nowrap px-6 py-4">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </main>
        </div> 
        <label htmlFor="sidebar-toggle" className='body-label'/>
    </div>
   
  </div>
  )
}

export default Dashboard