import React from 'react'
import Header from '../others/header'
import CreateTask from '../others/CreateTask'
import ListViewer from '../others/ListViewer'

const AdminDashboard = ({logout}) => {
    return (
        <div className='bg-[#1c1c1c] h-screen w-full px-4 ' >
            <Header logout={logout}  />
           <CreateTask/>
           <ListViewer/>
        </div>
    )
}

export default AdminDashboard