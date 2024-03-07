import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div to="/" className="text-white text-lg font-bold mr-4">
            Your Logo
          </div>
          <div className="hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="border p-2 rounded-md"
            />
          </div>
        </div>
        <div className="block">
            Deliver to?
            <LocationOnIcon />
          </div>

        <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
          
          <div to="/profile" className="text-white mx-2 my-1 hover:text-gray-300">
            <Person2Icon />
          </div>
          <div to="/profile" className="text-white mx-2 my-1 hover:text-gray-300">
            <FavoriteIcon />
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
