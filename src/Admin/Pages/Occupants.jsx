import React, { useState, useEffect, useRef } from 'react'
import {  AiOutlineClose, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import dbdataservice from '../../Common/Operations';
import { AiFillEdit, AiOutlineSearch } from 'react-icons/ai';
import { MdLiving, MdOutlineDeleteForever, MdSpaceDashboard } from 'react-icons/md';
import { Input} from '@material-tailwind/react';
import { useDownloadExcel } from 'react-export-table-to-excel';
import Profile from '../../Common/Profile'
import { TbBrandBooking } from 'react-icons/tb';
const Users = ({ id, getOccupantId }) => {
  const [occupants, setOccupants] = useState([]);
  useEffect(() => {
    getAllOccupants();
  }, []);
  const getAllOccupants = async () => {
    const data = await dbdataservice.getAllOccupants();
    
    setOccupants(data.docs.map((doc) => ({ ...doc.data(),
      id: doc.id })));
  };
 
  const deleteHandler = async (id) => {
    await dbdataservice.deleteOccupant(id);
    getAllOccupants();
  };

  const editHandler = async () => {
    try {
      const docSnap = await dbdataservice.getOccupant(id);
      setFName(docSnap.data().FName);
      setLName(docSnap.data().LName);
      setGender(docSnap.data().Gender);
      setPNumber(docSnap.data().PNumber);
      setEntryDate(docSnap.data().EntryDate);
      setRoomNo(docSnap.data().RoomNo);
      setExitDate(docSnap.data().ExitDate);
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
    } //eslint-disable-next-line
  }, [id]);

  const [searchedVal, setSearchedVal] = useState("")
  const tableRef = useRef(null);
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Occupants table',
        sheet: 'Occupants'
    })
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
       <div className='mt-9  pt-8 '> 
     <p className='text-xl text-gray-600 mt-8 text-center'>Occupants Details</p>
     <div className="md:flex md:justify-between">
     <div className="mt-6 flex gap-6">
     <Link to='/addoccupant' className='text-sm mx-2 hover:underline hover:font-bold'>Add</Link>
            <button className='text-sm hover:font-bold hover:underline'  onClick={getAllOccupants} > Refresh</button>
            <button className='hover:font-bold mx-2 text-green-700 text-sm hover:underline'  onClick={onDownload} > Export</button>
    </div>
    <div className='w-64 flex justify-end'>
    <Input variant="standard" label="Search..."  color='teal' onChange={(e) => setSearchedVal(e.target.value)} icon={<AiOutlineSearch/>} />
    </div>
     </div>

    </div>
    <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table ref={tableRef} class="min-w-full">
          <thead class="bg-white border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Gender
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Age
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Contact
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                RoomNo
              </th>
             
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                EntryDate
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                ExitDate
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Edit
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Delete
              </th>
            </tr>
          </thead>
          {occupants.filter((row) =>
         !searchedVal.length || row.FName
           .toString()
           .toLowerCase()
           .includes(searchedVal.toString().toLowerCase()) 
       ).map((doc,index)=>{
             return(
          <tbody>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {doc.FName}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {doc.Gender}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {doc.Age}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {doc.PNumber}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {doc.RoomNo}
              </td>
              
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {doc.EntryDate}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {doc.ExitDate}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <Link to='/addoccupant'>
            <AiFillEdit className='text-[orange] text-2xl cursor-pointer'  onClick={(e) =>
                   getOccupantId(doc.id)}/>
            </Link>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <MdOutlineDeleteForever onClick={(e) => 
              deleteHandler(doc.id)} className='text-[red] text-2xl cursor-pointer'/>
              </td>
            </tr>
         
          
              
          </tbody>
          )
        })}
        </table>
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

export default Users