import React, { useContext, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { CartContext } from '../../context/Cart';

export default function AddToCart({closeModal,medicine}) {
  const {addToCart} = useContext(CartContext)
  const [showLoader,setShowloader] = useState(false)

  const handleAddToCart = (medicine) => {
    setShowloader(true)
    setTimeout(()=>{
     
      closeModal()
    },2000)
    // add to cart from context
    addToCart(medicine)
    
  };
  return (
    <div className=' bg-white  fixed top-0 left-0 w-full h-full flex items-center justify-center'>
      <div className='bg-white w-96 p-8 rounded-md shadow-lg'>
        <div className='bg-green-500 flex justify-between p-4 rounded-t-md'>
          <div>
            <h1 className='text-white font-semibold'>Add to Cart</h1>
          </div>
          <div onClick={closeModal} className='cursor-pointer text-white'>
            x
          </div>
        </div>
        

        <button onClick={handleAddToCart(medicine)} className='bg-blue-500 rounded w-[100%] mt-[1rem] text-white p-2'> <span className='text-white'>
        {showLoader?'Adding to cart ...':<div> <AddIcon /> Add to Cart</div>  } </span> 
           </button>
        
      </div>
    </div>
  )
}
