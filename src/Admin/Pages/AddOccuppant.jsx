import { Link, useNavigate } from "react-router-dom";
import dbdataservice from '../../Common/Operations';
import {AiOutlineClose, AiOutlineMenu, AiOutlineUser} from 'react-icons/ai';
import Profile from '../../Common/Profile';
import React, { useEffect, useState } from 'react'
import {TbBrandBooking} from 'react-icons/tb';
import Swal from 'sweetalert2';
import { MdLiving, MdSpaceDashboard } from "react-icons/md";
const AddBooking = ({ id, setOccupantId }) => {
  const [FName, setFName] = useState('');
  const [PNumber, setPNumber] = useState('');
  const [Gender, setGender] = useState('');
  const [RoomNo, setRoomNo] = useState('');
  const [EntryDate, setEntryDate] = useState('');
  const [ExitDate, setExitDate] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newOccupant= {
     FName,Gender,PNumber,EntryDate,RoomNo,ExitDate     
    };
    try {
      if (id !== undefined && id !== "") {
        await dbdataservice.updateOccupant(id, newOccupant);
      
        Swal.fire({
          title: 'Success',
          text: 'Document Edited Successfully',
          icon: 'success',
          timer:2000,
          position:'top-right',
          confirmButtonText: 'Close'
        })
          navigate('/occupants');
      } else {
        await dbdataservice.addOccupant(newOccupant);
        
        Swal.fire({
          title: 'Success!',
          text: 'Occupant Added Successfully',
          icon: 'success',
          timer:2000,
          position:'top-right',
          confirmButtonText: 'Close'
        })
        navigate('/occupants');
      }
    } catch (err) {
      Swal.fire({
        title: 'Error!',
        text: 'Error Adding Details',
        icon: 'error',
        timer:2000,
        position:'top-right',
        confirmButtonText: 'Close'
      })
    }
    setFName(""); ;setGender("");setEntryDate("");setPNumber("");
    setRoomNo("");setExitDate("");
  };
  const editHandler = async () => {
    try {
      const docSnap = await dbdataservice.getOccupant(id);
      setFName(docSnap.data().FName);
      setGender(docSnap.data().Gender);
      setPNumber(docSnap.data().PNumber);
      setEntryDate(docSnap.data().EntryDate);
      setRoomNo(docSnap.data().RoomNo);
      setExitDate(docSnap.data().ExitDate);
    } catch (err) {
      Swal.fire({
        title: 'Error!',
        text: 'There was a problem adding details',
        icon: 'error',
        timer:2000,
        position:'top-right',
        confirmButtonText: 'Close'
      })
    }
  };
  useEffect(() => {
    if (id !== undefined && id !== "") {
      editHandler();
    } //eslint-disable-next-line
  }, [id]);
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
          <div>
      <div>
      
      </div>
        <div className='mt-20 overflow-x-hidden'>
<form onSubmit={handleSubmit}>
 <div className="md:mx-4 mx-2">
     <h1 className="text-xl font-semibold my-4">
        Add An Occupant
     </h1>
<div className='grid md:grid-cols-3 gap-2'>
    <div>
    <label className='tracking-tighter'>Full Name</label>
     <input type="text" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
      value={FName}
      onChange={(e)=>setFName(e.target.value)} required
     />
    </div>
    <div>
    <label className='tracking-tighter'>Phone Number</label>
     <input type="tel" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
      value={PNumber} 
      onChange={(e)=>setPNumber(e.target.value)} required
     />
    </div>
    <div>
    <label className='tracking-tighter'>Gender</label>
     <input type="email" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
      value={Gender} 
      onChange={(e)=>setGender(e.target.value)} required
     />
    </div>
    <div>
    <label className='tracking-tighter'>RoomNo</label>
     <input type="text" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
     value={RoomNo} 
     onChange={(e)=>setRoomNo(e.target.value)} required
     />
    </div>
    <div>
    <label className='tracking-tighter'>Entry Date</label>
     <input type="date" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
     value={EntryDate} 
     onChange={(e)=>setEntryDate(e.target.value)} required
     />
    </div>
    <div>
    <label className='tracking-tighter'>Exit Date</label>
     <input type="date" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
     value={ExitDate} 
     onChange={(e)=>setExitDate(e.target.value)} required
     />
    </div>
     </div>
 </div>
 <div className='flex justify-end mx-2 mr-5 my-8'>
     <button type='submit' className='bg-indigo-700 px-4 py-1 rounded-md hover:bg-indigo-800 text-white'>Submit</button>
 </div>
 </form> 
</div>
    </div>
          </main>
      </div> 
        <label htmlFor="sidebar-toggle" className='body-label'/>
    </div>
   
  </div>
  )
}

export default AddBooking