import React, { useState,useEffect } from 'react'
import { Input} from "@material-tailwind/react";
import dbdataservice from '../../Common/Operations';
import { useNavigate } from 'react-router-dom';
import Nav from '../Components/Nav';
import { toast } from 'react-toastify';
const BookingsAllocate = ({ id, setBookingId ,setOccupantI}) => {
  const [FName, setFName] = useState('');
  const [PNumber, setPNumber] = useState('');
  const [Gender, setGender] = useState('');
  const [Age, setAge] = useState('');
  const [RoomNo, setRoomNo] = useState('');
  const [MaritalStatus, setMaritalStatus] = useState('');
  const [EntryDate, setEntryDate] = useState('');
  const [ExitDate, setExitDate] = useState('');
  const [userId, setuserId] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (FName === "" || Gender === "" || RoomNo === "" || EntryDate === "" || ExitDate === ""    ) {
     toast.success('Fill in all spaces')
      return;
    }
    const newOccupant= {
      FName,Gender,Age,PNumber,RoomNo,EntryDate,ExitDate,userId  
    };
    try {
        await dbdataservice.addOccupant(newOccupant);
        setTimeout(() => {
          navigate('/occupants');
      }, 3000);
       toast.success('room added successfully')
    } catch (err) {
      toast.error('problem adding room')
    }  
  };
  const editHandler = async () => {
    toast.success('room edited successfully')
    try {
      const docSnap = await EmployeeDataService.getBooking(id);
      setFName(docSnap.data().FName);
      setGender(docSnap.data().Gender);
      setPNumber(docSnap.data().PNumber);
      setAge(docSnap.data().Age);
      setuserId(docSnap.data().userId);
    } catch (err) {
      toast.error('problem editing a room')
    }
  };
  useEffect(() => {
    if (id !== undefined && id !== "") {
      editHandler();
    }   //eslint-disable-next-line
  }, [id]);
  return (
    <div>
      <div><Nav/></div>
      <div className='pb-9 mb-9 overflow-y-auto bg-[#FAFBFB]'>
  <div className='mb-9'>
      <p className='text-xl text-gray-600 text-center'>Allocation Of Rooms</p>
  <div>
  <form onSubmit={handleSubmit} className='my-6 overflow-y-auto'  >
  <div className="md:mx-4 mx-2">
    
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
    <label className='tracking-tighter'>Marital Status</label>
     <input type="text" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' 
      value={MaritalStatus} 
      onChange={(e)=>setMaritalStatus(e.target.value)} required
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
</div>
    </div>
  )
}

export default BookingsAllocate