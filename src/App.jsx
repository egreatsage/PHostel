
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Booking from './Client/Pages/Booking'
import ContactUs from './Client/Pages/ContactUs'
import Home from './Client/Pages/Home'
import Login from './Client/Pages/Login'
import SignUp from './Client/Pages/SignUp'
import SNotices from './Client/Pages/SNotices'
import UserProfile from './Client/Pages/UserProfile'
import Reply from './Client/Pages/Reply'
import ForgotPassword from './Common/ForgotPassword'
import HostellarPr from './Routes/HostellarPr'
import Rules from './Client/Pages/Rules'
import { ToastContainer } from 'react-toastify'
import Dashboard from './Admin/Pages/Dashboard'
import Occupants from './Admin/Pages/Occupants'
function App() {
  return (
  <div className=' overflow-hidden'>
     
   
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/userprofile' element={
          <HostellarPr><UserProfile/></HostellarPr> }/>
          <Route path='/booking' element={
          <HostellarPr><Booking/></HostellarPr>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/notices' element={<SNotices/>}/>
          <Route path='/reply' element={<Reply/>}/>
          <Route path='/rules' element={<Rules/>}/>
          <Route path='/occupants' element={<Occupants/>}/>
        </Routes>
        </BrowserRouter>
  </div>
  
  )
}

export default App
