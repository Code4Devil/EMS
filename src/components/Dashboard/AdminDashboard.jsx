import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = () => {
  return (
    <div className='text-white bg-[#000] h-screen w-full p-10 '>
        <Header />
       <CreateTask />
       <AllTask />
    </div>
  )
}

export default AdminDashboard