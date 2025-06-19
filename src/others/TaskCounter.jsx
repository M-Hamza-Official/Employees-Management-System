import React, { useContext, useState } from 'react';
import { userContext } from '../context/AuthProvider';
import CompleteTask from '../Tasks/CompleteTask'; // Make sure this exists

const TaskCounter = () => {
  const [userdata] = useContext(userContext);
  const [showCompleted, setShowCompleted] = useState(false);

  const loggedInUser = JSON.parse(localStorage.getItem('LoggedinUser'));

  const currentEmployee = userdata?.employee?.find(
    e => e.id === loggedInUser?.data?.id
  );

  if (!currentEmployee) return null;

  const toggleCompletedTasks = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <div className='text-white w-full flex flex-col gap-5 p-4'>
      {/* Task Summary Cards */}
      <div className='flex flex-wrap gap-4'>
        <div className='bg-green-500 w-[22%] p-6 rounded-md mt-4'>
          <h1 className='text-xl'>{currentEmployee.newTaskCount ?? 0}</h1>
          <h1 className='text-xl'>New Tasks</h1>
        </div>

        <div
          onClick={toggleCompletedTasks}
          className='bg-blue-400 cursor-pointer w-[22%] p-6 rounded-md mt-4'
        >
          <h1 className='text-xl'>{currentEmployee.completedCount ?? 0}</h1>
          <h1 className='text-xl'>Completed Tasks</h1>
        </div>

        <div className='bg-red-400 w-[22%] p-6 rounded-md mt-4'>
          <h1 className='text-xl'>{currentEmployee.failedCount ?? 0}</h1>
          <h1 className='text-xl'>Failed Tasks</h1>
        </div>

        <div className='bg-yellow-500 w-[22%] p-6 rounded-md mt-4'>
          <h1 className='text-xl'>{currentEmployee.activeCount ?? 0}</h1>
          <h1 className='text-xl'>Active Tasks</h1>
        </div>
      </div>

      {/* Completed Task Cards Section */}
      {showCompleted && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentEmployee.tasks
            ?.filter(task => task.completed)
            .map((task, index) => (
              <CompleteTask key={index} task={task} />
            ))}
        </div>
      )}
    </div>
  );
};

export default TaskCounter;
