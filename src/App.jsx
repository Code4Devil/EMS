import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import TaskList from './components/TaskList/TaskList'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

 const [user, setUser] = useState(null)


 const HandleLogin = (email,password) =>{
  if(email === 'admin@company.com' && password === '123'){
    console.log('admin')
    setUser('admin')

  }
  else if(email === 'employee@company.com' && password === '123'){
    console.log('employee')
    setUser('employee')
  }

  else{
    alert('invalid credentials')
      
    }
  }

  const userData = useContext(AuthContext)
  console.log(userData)

  return (
    <>
      {!user?<Login HandleLogin={HandleLogin}/>:'' }
      {
        user === 'admin'?<AdminDashboard/>:''
      }
      {
        user === 'employee'?<EmployeeDashboard/>:''
      }
      
      {/* <EmployeeDashboard />
      <TaskList />
      <AdminDashboard /> */}
    </>
    
  )
}

export default App