import { Link, useNavigate } from "react-router-dom";
import dbdataservice from '../../Common/Operations';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Profile from '../../Common/Profile';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
const AddBooking = ({ id, setOccupantId }) => {
  const [FName, setFName] = useState('');
  const [email, setEmail] = useState('');
  const [Gender, setGender] = useState('');
  const [PNumber, setPNumber] = useState('');
  const [Age, setAge] = useState('');
  const [RoomNo, setRoomNo] = useState('');
  const [EntryDate, setEntryDate] = useState('');
  const [ExitDate, setExitDate] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setOccupantId("");
    e.preventDefault();
    const newOccupant = {
     FName,Gender,PNumber,Age,email,RoomNo,EntryDate,ExitDate
    };
    try {
        await dbdataservice.addOccupant(newOccupant);
        setTimeout(() => {
          Swal.fire({
            title: 'Success!',
            text: 'Details Added Successfully',
            icon: 'success',
            confirmButtonText: 'Close'
          })
      }, 1000);
      setTimeout(() => {
        navigate('/occupants');
      }, 3000);
    } catch (err) {
      Swal.fire({
        title: 'Error!',
        text: 'Problem Adding Details',
        icon: 'error',
        confirmButtonText: 'Close'
      })
    }
    setFName("");setGender("");setPGContact("");setPNumber("");
    setAge(""); setEntryDate('');setExitDate();setRoomNo('');
    
  };
  const editHandler = async () => {
     try {
       const docSnap = await dbdataservice.getBooking(id);
       setFName(docSnap.data().FName);
       setGender(docSnap.data().Gender);
       setPNumber(docSnap.data().PNumber);
       setRoomNo(docSnap.data().RoomNo);
       setAge(docSnap.data().Age);
       setEntryDate(docSnap.data().EntryDate);
       setExitDate(docSnap.data().ExitDate);
       setEmail(docSnap.data().email);
     } catch (err) {
      Swal.fire({
        title: 'Error!',
        text: 'Error Editing Document',
        icon: 'error',
        confirmButtonText: 'Close'
      })
     }
   };
   useEffect(() => {
     if (id !== undefined && id !== "") {
       editHandler();
     }   //eslint-disable-next-line
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
                <Link className='flex gap-2 my-3' to='/bookings'>
                <span></span>
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
          <div className='overflow-y-auto'>
      <div>
      </div>
        <div className='mt-20 overflow-x-hidden'>

<form onSubmit={handleSubmit}>


 <div className="md:mx-4 mx-2">
     <h1 className="text-xl font-semibold my-4">
        Allocate A Room
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
    <label className='tracking-tighter'>Email</label>
     <input type="email" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
      value={email} 
      onChange={(e)=>setEmail(e.target.value)} required
     />
    </div>
    <div>
    <label className='tracking-tighter'>Age</label>
     <input type="number" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
     value={Age} 
     onChange={(e)=>setAge(e.target.value)} required
     />
    </div>
    <div>
    <label className='tracking-tighter'>Gender</label>
     <input type="text" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
     value={Gender} 
     onChange={(e)=>setGender(e.target.value)} required
     />
    </div>
    <div>
    <label className='tracking-tighter'>Add Room Number</label>
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