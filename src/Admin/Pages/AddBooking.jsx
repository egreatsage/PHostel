import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from "react-router-dom";
import dbdataservice from '../../Common/Operations';
import {AiOutlineClose, AiOutlineMenu, AiOutlineUser} from 'react-icons/ai';
import {TbBrandBooking} from 'react-icons/tb';
import Profile from '../../Common/Profile';
import { MdLiving, MdSpaceDashboard } from 'react-icons/md';
const AddBooking = ({id, setBookingId}) => {
  const [FName, setFName] = useState('');
  const [PNumber, setPNumber] = useState('');
  const [email, setEmail] = useState('');
  const [PGEmail, setPGEmail] = useState('');
  const [EEmail, setEEmail] = useState('');
  const [Gender, setGender] = useState('');
  const [Age, setAge] = useState('');
  const [PGContact, setPGContact] = useState('');
  const [PGName, setPGName] = useState('');
  const [EName, setEName] = useState('');
  const [EContact, setEContact] = useState('');
  const [Relation, setRelation] = useState('');
  const [Institution, setInstitution] = useState('');
  const [YearOfStudy, setYearOfStudy] = useState('');
  const [MaritalStatus, setMaritalStatus] = useState('');
  const [Homecounty, setHomecounty] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setBookingId("");
    e.preventDefault();
    const newBooking = {
     FName,Gender,PNumber,PGContact,Age,PGName,
     EName,EContact,Relation,Institution,YearOfStudy,
     MaritalStatus,Homecounty,email,PGEmail,EEmail,
    };
    try {
        await dbdataservice.addBooking(newBooking);
        setTimeout(() => {
          Swal.fire({
            title: 'Success!',
            text: 'Details Added Successfully',
            icon: 'success',
            confirmButtonText: 'Close'
          })
      }, 1000);
      setTimeout(() => {
        navigate('/bookings');
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
    setAge("");setPGName(""); setEName(''); setEContact(''); setRelation(''); 
    setInstitution(''); setMaritalStatus('');setPGEmail('');
    setYearOfStudy(''); setHomecounty('');setEmail("");setEEmail('');
    
  };
  const editHandler = async () => {
     try {
       const docSnap = await dbdataservice.getBooking(id);
       setFName(docSnap.data().FName);
       setGender(docSnap.data().Gender);
       setPNumber(docSnap.data().PNumber);
       setPGContact(docSnap.data().PGContact);
       setAge(docSnap.data().Age);
       setPGName(docSnap.data().PGName);
       setEName(docSnap.data().EName);
       setEContact(docSnap.data().EContact);
       setRelation(docSnap.data().Relation);
       setInstitution(docSnap.data().Institution);
       setYearOfStudy(docSnap.data().YearOfStudy);
       setMaritalStatus(docSnap.data().MaritalStatus);
       setHomecounty(docSnap.data().Homecounty);
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
        Personal Information
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
    <label className='tracking-tighter'>Email</label>
     <input type="email" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
      value={email} 
      onChange={(e)=>setEmail(e.target.value)} required
     />
    </div>
    <div>
    <label className='tracking-tighter'>Home County</label>
     <input type="address" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
     value={Homecounty} 
     onChange={(e)=>setHomecounty(e.target.value)} required
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
    <label className='tracking-tighter'>Marital Status</label>
     <input type="text" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
     value={MaritalStatus} 
     onChange={(e)=>setMaritalStatus(e.target.value)} required
     />
    </div>
    
     </div>
  
 </div>

 <div className="md:mx-4 mx-2">
     <h1 className="text-xl font-semibold my-4">
        Parent/Guardian  Information
     </h1>
     <div className='grid md:grid-cols-3 gap-2'>
    <div>
    <label className='tracking-tighter'>Full Name</label>
     <input type="text" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
      value={PGName} 
      onChange={(e)=>setPGName(e.target.value)} required
     />
    </div>
    <div>
    <label className='tracking-tighter'>Phone Number</label>
     <input type="tel" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
      value={PGContact} 
      onChange={(e)=>setPGContact(e.target.value)} required
     />
    </div>
     </div>
  
 </div>
 
 <div className="md:mx-4 mx-2 my-5">
     <h1 className="text-xl font-semibold my-4">
        Emergency  Information
     </h1>
     <div className='grid md:grid-cols-3 gap-2'>
    <div>
    <label className='tracking-tighter'>Full Name</label>
     <input type="text" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
      value={EName} 
      onChange={(e)=>setEName(e.target.value)} required
     />
    </div>
    <div>
    <label className='tracking-tighter'>Phone Number</label>
     <input type="tel" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
      value={EContact} 
      onChange={(e)=>setEContact(e.target.value)} required
     />
    </div>

    <div>
    <label className='tracking-tighter'>Relation</label>
     <input type="text" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
      
      value={Relation} 
      onChange={(e)=>setRelation(e.target.value)} required

    />
    </div>
     </div>
  
 </div>
 <div className="md:mx-4 mx-2 my-5">
     <h1 className="text-xl font-semibold my-4">
        Academic  Information
     </h1>
     <div className='grid md:grid-cols-3 gap-2'>
    <div>
    <label className='tracking-tighter'>Name Of Institution of Study</label>
     <input type="text" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
       value={Institution} 
       onChange={(e)=>setInstitution(e.target.value)}
    required
     />
    </div>
    <div>
    <label className='tracking-tighter' >Current Year Of Study</label>
     <input type="tel" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
         value={YearOfStudy} 
         onChange={(e)=>setYearOfStudy(e.target.value)}
      required
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