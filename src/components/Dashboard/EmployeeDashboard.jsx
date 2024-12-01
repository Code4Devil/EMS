import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-4 bg-[#1c1c1c] h-screen'>
        <Header />
        <TaskListNumbers />
        <TaskList />

    </div>
  )
}

export default EmployeeDashboard