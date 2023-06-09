
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Booking from './Client/Pages/Booking'
import ContactUs from './Client/Pages/ContactUs'
import Home from './Client/Pages/Home'
import Login from './Client/Pages/Login'
import SignUp from './Client/Pages/SignUp'
import SNotices from './Client/Pages/SNotices'
import StudentProfile from './Client/Pages/StudentProfile'
import Reply from './Client/Pages/Reply'
import ForgotPassword from './Common/ForgotPassword'
import HostellarPr from './Routes/HostellarPr'
import AdminPr from './Routes/AdminPr'
import Rules from './Client/Pages/Rules'
import Dashboard from './Admin/Pages/Dashboard'
import Occupants from './Admin/Pages/Occupants'
import Users from './Admin/Pages/Users'
import Bookings from './Admin/Pages/Bookings'
import AddBooking from './Admin/Pages/AddBooking'
import AddOccupant from './Admin/Pages/AddOccuppant'
import Allocate from './Admin/Pages/Allocate'
import { useState } from 'react'
import UserLogin from './Client/Pages/UserLogin'
import UserSignUp from './Client/Pages/UserSignUp'
import MyProfile from './Common/MyProfile'
import SignIn from './Client/Pages/SignIn'
import MessageAdmin from './Client/Pages/MessageAdmin'
import MessageStudent from './Admin/Pages/MessageStudent'
import Rooms from './Admin/Pages/Rooms'
function App() {
  const [bookingId, setBookingId] = useState('');
  const [occupantId, setOccupantId] = useState('');
  const [roomId, setRoomId] = useState('');
  const getOccupantHandler = (id)=>{
    setOccupantId(id);
  }
  const getBookingIdHandler=(id) =>{
    setBookingId(id);
  }  
  const getRoomIdHandler=(id) =>{
    setRoomId(id);
  }  
  return (
  <div className=' overflow-hidden'>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/studentprofile' element={
          <HostellarPr><StudentProfile/></HostellarPr> }/>
          <Route path='/booking' element={
          <HostellarPr><Booking/></HostellarPr>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/rooms' element={<Rooms id={roomId} setRoomId={setRoomId} getRoomId={getRoomIdHandler}/>}/>
          <Route path='/userlogin' element={<UserLogin/>}/>
          <Route path='/usersignup' element={<UserSignUp/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/> }/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/notices' element={<SNotices/>}/>
          <Route path='/reply' element={<Reply/>}/>
          <Route path='/messagestudent' element={<MessageStudent/>}/>
          <Route path='/messageadmin' element={<MessageAdmin/>}/>
          <Route path='/rules' element={<Rules/>}/>
          <Route path='/myprofile' element={<MyProfile/>}/>
          <Route path='/occupants' element={<Occupants getOccupantId={getOccupantHandler} />}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/bookings' element={ <Bookings getBookingId={getBookingIdHandler}/>}/>
          <Route path='/addbooking' element={<AddBooking id={bookingId} setBookingId={setBookingId} />}/>
          <Route path='/addoccupant' element={<AddOccupant  id={occupantId} setOccupantId={setOccupantId} />}/>
          <Route path='/allocate' element={<Allocate id={bookingId} setBookingId={setBookingId} />}/>
        </Routes>
        </BrowserRouter>
  </div>
  
  )
}

export default App
