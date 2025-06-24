import React, { useContext } from 'react';
import { userContext } from '../context/AuthProvider';
import { AssignContext } from '../context/AssignToProvider';

const AcceptTask = ({ task ,key}) => {
  const [userdata, setuserdata] = useContext(userContext);
  const [assignTo,setAssignTo] = useContext(AssignContext);


// console.log(userdata);


  const markTaskAs = (status) => {
    if (!userdata?.employee) return;

    const updatedEmployees = userdata.employee.map(employee => {
      if (employee.firstname !== assignTo) return employee;

      let taskFound = false;
      let wasNewTask = false;
      let wasActive = false;

      const updatedTasks = employee.tasks.map(t => {
        const isTargetTask = (
          t.title === task.title &&
          t.description === task.description &&
          t.date === task.date &&
          t.category === task.category
        );

        if (isTargetTask) {
          taskFound = true;
          wasNewTask = t.newTask;
          wasActive = t.active;

          return {
            ...t,
            completed: status === 'completed',
            active: status ===  false ,
            newTask: false,
            failed: status === 'failed'
          };
        }
        return t;
      });

      if (!taskFound) return employee;

      const countChanges = {
        completed: status === 'completed' ? 1 : 0,
        active: status === 'completed' ? -1 : 0,
        newTask: wasNewTask ? -1 : 0,
        failed: status === 'failed' ? 1 : 0
      };

      return {
        ...employee,
        tasks: updatedTasks,
        completedCount: employee.completedCount + countChanges.completed,
        activeCount: Math.max(0, employee.activeCount + countChanges.active),
        newTaskCount: Math.max(0, employee.newTaskCount + countChanges.newTask),
        failedCount: employee.failedCount + countChanges.failed
      };
    });

    const updatedUserdata = {
      ...userdata,
      employee: updatedEmployees
    };

    setuserdata(updatedUserdata);
    localStorage.setItem('userdata', JSON.stringify(updatedUserdata));
// console.log('AssignTo:', assignTo);
// console.log('Matched employee:', updatedEmployees.find(e => e.firstname === assignTo));
// console.log('Updated employees:', updatedEmployees);
  };

  const handleComplete = () => markTaskAs('completed');
  const handleFailed = () => markTaskAs('failed');

  return (
    <div data-index={key} className='bg-purple-500 flex-shrink-0 rounded-lg h-full p-3 w-[370px]'>
      <div className='flex justify-between'>
        <h3 className='bg-red-500 self-start p-2 rounded-md'>{task.category}</h3>
        <h3 className='font-medium'>{task.date}</h3>
      </div>
      <h2 className='font-bold text-2xl mt-4 pb-3'>{task.title}</h2>
      <p className='text-xl leading-tight'>{task.description}</p>
      <div className='flex mt-3 gap-2 justify-between items-center'>
        <button 
          onClick={handleComplete} 
          className="bg-green-700 cursor-pointer rounded-md p-3"
        >
          Mark as Completed
        </button>
        <button 
          onClick={handleFailed} 
          className="bg-red-700 rounded-md p-3"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
