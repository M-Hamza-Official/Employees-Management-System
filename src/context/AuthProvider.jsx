import React, { createContext, useEffect, useState } from 'react';
import { GetLocalStorageData, SetLocalStorageData } from '../utiltis/LocalStorage';

export const userContext = createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setuserdata] = useState(() => {
    const stored = localStorage.getItem('userdata');
    return stored ? JSON.parse(stored) : null;
  });
  const [canShow, setcanShow] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('userdata');
    if (!stored) {
      // Only seed data ONCE if not present
      SetLocalStorageData();
      const { employee, admin } = GetLocalStorageData();
      const initial = { employee, admin };
      setuserdata(initial);
      localStorage.setItem('userdata', JSON.stringify(initial));
    }
  }, []);

  useEffect(() => {
    // Persist changes whenever userdata updates
    if (userdata) {
      localStorage.setItem('userdata', JSON.stringify(userdata));
    }
  }, [userdata]);

  return (
    <userContext.Provider value={[userdata, setuserdata,canShow,setcanShow]}>
      {children}
    </userContext.Provider>
  );
};

export default AuthProvider;
