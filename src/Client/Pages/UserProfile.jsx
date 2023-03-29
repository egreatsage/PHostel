import { Menu, MenuHandler, MenuList, Tooltip } from '@material-tailwind/react'
import React,{useState,useEffect, useRef} from 'react'
import {useUserAuth} from '../../Common/UserAuthContext'
import dbdataservice from '../../Common/Operations';
import {FcPrint} from 'react-icons/fc'
import { useReactToPrint } from 'react-to-print';
import { AiOutlineMore } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Profile from '../../Common/Profile'
const UserProfile = () => {
    const { user,} = useUserAuth();
    const [bookings, setBookings] = useState([]);
    const [occupants, setOccupants] = useState([]);
    let userId = user.uid;
    useEffect(() => {
        getAllBookings();
    }, []);
    const getAllBookings = async () => {
        const data = await dbdataservice.getAllBookings();
        setBookings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }; 
      useEffect(() => {
        getAllOccupants();
      }, []);
      const getAllOccupants = async () => {
        const data = await dbdataservice.getAllOccupants();
        setOccupants(data.docs.map((doc) => ({ ...doc.data(),
          id: doc.id })));
      };

    const componentRef = useRef();
      const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      })
  return (
    <div className='mt-20 overflow-x-hidden'>
        
        <div className="flex justify-between">
           <div>

           </div>

           <div className='flex gap-4'>
          
           <Profile/>
           
            <Menu>
      <MenuHandler>
          <button>
          <AiOutlineMore className='lead leading-8 top-0 text-2xl extrabold cursor-pointer'/>
          </button>
      </MenuHandler>
      <MenuList className='flex flex-col mt-3'>
      <h1 className='mt-3 text-black text-center mb-3'>More Actions</h1>
      <Link className='my-2 bold tracking-wide ml-3 hover:bg-gray-100 px-2 rounded-md py-1 text-black' to='/booking'>Book A Room</Link>
      
      <Link className='my-2 bold tracking-wide ml-3 hover:bg-gray-100 px-2 rounded-md py-1 text-black' to='/rules'>Hostel Rules</Link>
      
      <Link className='my-2 bold tracking-wide ml-3 hover:bg-gray-100 px-2 rounded-md py-1 text-black' to='/notices'>Hostel Notices</Link>
      
      <Link className='my-2 bold tracking-wide ml-3 hover:bg-gray-100 px-2 rounded-md py-1 text-black' to='/booking'>Contact Admin</Link>
      
      <Link className='my-2 bold tracking-wide ml-3 hover:bg-gray-100 px-2 rounded-md py-1 text-black' to='/booking'>Connect with friends</Link>
      </MenuList>
    </Menu> 
           </div>
        </div>
          <h1 className='text-center bold md:text-2xl tracking-wide text-md'>Hosteller Information</h1>
        <div className='shadow-md md:mx-8 border h-screen my-7  rounded-md'>
           <div className="div">      
           <div className="border md:flex md:mx-2 md:my-2">
           <h1 className='text-center md:mx-2 md:mr-20 bold md:text-xl tracking-wide text-md'>Room Information</h1>
           {occupants?.filter((room) => room.userId === userId).map((doc, index) => {
        return(
           <div className="div">
            <div className="md:flex">
            <div className=" md:border px-6 mr-6 py-2 flex md:w-64 ">
                <h1 className='text-center items-center flex'>Room Number</h1>
            </div>
            <h1 className='text-center items-center flex'>{doc.RoomNo}</h1>
            </div>
            <div className="flex">

            <div className=" md:border px-6 mr-6 py-2 flex md:w-64 ">
                <h1 className='text-center items-center flex'>Room Type</h1>        
            </div>
            <h1 className='text-center items-center flex'>{doc.RoomType}</h1>
            </div>
            <div className="flex">
            <div className=" md:border px-6 mr-6 py-2 flex md:w-64 ">
                <h1 className='text-center items-center flex'>Entry Date</h1>
                
            </div>
            <h1 className='text-center items-center flex'>{doc.EntryDate}</h1>

            </div>
            <div className="flex">
            <div className=" md:border px-6 mr-6 py-2 flex md:w-64 ">
                <h1 className='text-center items-center flex'>Exit Date</h1>
                
            </div>
            <h1 className='text-center items-center flex'>{doc.ExitDate}</h1>
            </div>
            <div className="flex">
            <div className=" md:border px-6 mr-6 py-2 flex md:w-64 ">
                <h1 className='text-center items-center flex'>Remaining Days</h1>
                
            </div>
            <h1 className='text-center items-center flex'>{doc.Period}</h1>
            </div>
           
          
           </div>
             
            )})}
           </div>

           {occupants?.filter((room) => room.userId === userId).map((doc, index) => {
        return(

           <div className="border md:flex md:mx-2 md:my-2">
           <h1 className='text-center md:mx-2 md:mr-20 bold md:text-xl tracking-wide text-md'>Personal  Information</h1>
           <div className="div">
            <div className="md:flex">
            <div className=" md:border px-6 mr-6 py-2 flex md:w-64 ">
                <h1 className='text-center items-center flex'>Full Name</h1>
            </div>
            <h1 className='text-center items-center flex'>{doc.RoomNo}</h1>
            </div>
            <div className="flex">

            <div className=" md:border px-6 mr-6 py-2 flex md:w-64 ">
                <h1 className='text-center items-center flex'>Room Type</h1>        
            </div>
            <h1 className='text-center items-center flex'>{doc.RoomType}</h1>
            </div>
            <div className="flex">
            <div className=" md:border px-6 mr-6 py-2 flex md:w-64 ">
                <h1 className='text-center items-center flex'>Entry Date</h1>
                
            </div>
            <h1 className='text-center items-center flex'>{doc.EntryDate}</h1>

            </div>
            <div className="flex">
            <div className=" md:border px-6 mr-6 py-2 flex md:w-64 ">
                <h1 className='text-center items-center flex'>Exit Date</h1>
                
            </div>
            <h1 className='text-center items-center flex'>{doc.ExitDate}</h1>
            </div>
            <div className="flex">
            <div className=" md:border px-6 mr-6 py-2 flex md:w-64 ">
                <h1 className='text-center items-center flex'>Remaining Days</h1>
                
            </div>
            <h1 className='text-center items-center flex'>{doc.Period}</h1>
            </div>
           
          
           </div>
            </div>
              )})}
           </div>
        </div>
        

    </div>
  )
}

export default UserProfile