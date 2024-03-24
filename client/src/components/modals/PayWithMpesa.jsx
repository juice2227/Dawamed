import React, { useState } from "react";
import axios from 'axios'

export default function PayWithMpesa({closeModal}) {
    const [phone, setPhone] = useState('')
    const [amount, setAmount] = useState('')
    const [requestSend ,setRequestSend] = useState(false)
    const handlepayment =async (e)=>{
        
        e.preventDefault()
        setRequestSend(true)
        await axios.post('http://localhost:3000/api/lipa',{phone,amount}).then(
            (response)=>{
                console.log(response)
                setRequestSend(false)
                // after sending request succesfully then close the modal
                if(response.status === '200'){
                    closeModal()
                }
                

            }
        ).catch(
            (error)=>{
                console.log(error)

            }
        )
        

    }
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <section className="bg-gray-50 dark:bg-gray-900 p-5  rounded">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Pay With Mpesa
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Phone Number
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="254 ..."
                    required=""
                  />
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Amount
                  </label>
                  <input
                    type="text"
                    name="amount"
                    id="email"
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="K sh..."
                    required=""
                  />
                </div>

                <div className="">
                  <button className="bg-green-900  text-white p-2 rounded w-[100%]" 
                  onClick={handlepayment}>
                  {requestSend?'processing ...':'Pay Now'}  
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full   text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
               onClick={closeModal} >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
