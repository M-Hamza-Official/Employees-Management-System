import React, { createContext, useEffect, useState } from 'react';
import { GetLocalStorageData } from '../utiltis/LocalStorage';

export const userContext = createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setuserdata] = useState({ employee: [], admin: [] });

  useEffect(() => {
    const { employee, admin } = GetLocalStorageData();
    if (employee && admin) {
      setuserdata({ employee, admin });
    }
  }, []);

  useEffect(() => {
    if (userdata && userdata.employee.length > 0) {
      localStorage.setItem('employees', JSON.stringify(userdata.employee));
    }
  }, [userdata]);

  return (
    <userContext.Provider value={[userdata, setuserdata]}>
      {children}
    </userContext.Provider>
  );
};

export default AuthProvider;