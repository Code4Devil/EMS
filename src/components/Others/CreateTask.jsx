import React, { useState,useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const CreateTask = () => {
  const [userData,setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [taskAssign, setTaskAssign] = useState('')
  const [taskCategory, setTaskCategory] = useState('')

  const [task, setTask] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault();
    

    setTask({taskTitle,taskDescription,taskDate,taskCategory,active:false,newTask:true,failed:false,completed:false})
    const data = userData.employees

    data.forEach(function(elem){
      if(elem.name === taskAssign){
        elem.taskCount.new += 1
        elem.tasks.push(task)
        console.log(elem)
        
      }
    })

    setUserData(data)
    localStorage.setItem('employees',JSON.stringify(data))

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setTaskAssign('')
    setTaskCategory('')

    // console.log(userData.employees)

  }
  //  console.log(task)
  //  console.log(elem)
  return (

    <div>
    <form onSubmit={(e)=>{submitHandler(e)}} className='flex bg-[#0a0a0a] p-8  mt-2 rounded-md item-start justify-between '>

    <div className='w-1/2 '>
       <div>
       <h3 className=''>Task title</h3>
       <input value={taskTitle} onChange={(e)=>{setTaskTitle(e.target.value)}} className='w-[80%] mb-6 bg-transparent p-1 rounded border-2 border-white ' type="text" placeholder='Make a Ui design' />
       </div>

       <div>
          <h3>Date</h3>
        <input value={taskDate} onChange={(e)=>{setTaskDate(e.target.value)}} className='w-[80%] mb-6 bg-transparent p-1 rounded border-2 border-white placeholder:text-gray-400 ' type="date" />
      </div>

      <div>
        <h3>Assign to</h3>
        <input value={taskAssign} onChange={(e)=>{setTaskAssign(e.target.value)}} className='w-[80%] mb-6 bg-transparent p-1 rounded border-2 border-white ' type="text" placeholder='employee name' />
      </div>

      <div>
        <h3>Catergory</h3>
        <input value={taskCategory} onChange={(e)=>{setTaskCategory(e.target.value)}} className='w-[80%] mb-6 bg-transparent p-1 rounded border-2 border-white ' type="text" placeholder='design,dev,etc' />
      </div>



    </div>

    <div className='w-1/2 flex flex-col'>
        <h3>Description</h3>
        <textarea value={taskDescription} onChange={(e)=>{setTaskDescription(e.target.value)}} className=' bg-transparent border-white border-2 mt-2 rounded-md' name="" id="" cols="30" rows="10"></textarea>
        <button className=' w-full bg-emerald-800 mt-5 py-2 rounded-md'>Create Task</button>
    </div>
      
     
       
    </form>
    </div>
  )
}

export default CreateTask