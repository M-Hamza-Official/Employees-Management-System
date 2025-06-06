import React, { createContext, useEffect, useState } from 'react'
import { GetLocalStorageData } from '../utiltis/LocalStorage'
export  const userContext = createContext()
const AuthProvider = ({ children }) => {
  const [userdata, setuserdata] = useState(null)
  useEffect(() => {
    const { employee, admin } = GetLocalStorageData();
    setuserdata({ employee, admin })
  }, [])
  return (
    <userContext.Provider value={[userdata,setuserdata]} >
      <div>{children}</div>
    </userContext.Provider>
  )
}

export default AuthProvider