
import React, { useContext, useState } from 'react'
import MedicineCouresel from './MedicineCouresel'
import Offers from './Offers';

//import PhoneIcon from '@mui/icons-material/Phone';
//import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import ProductsMenu from './ProductsMenu';
import chestcough from '../assets/hero/chest-cough.jpg'
import AddToCart from './modals/AddToCart';
import { CartContext } from '../context/Cart';
import BeautyAndSkin from './categories/BeautyAndSkin';

export default function Hero() {
  const [showStatusText,setShowStatusText] = useState(false)
  
  const {addToCart} = useContext(CartContext)
 
  const handleButtonClick = (medicine)=>{
  
    addToCart(medicine)
    setTimeout(()=>{
      setShowStatusText(true)
    },2000)
  
  }
 
      
  return (
    <div>
        
            
          <ProductsMenu />  
            
            
        <section  style={{ overflowX: 'hidden' }} className='w-full  '>
            <MedicineCouresel   handleButtonClick={handleButtonClick} showStatusText={showStatusText}/>
        </section>
        <h1 className='text-center justify-center items-center p-2'>Beauty And Skin</h1>
        <section><BeautyAndSkin handleButtonClick={handleButtonClick} /></section>


        <section>
            <h1 className='text-center text-[2rem]'>Offers</h1>
            <Offers />
        </section>
    </div>
  )
}
