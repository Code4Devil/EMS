import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../Utils/LocalStorage'

export const AuthContext = createContext()


const AuthProvider = ({children}) => {

   const [userData, setUserData] = useState(null)

   useEffect(() => {
    const {employees,admin} = getLocalStorage()
    // console.log(admin)

    
    setUserData(employees,admin)
    
   

   },[])
    

  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider