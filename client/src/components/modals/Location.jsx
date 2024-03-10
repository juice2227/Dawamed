
import { useRef, useEffect } from "react";

export default function Location({ closeModal }) {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center'>
      <div className='bg-white w-96 p-8 rounded-md shadow-lg'>
        <div className='bg-green-500 flex justify-between p-4 rounded-t-md'>
          <div>
            <h1 className='text-white font-semibold'>Enter delivery location</h1>
          </div>
          <div onClick={closeModal} className='cursor-pointer text-white'>
            x
          </div>
        </div>
        <form className='mt-4'>
          <label className='block text-gray-700'>Search Address</label>
          <input
            type='text'
            placeholder='Enter a location'
            className='w-full mt-1 p-2 border rounded-md'
          />
        </form>
        <div className='flex justify-end mt-4'>
          <button
            onClick={closeModal}
            className='px-4 py-2 bg-green-500 text-white rounded-md'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
