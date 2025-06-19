import React, { createContext, useEffect, useState } from 'react';
import { GetLocalStorageData, SetLocalStorageData } from '../utiltis/LocalStorage';

export const userContext = createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setuserdata] = useState(() => {
      const stored = localStorage.getItem('userdata');
      const parsed = stored ? JSON.parse(stored) : null;
      

  });
  
    useEffect(() => {
        SetLocalStorageData()
        const {employee , admin} = GetLocalStorageData()
        setuserdata({employee,admin})
    }, [])




  return (
    <userContext.Provider value={[userdata, setuserdata]}>
      {children}
    </userContext.Provider>
  );
};

export default AuthProvider;
