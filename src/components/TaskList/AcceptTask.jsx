import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='text-white flex-shrink-0 h-full w-[350px] p-5 bg-red-500 rounded-xl '>
    <div className='flex items-center justify-between'>
        <h3 className='bg-red-600 px-2 py-1 rounded text-sm  '>{data.category}</h3>
        <h4>{data.date}</h4>
    </div>
    <h2 className='mt-5 text-xl font-bold'>{data.title}</h2>
    <p className='text-sm mt-2'>
    {data.description}
    </p>
    <div className='flex justify-between mt-5'>
        <button className='bg-green-500 px-2 py-1 rounded font-medium text-sm text-white'>Mark as Completed</button>
        <button className='bg-red-500 px-2 py-1 rounded font-medium text-sm text-white'>Mark as Failed</button>
    </div>
</div>
  )
}

export default AcceptTask