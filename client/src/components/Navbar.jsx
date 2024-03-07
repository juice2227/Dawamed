import React, { useState } from 'react';


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
        <div className="lg:hidden">
          <button onClick={toggleNavbar} className="text-white focus:outline-none">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <div className="hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="border p-2 rounded-md"
            />
          </div>
          <div to="/profile" className="text-white mx-2 my-1 hover:text-gray-300">
            <i className="fas fa-user"></i>
          </div>
          <div to="/cart" className="text-white mx-2 my-1 hover:text-gray-300">
            <i className="fas fa-shopping-cart"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
