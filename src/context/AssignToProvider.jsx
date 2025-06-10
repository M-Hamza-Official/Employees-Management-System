import React, { createContext, useState } from 'react'

export const AssignContext = createContext()

const AssignProvider = ({ children }) => {
  const [assignTo, setAssignTo] = useState('')
  const [isCompleted, setisCompleted] = useState('')

  return (
    <AssignContext.Provider value={[assignTo, setAssignTo,isCompleted,setisCompleted]}>
      {children} 
    </AssignContext.Provider>
  )
}

export default AssignProvider
