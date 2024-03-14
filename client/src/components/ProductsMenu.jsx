import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function ProductsMenu() {
  return (
    <section className='flex justify-between bg-green-500 text-white ml-[2rem] mr-[2rem]'> 
            <div className=' bg-green-500 hover:bg-green-700 p-2 cursor-pointer'>
                <h1>Shop by Category</h1>
            </div>
            <div className='  hover:bg-green-700 p-2 cursor-pointer'>
                <h1>Shop by condition</h1>
            </div>
            <div className='  hover:bg-green-700 p-2 cursor-pointer'>
                <h1>Offers</h1>
            </div>
            <div className=' hover:bg-green-700 p-2 cursor-pointer flex items-center space-x-2 px-4 py-2 '>
                <h1>Submit a Prescription</h1>
                <AddCircleOutlineIcon/>
            </div>
            <div className="flex items-center space-x-2 hover:bg-green-700  cursor-pointer ">
                <PhoneIcon className="h-5 w-5" />
                    <p>Contact</p>
            </div>
            <div></div>
        </section>
  )
}
