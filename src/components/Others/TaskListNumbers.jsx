import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5'>
      <div className='w-[45%] px-10  rounded-xl py-6 bg-red-500'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.new}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] px-10  rounded-xl py-6 bg-blue-500'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='w-[45%] px-10  rounded-xl py-6 bg-green-500'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
      <div className='w-[45%] px-10  rounded-xl py-6 bg-yellow-500'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Active Task</h3>
      </div>

    </div>
  )
}

export default TaskListNumbers