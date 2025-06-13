import { createContext, useState, useEffect } from 'react';

export const AssignContext = createContext();

const AssignToProvider = ({ children }) => {
  const [assignTo, setAssignTo] = useState(() => {
    return localStorage.getItem('assignTo') || '';
  });

  useEffect(() => {
    localStorage.setItem('assignTo', assignTo);
  }, [assignTo]);

  return (
    <AssignContext.Provider value={[assignTo, setAssignTo]}>
      {children}
    </AssignContext.Provider>
  );
};

export default AssignToProvider;
