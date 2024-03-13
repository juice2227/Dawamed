import React from 'react'

export default function AddToCart({closeModal}) {
  return (
    <div className=' bg-white  fixed top-0 left-0 w-full h-full flex items-center justify-center'>
      <div className='bg-white w-96 p-8 rounded-md shadow-lg'>
        <div className='bg-green-500 flex justify-between p-4 rounded-t-md'>
          <div>
            <h1 className='text-white font-semibold'>Enter Quantity</h1>
          </div>
          <div onClick={closeModal} className='cursor-pointer text-white'>
            x
          </div>
        </div>
        <form className='mt-4'>
          <label className='block text-gray-700'>Quantity</label>
          <input
            type='text'
            placeholder='1'
            className='w-full mt-1 p-2 border rounded-md outline-none'
          />
        </form>
        <button className='bg-blue-500 rounded w-[100%] mt-[1rem] text-white p-2'>Add To cart</button>
        {/* <div className='flex justify-end mt-4'>
          <button
            onClick={closeModal}
            className='px-4 py-2 bg-green-500 text-white rounded-md'
          >
            Close
          </button>
        </div> */}
      </div>
    </div>
  )
}
