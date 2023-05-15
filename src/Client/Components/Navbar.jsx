import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Navbar, MobileNav, Typography,Button, IconButton,} from "@material-tailwind/react";
const Navbarr = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const [ pageState, setPageState] = useState("Hosteller");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
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
  const navList = (
    <ul className="md:flex justify-start text-black block space-x-5 mt-0 bg-white pr-52 md:pr-0">
      <div className='my-5 md:my-0 text-md text-gray-700 hover:text-shadow-lg hover:text-black'> <Link to={'/'}>Home</Link></div>
      <div className='my-5 md:my-0 text-md text-gray-700 hover:text-shadow-lg hover:text-black'> <Link to={'/'}>Hosteller</Link></div>
      <div className='my-5 md:my-0 text-md text-gray-700 hover:text-shadow-lg hover:text-black'> <Link to={'/'}>Contacts</Link></div>
    
          
          </ul> 
  
  );
 
  return (
  <div>
     <>
      <Navbar className="fixed inset-0 z-10 h-max max-w-full rounded-none  px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Le Pamus
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden  lg:block">{navList}</div>
          
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-black  lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
              
              <AiOutlineClose/>
              ) : (
                <AiOutlineMenu/>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav className='bg-white' open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
    
    </>
  </div>
  )
}

export default Navbarr