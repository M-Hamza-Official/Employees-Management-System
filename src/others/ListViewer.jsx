import React, { useContext } from 'react'
import { userContext } from '../context/AuthProvider'



const ListViewer = () => {

    const [userdata, setuserdata] = useContext(userContext)
    return (
        <>
            {console.log(userdata?.employee)}

            <div className='flex  text-white bg-red-600 mt-4 px-4 py-2 justify-between text-xl rounded-md' >
                <h2 className='w-1/6' >Name</h2>
                <h2>ActiveTask</h2>
                <h2>completeTask</h2>
                <h2>NewTask</h2>
                <h2>FailedTask</h2>
            </div>
            <div id='listviewer-wrapper' className='overflow-auto  h-[23%] bg-gray-600 mt-2 rounded-md p-3' >
                {userdata?.employee?.map((elm, index) => {
                    const activeCount = elm.tasks.filter(task => task.active).lenghth || elm.activeCount;
                    const completedCount = elm.tasks?.filter(task => task.completed).length || elm.completedCount;
                    const newTaskCount = elm.tasks?.filter(task => task.newTask).length || elm.newTaskCount;
                    const failedCount = elm.tasks?.filter(task => task.failed).length || elm.failedCount;
                    return (
                        <div key={index} className='flex items-start text-white overflow-auto  bg-blue-500 mt-2 px-4 py-2 justify-between text-xl rounded-md' >
                            <h2 className='w-1/6' >{elm.firstname}</h2>
                            <h2>{activeCount}</h2>
                            <h2>{completedCount}</h2>
                            <h2>{newTaskCount}</h2>
                            <h2>{failedCount}</h2>
                        </div>
                    )
                })}
            </div>




        </>
    )
}

export default ListViewer