import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-4 bg-[#1c1c1c] h-screen'>
        <Header changeuser={props.changeuser} data={props.data} />
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />

    </div>
  )
}

export default EmployeeDashboard