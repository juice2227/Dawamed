
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductsMenu from "./ProductsMenu";
import { CartContext } from "../context/Cart";
import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PayWithMpesa from "./modals/PayWithMpesa";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ShoppingCart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [showModal , setShowModal] = useState(false)
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);
const closeModal = ()=>{
  setShowModal(false)
}
  return (
    <div>
      <Navbar />
      <ProductsMenu />
      <div className="border shadow-2xl p-3">
        <div className="flex justify-between p-5 ">
          <div>
            {" "}
            <h1 className="font-bold text-lg">Your Cart</h1>
          </div>
          <div>
            {" "}
            {cartItems.length > 0 && (
              <div>
                <button
                  className="bg-red-500 p-2 rounded"
                  onClick={() => clearCart()}
                >
                  Clear cart
                </button>
              </div>
            )}
          </div>
        </div>

        {cartItems.length <= 0 ? (
          <h1 className="text-red-500">Your cart is empty</h1>
        ) : (
          <div className="flex flex-col  ">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between border p-5">
                <div className="border">
                  <img src={item.image} className="object-cover"height={50} width={50}/>
                </div>
                <div>
                  <p>{item.quantity}</p>
                </div>
                <div className="">
                  <button
                    className="p-2 rounded text-white bg-red-500"
                    onClick={() => removeFromCart(item)}
                  >
                    remove from cart
                  </button>
                </div>
                <div >
                  <button  className="p-2 rounded text-white bg-red-500" onClick={() => increaseQuantity(item)}><AddIcon/></button>
                  <button className="p-2 rounded text-white bg-green-500" onClick={() => decreaseQuantity(item)}><RemoveIcon/></button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between mt-3 mr-3">
          <span></span>
          <button
            type="button"
            className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2"
          onClick={()=>setShowModal(true)}>
            
            Checkout Now
          </button>


          {showModal && createPortal(<PayWithMpesa closeModal={closeModal} />,document.body)}
        </div>
      </div>
      {cartItems.length <= 0 ? (
        <div className="absolute bottom-0  w-full">
          <Footer />
        </div>
      ) : (
        <div className="w-full">
          <Footer />
        </div>
      )}
    </div>
  );
}
