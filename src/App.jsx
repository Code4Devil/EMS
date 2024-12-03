import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import TaskList from './components/TaskList/TaskList'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

 const [user, setUser] = useState(null)
 const [loggedInUserData, setLoggedInUserData] = useState(null)
 const [userData,setUserData] = useContext(AuthContext)
 


 useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')

  if(loggedInUser){
    setUser(JSON.parse(loggedInUser).role)
    setLoggedInUserData(JSON.parse(loggedInUser).data)
  }
 

 },[])
 

 




 const HandleLogin = (email,password) =>{
  if(email === 'admin@company.com' && password === '123'){
   setUser('admin')
   setLoggedInUserData(userData.admin)
   localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
   
  }
  else if(userData){
    const employee = userData.employees.find(employee => employee.email === email && employee.password === password)
    if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee' ,data:employee}))
    }
  }

  else{
    alert('invalid credentials')
      
    }
  }

 

  return (
    <>
      {!user?<Login HandleLogin={HandleLogin}/>:'' }
      {
        user === 'admin'?<AdminDashboard changeuser={setUser} data={loggedInUserData}/>:''
      
      }
      {
        user === 'employee'?<EmployeeDashboard changeuser={setUser} data={loggedInUserData}/>:''
      }
      
      {/* <EmployeeDashboard />
      <TaskList />
      <AdminDashboard /> */}
    </>

    
    
  )
}

export default App