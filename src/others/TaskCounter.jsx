import React, { useContext } from 'react';
import { userContext } from '../context/AuthProvider';

const TaskCounter = () => {
  const [userdata] = useContext(userContext);

  // Get logged-in user info from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem('LoggedinUser'));

  // Find the current employee from context using ID
  const currentEmployee = userdata?.employee?.find(
    e => e.id === loggedInUser?.data?.id
    
  );

  if (!currentEmployee) return null;

  return (
    <div className='text-white w-full flex  gap-5 p-4'>
      <div className='bg-green-500 w-[45%] p-9 rounded-md mt-8'>
        <h1 className='text-xl'>{currentEmployee.newTaskCount ?? 0}</h1>
        <h1 className='text-xl'>New Task</h1>
      </div>
      <div className='bg-blue-400 w-[45%] p-9 rounded-md mt-8'>
        <h1 className='text-xl'>{currentEmployee.completedCount ?? 0}</h1>
        <h1 className='text-xl'>Completed Task</h1>
      </div>
      <div className='bg-red-400 w-[45%] p-9 rounded-md mt-8'>
        <h1 className='text-xl'>{currentEmployee.failedCount ?? 0}</h1>
        <h1 className='text-xl'>Failed Task</h1>
      </div>
      <div className='bg-yellow-500 w-[45%] p-9 rounded-md mt-8'>
        <h1 className='text-xl'>{currentEmployee.activeCount ?? 0}</h1>
        <h1 className='text-xl'>Active Task</h1>
      </div>
    </div>
  );
};

export default TaskCounter;
