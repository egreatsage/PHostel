import React, { useEffect, useState } from 'react'
import {Input} from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom';
import dbdataservice from '../../Common/Operations';
import Nav from '../Components/Nav';
import { toast } from 'react-toastify';
const AddOccupant = ({ id, setOccupantId }) => {
  const [FName, setFName] = useState('');
  const [PNumber, setPNumber] = useState('');
  const [Gender, setGender] = useState('');
  const [RoomNo, setRoomNo] = useState('');
  const [EntryDate, setEntryDate] = useState('');
  const [ExitDate, setExitDate] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (FName === ""  ||RoomNo ==="") {
      toast.error('Missing fields')
      return;
    }
    const newOccupant= {
     FName,Gender,PNumber,EntryDate,RoomNo,ExitDate     
    };
    try {
      if (id !== undefined && id !== "") {
        await dbdataservice.updateOccupant(id, newOccupant);
        setOccupantId("");
        toast.success('Updated successfully')
       
          navigate('/occupants');
    
      } else {
        await dbdataservice.addOccupant(newOccupant);
        toast.success('New Occupant added successfully')
        navigate('/occupants');
      }
    } catch (err) {
      toast.success('problem adding occupant')
    }
    setFName(""); ;setGender("");setEntryDate("");setPNumber("");
    setRoomNo("");setExitDate("");
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
      toast.success('Error Editing')
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
        <Nav/>
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
  )
}

export default AddOccupant