import React, { createContext, useState, useEffect } from 'react';
import medicineData from '../data/ProductsData';

export const CartContext = createContext();
console.log('medici',medicineData)

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   const storedCartItems = localStorage.getItem("cartItems");
  //   if (storedCartItems) {
  //     setCartItems(JSON.parse(storedCartItems));
  //   } else {
  //     setCartItems(medicineData); // Set cartItems to medicineData if no items are in local storage
  //     localStorage.setItem("cartItems", JSON.stringify(medicineData));
  //   }
  // }, []);
  
  console.log('context',cartItems)

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCartItems(updatedCartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        medicineData
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
