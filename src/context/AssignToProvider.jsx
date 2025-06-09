import React, { createContext, useState } from 'react'

export const AssignContext = createContext()

const AssignProvider = ({ children }) => {
  const [assignTo, setAssignTo] = useState('')

  return (
    <AssignContext.Provider value={[assignTo, setAssignTo]}>
      {children}
    </AssignContext.Provider>
  )
}

export default AssignProvider
