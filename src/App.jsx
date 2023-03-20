
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Client/Components/Navbar'
import ContactUs from './Client/Pages/ContactUs'
import Home from './Client/Pages/Home'
function App() {
  return (
  <div className=' overflow-hidden'>
     
     <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
        </Routes>
  </div>
  
  )
}

export default App
