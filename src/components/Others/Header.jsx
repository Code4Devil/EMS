import React, { useState } from 'react'

const Header = (props) => {

  const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('Hello Admin')
  // }
  // else{
  //   setUsername(`Hello ${data.name}`)
  // }

  // console.log(data)
  const HandleLogout = () =>{
    localStorage.removeItem('loggedInUser')
    props.changeuser('')

    
  }

  // console.log(data)

  return (

    <div className=' text-white flex items-end justify-between'>
      
        <h1 className='font-medium text-2xl text-white'>Hello <br /> <span className='text-3xl font-semibold'>username👋</span>  </h1>
        <button onClick={HandleLogout} className='bg-red-500 px-4 py-2 rounded font-medium text-lg text-white'>Log Out</button>
    </div>
  )
}

export default Header