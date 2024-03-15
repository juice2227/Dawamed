import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductsMenu from "./ProductsMenu";



export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  
 // Function to handle adding items to the cart
  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <Navbar />
      <ProductsMenu />
      <div>
        <h1>Your Cart</h1>
        <p>Products</p>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
