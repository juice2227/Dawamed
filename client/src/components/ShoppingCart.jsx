import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductsMenu from "./ProductsMenu";
import { CartContext } from "../context/Cart";
import { useContext, useEffect, useState } from 'react'



export default function ShoppingCart() {
  const {cartItems,removeFromCart,clearCart} = useContext(CartContext)


  return (
    <div>
      <Navbar />
      <ProductsMenu />
      <div className="border p-3">
        <div className="flex justify-between p-5 ">
        <div>  <h1 className="font-bold text-lg">Your Cart</h1></div>
        <div> {cartItems.length >0 && <div><button className="bg-red-500 p-2 rounded" onClick={()=>clearCart()}>Clear cart</button></div>}</div>
        </div>
        
      
        {cartItems.length <= 0? <h1 className="text-red-500">Your cart is empty</h1>:
         <div className="flex flex-col  shadow-2xl">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between border p-5">
              <div className="border"><img src={item.image} className="object-cover" /></div>
              <div><p>{item.quantity}</p></div>
              <div className="" ><button className="p-2 rounded text-white bg-red-500" onClick={()=>removeFromCart(item)}>remove from cart</button></div>
            </div>
          ))}
        </div>} 
       
      </div>
     {cartItems.length <=0 ? <div className="absolute bottom-0  w-full">
      <Footer />
      </div>:
      <div className="w-full"><Footer /></div>
          }
     
    </div>
  );
}
