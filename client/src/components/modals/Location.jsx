import React from 'react'

export default function Location(handleClick) {
  return (
    <div>
        <div className='bg-green-500 flex justify-between'>
          <div><h1>Enter deliver location</h1></div>
          <div onClick={handleClick}>x</div>
            
            
        </div>
        <form>
            <label>Search Address</label>
            <input placeholder='Enter a location' />
        </form>

        <button onClick={handleClick}>close</button>
        </div>
  )
}
