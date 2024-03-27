

import React,{useContext, useState} from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CartContext } from '../context/Cart';

const MedicineCarousel = ({handleButtonClick,showStatusText }) => {
  const {cartItems,medicineData} = useContext(CartContext)
  
  const beautyAndSkin = medicineData[0].categoryData
  

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set the auto-scroll speed (milliseconds)
  };


  return (
    <Slider {...settings} className='overflow-y-hidden overflow-x-hidden pl-[1rem]' >
      {beautyAndSkin.map((medicine, index) => (
        <div key={index} className="p-4">
          {/* Medicine Card */}
          <div className=" rounded items-center shadow  w-[80%] pl-[20%] ">
            <img
              src={medicine.image}
              alt={medicine.name}
              className=" h-32 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{medicine.name}</h3>
            <p className="text-gray-500">{medicine.description}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>handleButtonClick(medicine)}>
            {showStatusText ?'Added to cart':'Add To Cart'}  
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MedicineCarousel;
