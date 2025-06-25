import React, { useContext, useState } from 'react';
import { userContext } from '../context/AuthProvider';
import CompleteTask from '../Tasks/CompleteTask'; // Make sure this exists
import FailedTask from '../Tasks/FailedTask';
import TaskList from './TaskList';
import AcceptTask from '../Tasks/AcceptTask';

const TaskCounter = () => {
  const [userdata,  ] = useContext(userContext);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showFailed, setShowFailed] = useState(false);
  const [showActiveTask, setShowActiveTask] = useState(false);
  const [active, setactive] = useState('')
  const loggedInUser = JSON.parse(localStorage.getItem('LoggedinUser'));
// setcanShow(true)
  const currentEmployee = userdata?.employee?.find(
    e => e.id === loggedInUser?.data?.id
  );

  if (!currentEmployee) return null;

  const toggleCompletedTasks = () => {
    setShowCompleted(!showCompleted);
    setShowFailed(false)
    setactive('completed')
  };
  const toggleFailedTasks = () => {
    setShowFailed(!showFailed);
    setShowCompleted(false)
    setactive('failed')
  };
  const toggleShowActiveTasks = () => {
    setShowActiveTask(!showFailed);
    setShowCompleted(false)
setShowFailed(false)
    setactive('active')
  };

  return (
    <div className='text-white w-full flex flex-col gap-5 p-4'>
      {/* Task Summary Cards */}
      <div onClick={toggleShowActiveTasks} className='flex flex-wrap gap-4'>
        <div className='bg-green-500 w-[22%] p-6 cursor-pointer rounded-md mt-4'>
          <h1 className='text-xl'>{currentEmployee.newTaskCount ?? 0}</h1>
          <h1 className='text-xl'>New Tasks</h1>
        </div>

        <div
          onClick={toggleCompletedTasks}
          className={`bg-blue-400 cursor-pointer w-[22%] p-6 rounded-md mt-4
            ${active === 'completed' ? 'bg-blue-500 shadow-lg scale-105' : 'bg-blue-400'}
            `}
        >
          <h1 className='text-xl'>{currentEmployee.completedCount ?? 0}</h1>
          <h1 className='text-xl'>Completed Tasks</h1>
        </div>

        <div onClick={toggleFailedTasks} className={`w-[22%] p-6 rounded-md mt-4 cursor-pointer
              ${active === 'failed' ? 'bg-red-500 shadow-lg scale-105' : 'bg-red-400'}`}>
          <h1 className='text-xl'>{currentEmployee.failedCount ?? 0}</h1>
          <h1 className='text-xl'>Failed Tasks</h1>
        </div>

        <div onClick={toggleShowActiveTasks} className='bg-yellow-500 w-[22%] cursor-pointer p-6 rounded-md mt-4'>
          <h1 className='text-xl'>{currentEmployee.activeCount ?? 0}</h1>
          <h1 className='text-xl'>Active Tasks</h1>
        </div>
      </div>
      {/* Completed Task Cards Section */}
      {showCompleted && (
        <div className='flex flex-wrap w-full h-full gap-6'>
          <h1 className='block' >Completed Tasks</h1>
          {currentEmployee.tasks
            ?.filter(task => task.completed)
            .map((task, index) => (
              <CompleteTask key={index} task={task} />
            ))}
        </div>
      )}

      {/* Failed Task Cards Section */}
      {showFailed && (
        <div className='flex   w-full flex-wrap h-full gap-6'>
          <h1 className='block' >Failed Task</h1>
          {currentEmployee.tasks
            ?.filter(task => task.failed)
            .map((task, index) => (
              <FailedTask task={task} key={index} />
            ))}
        </div>
      )}
      {/* Active Task Cards Section */}
      {showActiveTask && (
        <div className='flex   w-full flex-wrap h-full gap-6'>
          <h1 className='block' >Failed Task</h1>
          {currentEmployee.tasks
            ?.filter(task => task.failed)
            .map((task, index) => (
              <AcceptTask task={task} key={index} />
            ))}
        </div>
      )}
<TaskList showActive={!showCompleted && !showFailed} />

    </div>
  );
};

export default TaskCounter;
