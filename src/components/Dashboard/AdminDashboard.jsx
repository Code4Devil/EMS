import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = (props) => {
  
  // console.log(props.data.email)
  return (
    <div className='text-white bg-[#000] h-screen w-full p-10 '>
        <Header changeuser={props.changeuser} data={props.data} />
       <CreateTask data={props.data} />
       <AllTask data={props.data} />
    </div>
  )
}

export default AdminDashboard