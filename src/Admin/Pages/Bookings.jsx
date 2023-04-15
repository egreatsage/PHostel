import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import dbdataservice from '../../Common/Operations';
import { AiFillEdit, AiFillFileExcel, AiOutlineReload, AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { Input} from '@material-tailwind/react';
import {BsBoxArrowUpRight} from 'react-icons/bs'
import Nav from '../Components/Nav';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { useReactToPrint } from 'react-to-print';
const Bookings = ({ getBookingId }) => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    getAllBookings();
  }, []);
  const getAllBookings = async () => {
    const data = await dbdataservice.getAllBookings();
    setBookings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const deleteHandler = async (id) => {
    await dbdataservice.deleteBooking(id);
    getAllBookings();
  };
  const [searchedVal] = useState("");
  const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Booking List',
        sheet: 'Booking List'
    })
  return (
    <div className='overflow-y-auto ovaflo'>
    <Nav/>
    <div className='md:flex md:justify-between overflow-x-hidden  mb-20  mt-20 mx-5'>
        <div className='md:mx-3 md:mt-10 w-full md:ml-5'>
        <h1 className=' md:text-xl text-md font-semibold tracking-wider text-gray-700'>Booking Details</h1>
               <div className='overflow-hidden ovaflo'>
           <div className="flex my-3">
            <Link to='/addbooking' className='text-sm mx-2 hover:underline hover:font-bold'>Add</Link>
            <button className='text-sm hover:font-bold hover:underline'  onClick={getAllBookings} > Refresh</button>
            <button className='hover:font-bold mx-2 text-green-700 text-sm hover:underline'  onClick={onDownload} > Export</button>
           </div>
           <div className='bg-gray-300 w-full overflow-x-auto'>
                  <table ref={tableRef} className=''>
                       <thead className='bg-white border-b'>
                       <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                SNO
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Full Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Contact
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Email
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                HomeCounty
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Age
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Gender
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Marital
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                PGName
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                PGContact
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                EName
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                EContact
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Relation
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Institution
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                YearOfStudy
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Allocate
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Edit
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Delete
              </th>
              </tr>
                       </thead>
                       {bookings.filter((row) =>
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
              {doc.PNumber}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {doc.Email}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {doc.Homecounty}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {doc.Age}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {doc.Gender}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {doc.MaritalStatus}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {doc.PGName}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {doc.PGContact}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {doc.EName}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {doc.EContact}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {doc.Relation}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {doc.Institution}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {doc.YearOfStudy}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <Link to='/allocate'>
              <BsBoxArrowUpRight variant="outlined"  onClick={(e) => 
               getBookingId(doc.id)} className='text-xl text-[brown]'
               /></Link>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <Link to='/addbooking'>
            <AiFillEdit  onClick={(e) =>
                   getBookingId(doc.id)} className='text-xl text-[brown]'/>
            </Link>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <MdOutlineDeleteForever  onClick={(e) => 
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
  )
}

export default Bookings