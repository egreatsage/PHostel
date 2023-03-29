import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUserAuth } from '../../Common/UserAuthContext';
import dbdataservice from '../../Common/Operations'
const Booking = () => {

    const {user} = useUserAuth();
    const [FName, setFName] = useState('');
    const [LName, setLName] = useState('');
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
      e.preventDefault();
      let userId = user.uid;
      if (FName === "" || LName === "") {
       toast.error('All fields required')
        return;
      }
      const newBooking = {
       FName,LName,Gender,PNumber,PGContact,Age,PGName,
       EName,EContact,Relation,Institution,YearOfStudy,
       MaritalStatus,Homecounty,userId,email,PGEmail,EEmail
      };
      try {
          await dbdataservice.addBooking(newBooking);
          toast.success('Details Submitted Succeddfully')
            navigate('/reply');
      } catch (err) {
       toast.error('Problem Adding Details')
      }
      setFName(""); setLName("");setGender("");setPGContact("");setPNumber("");
      setAge("");setPGName(""); setEName(''); setEContact(''); setRelation(''); 
      setInstitution(''); setMaritalStatus('');setPGEmail('');
      setYearOfStudy(''); setHomecounty('');setEmail("");setEEmail('');
      
    };
  return (
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
              value={LName} 
              onChange={(e)=>setLName(e.target.value)} required
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
             value={email} 
             onChange={(e)=>setEmail(e.target.value)} required
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
             <button className='bg-indigo-700 px-4 py-1 rounded-md hover:bg-indigo-800 text-white'>Submit</button>
         </div>
         </form> 
    </div>
  )
}

export default Booking