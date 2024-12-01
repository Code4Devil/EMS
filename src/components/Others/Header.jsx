import React from 'react'

const Header = () => {
  return (
    <div className=' text-white flex items-end justify-between'>
        <h1 className='font-medium text-2xl text-white'>Hello <br /> <span className='text-3xl font-semibold'>Kartik👋</span>  </h1>
        <button className='bg-red-500 px-4 py-2 rounded font-medium text-lg text-white'>Log Out</button>
    </div>
  )
}

export default Header