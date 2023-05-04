import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [pageState, setPageState] = useState("Hosteller");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Hosteller");
      }
    });
  }, [auth]);

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div>
      <div className='fixed w-full top-0 z-50 px-2 bg-white py-2   '>
      <header className="flex justify-between shadow-md border-b items-center px-2w-full mx-auto">
        <div className="flex">
          <span  onClick={() => navigate("/")}
          ><h1 className="font-bold ml-1 cursor-pointer ">Pamus</h1></span>
        </div>
        <div>
          <ul className="flex space-x-5">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-700 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-700 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/login") || pathMatchRoute("/studentprofile")) &&
                "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/studentprofile")}
            >
              {pageState}
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-700 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/contactus") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/contactus")}
            >
              Contacts
            </li>'
          </ul>
        </div>
      </header>
      </div>
      <div>
<div
  className="invisible fixed bottom-0 top-0 right-0 z-[1045] flex w-96 max-w-full translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
 
  id="offcanvasRight"
  aria-labelledby="offcanvasRightLabel"
  data-te-offcanvas-init>
  <div className="flex items-center justify-between p-4">
    <h5
      className="mb-0 font-semibold leading-normal"
      id="offcanvasRightLabel">
    Pamus Hostel
    </h5>
    <button
      type="button"
      className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
      data-te-offcanvas-dismiss>
      <span
        className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
      <AiOutlineClose className='text-white font-bold text-2xl'/>
      </span>
    </button>
  </div>
  <div className="flex flex-col items-center gap-8 mt-20">
      <Link to={'/'}>Home</Link>
      <Link to={'/contactus'}>Contact Us</Link>
      <Link to={'/userprofile'}>Student</Link>
  </div>
</div>
      </div>
    </div>
  )
}

export default Navbar