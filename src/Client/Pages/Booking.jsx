import React from 'react'

const Booking = () => {
  return (
    <div className='mt-20 overflow-x-hidden'>
        <form>
         <div className="md:mx-4 mx-2">
             <h1 className="text-xl font-semibold my-4">
                Personal Information
             </h1>
             <div className='grid md:grid-cols-3 gap-2'>
            <div>
            <label className='tracking-tighter'>Full Name</label>
             <input type="text" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' />
            </div>
            <div>
            <label className='tracking-tighter'>Phone Number</label>
             <input type="tel" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' />
            </div>
            <div>
            <label className='tracking-tighter'>Email</label>
             <input type="email" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' />
            </div>
            <div>
            <label className='tracking-tighter'>Home County</label>
             <input type="address" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' />
            </div>
            <div>
            <label className='tracking-tighter'>Age</label>
             <input type="number" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' />
            </div>
            <div>
            <label className='tracking-tighter'>Gender</label>
             <input type="text" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' />
            </div>
            <div>
            <label className='tracking-tighter'>Marital Status</label>
             <input type="text" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' />
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
             <input type="text" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' />
            </div>
            <div>
            <label className='tracking-tighter'>Phone Number</label>
             <input type="tel" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' />
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
             <input type="text" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' />
            </div>
            <div>
            <label className='tracking-tighter'>Phone Number</label>
             <input type="tel" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' />
            </div>

            <div>
            <label className='tracking-tighter'>Relation</label>
             <input type="text" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' />
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
             <input type="text" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' />
            </div>
            <div>
            <label className='tracking-tighter' >Current Year Of Study</label>
             <input type="tel" className='border border-gray-500 my-3 rounded-md w-full px-3 py-1' />
            </div>
             </div>
         </div> 
         <div className='flex justify-end mx-2 mr-5 my-8'>
             <button type='submit' className='bg-indigo-700 px-4 py-1 rounded-md hover:bg-indigo-800 text-white'>Submit</button>
         </div>
         </form> 
    </div>
  )
}

export default Booking