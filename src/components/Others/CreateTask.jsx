import React from 'react'

const CreateTask = () => {
  return (
    <div>
    <form className='flex bg-[#0a0a0a] p-10  mt-5 rounded-md item-start justify-between '>

    <div className='w-1/2 '>
       <div>
       <h3 className=''>Task title</h3>
       <input className='w-[80%] mb-6 bg-transparent p-1 rounded border-2 border-white ' type="text" placeholder='Make a Ui design' />
       </div>

       <div>
          <h3>Date</h3>
        <input className='w-[80%] mb-6 bg-transparent p-1 rounded border-2 border-white placeholder:text-gray-400 ' type="date" />
      </div>

      <div>
        <h3>Assign to</h3>
        <input className='w-[80%] mb-6 bg-transparent p-1 rounded border-2 border-white ' type="text" placeholder='employee name' />
      </div>

      <div>
        <h3>Catergory</h3>
        <input className='w-[80%] mb-6 bg-transparent p-1 rounded border-2 border-white ' type="text" placeholder='design,dev,etc' />
      </div>



    </div>

    <div className='w-1/2 flex flex-col'>
        <h3>Description</h3>
        <textarea className=' bg-transparent border-white border-2 mt-2 rounded-md' name="" id="" cols="30" rows="10"></textarea>
        <button className=' w-full bg-emerald-400 mt-5 py-2 rounded-md'>Create Task</button>
    </div>
      
     
       
    </form>
</div>
  )
}

export default CreateTask