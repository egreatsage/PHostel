import { Input, } from '@material-tailwind/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../Common/UserAuthContext';
import dbdataservice from '../../Common/Operations'
import Swal from 'sweetalert2';
const Booking = () => {
  const {user,signUp} = useUserAuth();
  const [fullname, setfullname] = useState('');
  const [contact, setcontact] = useState('');
  const [institution, setinstitution] = useState('');
  const [emmail, setemmail] = useState('');
  const [pgname, setpgname] = useState('');
  const [pgcontact, setpgcontact] = useState('');
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [loading, setloading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userId = user ? user.uid : null; 
    if (!userId) {
      return;
    } else {
      const newBooking = {
        fullname, contact, institution, emmail, pgname, pgcontact, userId
      };
      try {
        await dbdataservice.addBooking(newBooking);
        setloading(true)
        Swal.fire({
          text: 'Details Submitted',
          icon: 'success',
          timer: 6000,
          position: 'top-right',
          confirmButtonText: 'Close'
        })
      } catch (err) {
        Swal.fire({
          text: 'Problem submitting details, please try again',
          icon: 'error',
          timer: 6000,
          position: 'top-right',
          confirmButtonText: 'Close'
        })
      }
      setfullname("");
      setcontact('');
      setinstitution();
      setemmail();
      setpgname();
      setpgcontact();
    }
  };
  return (
    <div>
       {showModal && (
        <MyModal showModal={showModal} setShowModal={setShowModal} />
      )}
      <form onSubmit={handleSubmit} >
        <div className='grid md:py-6 w-full md:grid-cols-3 gap-3 overflow-x-hidden'>
        <div className='my-3'><Input
         value={fullname}
         onChange={(e)=>setfullname(e.target.value)}
        color='teal' type='text' className='text-black' variant='standard' label='Full Name' required/></div>
    <div className='my-3 flex items-center mt-9'>
    <select className='w-full border-b text-gray-600 border-b-gray-400 cursor-pointer ' id="Gender" type='text' label="Select Gender">
    <option disabled value="Select Gender">Select Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
</select>
    </div>
      <div className='my-3'><Input color='teal' type='tel' className='text-black' variant='standard' label='Phone Number'
       value={contact}
       onChange={(e)=>setcontact(e.target.value)} required/></div>
      <div className='my-3'><Input color='teal' type='text' className='text-black' variant='standard' label='Your Institution  '
       value={institution}
       onChange={(e)=>setinstitution(e.target.value)}
       required/></div>
      <div className='my-3'><Input color='teal' type='email' className='text-black' variant='standard' label='Your Email'
       value={emmail}
       onChange={(e)=>setemmail(e.target.value)}
      required/></div>
      <div className='my-3'><Input color='teal' type='text' className='text-black' variant='standard' label='Guardian/Parent Name '
       value={pgname}
       onChange={(e)=>setpgname(e.target.value)}
      required/></div>
      <div className='my-3'><Input color='teal' type='tel' className='text-black' variant='standard' label='Guardian/Parent Contact' required
       value={pgcontact}
       onChange={(e)=>setpgcontact(e.target.value)}
      /></div>
      <div className='my-3 flex items-center mt-9'>
    <select className='w-full border-b text-gray-600 border-b-gray-400 cursor-pointer ' id="Sharing" type='text' label="Room Sharing" >
    <option disabled value="Sharing">Select sharing type</option>
  <option value="Single room">Single room</option>
  <option value="Two sharing">Two sharing</option>
</select>
</div>
      <div className='my-3'><Input color='teal' type='date' className='text-black' variant='standard' label='Check In' /></div>
      
        </div>
        
        <div  className='flex justify-end '> <button type='submit' className='rounded-full bg-[green] text-white font-semibold px-3 py-1'>Submit Booking</button></div>
      </form>
    </div>
  )
}

export default Booking