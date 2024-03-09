// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Person2Icon from '@mui/icons-material/Person2';
import Location from './modals/Location';
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = ()=>{
    setShowModal(!showModal)
    

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
                  className="border p-2 pl-10 rounded-md w-[40rem]"
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
        <div className='bg-red-900 text-white w-[10rem]   rounded-md ' onClick={handleClick}>
          <p>Deliver to ?</p>
            <LocationOnIcon />
        </div>
           {showModal && <Location showModal={showModal} />} 
        <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
          
          <div to="/profile" className="text-white mx-2 my-1 hover:text-gray-300">
           <Person2Icon />
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
