import React, { useContext } from 'react';
import { userContext } from '../context/AuthProvider';

const TaskCounter = ({ data }) => {
    const [userdata] = useContext(userContext);

    if (!data) return null; // Guard if parent does not pass correct data

    return (
        <div className='text-white flex gap-5 p-4'>
            <div className='bg-green-500 w-[45%] p-9 rounded-md mt-8'>
                <h1 className='text-xl'>{data.newTaskCount}</h1>
                <h1 className='text-xl'>New Task</h1>
            </div>
            <div className='bg-blue-400 w-[45%] p-9 rounded-md mt-8'>
                <h1 className='text-xl'>{data.completedCount}</h1>
                <h1 className='text-xl'>Completed Task</h1>
            </div>
            <div className='bg-red-400 w-[45%] p-9 rounded-md mt-8'>
                <h1 className='text-xl'>{data.failedCount}</h1>
                <h1 className='text-xl'>Failed Task</h1>
            </div>
            <div className='bg-yellow-500 w-[45%] p-9 rounded-md mt-8'>
                <h1 className='text-xl'>{data.activeCount}</h1>
                <h1 className='text-xl'>Active Task</h1>
            </div>
        </div>
    );
};

export default TaskCounter;