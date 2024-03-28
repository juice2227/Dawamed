import React, { useContext, useState } from 'react';
import B1 from '../../assets/Beuty_and_skin/B1.jpg';
import { CartContext } from '../../context/Cart';

export default function BeautyAndSkin({ handleButtonClick }) {
    const { medicineData, addToCart, cartItems } = useContext(CartContext);
    const beautyAndSkin = medicineData[0].categoryData;

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = beautyAndSkin.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(beautyAndSkin.length / productsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='grid grid-cols-4 gap-4 ml-[2rem] mr-[2rem]'>
            {currentProducts.map((item, index) => {
                const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
                const showStatusText = isItemInCart ? true : false;

                return (
                    <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-5 h-48 w-full object-cover " src={item.image} alt="product image" />
                        </a>
                        <div className="px-5 py-3">
                            <a href="#">
                                <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white"> quisquam tio exercitationem eum quod itaque nobis molestias explicabo velit sint.</h5>
                            </a>
                            <div className="flex items-center mt-2.5">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    {[...Array(4)].map((_, index) => (
                                        <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                        </svg>
                                    ))}
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                </div>
                            </div>
                            <div className="flex justify-between mt-2">
                                <span className="text-lg font-bold text-gray-900 dark:text-white">$599</span>
                               {showStatusText ? <div className="text-white hover:cursor-pointer bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleButtonClick(item)}>
                                   Added To Cart
                                </div>:
                                <div className="text-white hover:cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleButtonClick(item)}>
                                   Add To Cart
                                </div>
            }
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="col-span-4 flex justify-center mt-5">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        className={`mx-1 px-3 py-1 rounded-lg ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
