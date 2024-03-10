// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Person2Icon from '@mui/icons-material/Person2';
import Location from './modals/Location';
import SearchIcon from '@mui/icons-material/Search';
import { createPortal } from "react-dom";
import Profile from './modals/Profile';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [showProfileModal,setShowProfileModal] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  // const handleClick = ()=>{
  //   setShowModal(!showModal)
    

  // }
  const openModal = ()=>{
    setShowModal(true)
  }
  const closeModal =()=>{
    setShowModal(false)
  }

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div to="/" className="text-white text-lg font-bold mr-4">
            Your Logo
          </div>
          <div className="hidden lg:block">
           
              <div className="relative">
                  <input
                  type="text"
                  placeholder="Search"
                  className="border p-3 pl-10 rounded-md w-[40rem]"
                  />
                  <SearchIcon className="absolute h-5 w-5 top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                    </div>
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleNavbar} className="text-white focus:outline-none">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className='bg-red-900 text-white w-[10rem]   rounded-md ' onClick={openModal}>
          <p>Deliver to ?</p>
            <LocationOnIcon />
        </div>
           {showModal &&  createPortal(<Location  closeModal={closeModal} />,document.body)} 
        <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <div className='block'>
          <div  className="text-white mx-2 my-1 hover:text-red-900 relative " onClick={()=>setShowProfileModal(!showProfileModal)}>
           <Person2Icon />
          </div>
          
          <div>{showProfileModal && <div className='absolute top-10 ml-[-1rem]'> <Profile  /></div>}</div>
          </div>
          
          
          <div to="/cart" className="text-white mx-2 my-1 hover:text-gray-300">
           <ShoppingCartIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
