// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Location from "./modals/Location";
import SearchIcon from "@mui/icons-material/Search";
import { createPortal } from "react-dom";
import Profile from "./modals/Profile";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  // const handleClick = ()=>{
  //   setShowModal(!showModal)

  // }
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const navigate = useNavigate()
  return (
    <nav className=" p-4 ml-[1rem] ">
      
        <div className="flex items-center justify-between">
          <div to="/" className=" text-lg font-bold mr-4">
            Your Logo
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border p-3 pl-10 rounded-md w-[30rem]"
              />
              <SearchIcon className="absolute h-5 w-5 top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div
          className="bg-red-900 text-white w-[10rem]   rounded-md "
          onClick={openModal}
        >
          <p>Deliver to ?</p>
          <LocationOnIcon />
        </div>
        {showModal &&
          createPortal(<Location closeModal={closeModal} />, document.body)}
        <div
          className={`lg:flex lg:items-center ${isOpen ? "block" : "hidden "}`}
        >
        </div>
        {/* <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div> */}
        
          <div className="block">
            <div
              className="text-red-900 mx-2 my-1 hover:text-gray-300 relative "
              onClick={() => setShowProfileModal(!showProfileModal)}
            >
              <AccountCircleIcon fontSize="large" />
            </div>

            <div>
              {showProfileModal && (
                <div className="absolute top-10 ml-[-1rem]">
                  {" "}
                  <Profile />
                </div>
              )}
            </div>
          </div>
          <div className="text-red-900 mx-2 my-1 hover:text-gray-300">
            <FavoriteBorderIcon fontSize="large" />
          </div>

          <div
            to="/cart"
            className="text-red-900 mx-2 my-1 hover:text-gray-300"
            onClick={()=>navigate('/cart')}
          >
            <ShoppingCartOutlinedIcon fontSize="large" />
          </div>
        </div>
      
    </nav>
  );
};

export default Navbar;
