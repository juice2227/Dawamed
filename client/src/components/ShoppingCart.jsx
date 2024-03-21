import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductsMenu from "./ProductsMenu";
import { CartContext } from "../context/Cart";
import { useContext, useEffect, useState } from 'react'



export default function ShoppingCart() {
  const {cartItems} = useContext(CartContext)


  return (
    <div>
      <Navbar />
      <ProductsMenu />
      <div>
        <h1>Your Cart</h1>
        <p>Products</p>
        {cartItems.length <= 0?"Your cart is empty": <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>}
       
      </div>
      <div className="absolute bottom-0 w-full">
      <Footer />
      </div>
     
    </div>
  );
}
