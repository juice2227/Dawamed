import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductsMenu from "./ProductsMenu";



export default function ShoppingCart() {
  // State to store the items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (medicine) => {
    // Check if the medicine is already in the cart
    const existingItem = cartItems.find(item => item.id === medicine.id);

    if (existingItem) {
      // If the medicine is already in the cart, increase its quantity
      setCartItems(cartItems.map(item =>
        item.id === medicine.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // If the medicine is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...medicine, quantity: 1 }]);
    }
  };

  return (
    <div>
      <Navbar />
      <ProductsMenu />
      <div>
        <h1>Your Cart</h1>
        <p>Products</p>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-0 w-full">
      <Footer />
      </div>
     
    </div>
  );
}
