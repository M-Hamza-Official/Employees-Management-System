import React from 'react'
import Header from '../others/header'
import TaskCounter from '../others/TaskCounter'
import TaskList from '../others/TaskList'

const EmployeDashboard = ({data , logout}) => {
  return (
    <>
    <div className='bg-[#1c1c1c] h-screen'>

    <Header logout={logout} data={data} />
    <TaskCounter   />
    <TaskList  data={data} />
    </div>
    
    </>
  )
}

export default EmployeDashboard