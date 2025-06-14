import React, { createContext, useEffect, useState } from 'react';

export const userContext = createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setuserdata] = useState(() => {
    // Load from localStorage on first render
    const storedData = localStorage.getItem('userdata');
    return storedData
      ? JSON.parse(storedData)
      : { employee: [], admin: {} };
  });

  useEffect(() => {
    // Save to localStorage whenever userdata changes
    if (userdata) {
      localStorage.setItem('userdata', JSON.stringify(userdata));
    }
  }, [userdata]);

  return (
    <userContext.Provider value={[userdata, setuserdata]}>
      {children}
    </userContext.Provider>
  );
};

export default AuthProvider;
