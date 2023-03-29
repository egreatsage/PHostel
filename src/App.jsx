
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Navbar from './Client/Components/Navbar'
import Booking from './Client/Pages/Booking'
import ContactUs from './Client/Pages/ContactUs'
import Home from './Client/Pages/Home'
import Login from './Client/Pages/Login'
import SignUp from './Client/Pages/SignUp'
import SNotices from './Client/Pages/SNotices'
import UserProfile from './Client/Pages/UserProfile'

import ForgotPassword from './Common/ForgotPassword'
import HostellarPr from './Routes/HostellarPr'

function App() {
  return (
  <div className=' overflow-hidden'>
     
     <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/userprofile' element={
          <HostellarPr><UserProfile/></HostellarPr> }/>
          <Route path='/booking' element={
          <HostellarPr><Booking/></HostellarPr>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/notices' element={<SNotices/>}/>
        </Routes>
       
  </div>
  
  )
}

export default App
