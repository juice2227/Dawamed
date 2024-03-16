// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ProgressBar from './ProgressBar';

export default function ProductsMenu() {
  const [showProgressBar, setShowProgressBar] = useState(false);

  const handlePrescriptionClick = () => {
    setShowProgressBar(!showProgressBar);
  };

  return (
    <section className='flex justify-between bg-green-600 text-white'> 
      <div className=' hover:bg-green-700 p-2 cursor-pointer'>
        <h1>Shop by Category</h1>
      </div>
      <div className='  hover:bg-green-700 p-2 cursor-pointer'>
        <h1>Shop by condition</h1>
      </div>
      <div className='  hover:bg-green-700 p-2 cursor-pointer'>
        <h1>Offers</h1>
      </div>
      <div className=' hover:bg-green-700 p-2 cursor-pointer flex items-center space-x-2 px-4 py-2' onClick={handlePrescriptionClick}>
        <h1>Submit a Prescription</h1>
        <AddCircleOutlineIcon/>
        {showProgressBar && (
          <div className="absolute top-10 ml-[-1rem]">
            <ProgressBar />
          </div>
        )}
      </div>
      <div className="flex items-center space-x-2 hover:bg-green-700  cursor-pointer ">
        <PhoneIcon className="h-5 w-5" />
        <p>Contact</p>
      </div>
      <div></div>
    </section>
  );
}
