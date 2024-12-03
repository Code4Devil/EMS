import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'




const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)
  return (
    <div id='All-task' className='bg-[#000] p-4 rounded mt-2 h-60'>
        
        <div className='bg-emerald-800 mb-2 py-5 px-4 flex justify-between rounded '>
            <h2 className='w-1/5  '>Employee Name</h2>
            <h3 className='w-1/5 '>New Task</h3>

            <h3 className='w-1/5 '>Active Task</h3>
            <h5 className='w-1/5 '>Completed</h5>
            <h5 className='w-1/5 '>Failed</h5>

        </div>

        <div id='Tasklist' className='overflow-y-auto h-[80%]'>
        {userData.employees.map(function(elem,idx){
            return (
                <div key={idx} className='bg-black border-2 border-white mb-2 py-5 px-4 flex justify-between rounded '>
                    <h2 className='w-1/5 text-white'>{elem.name}</h2>
                    <h3 className='w-1/5 text-blue-600'>{elem.taskCount.new}</h3>
                    <h3 className='w-1/5 text-yellow-400'>{elem.taskCount.active}</h3>
                    <h5 className='w-1/5 text-red-600'>{elem.taskCount.completed}</h5>
                    <h5 className='w-1/5 text-red-600'>{elem.taskCount.failed}</h5>
                </div>
            )
        })}
        </div>

       
    </div>

  )
}

export default AllTask