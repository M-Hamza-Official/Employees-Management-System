import React, { useContext, useEffect } from 'react'
import { userContext } from '../context/AuthProvider';
import { AssignContext } from '../context/AssignToProvider';

const AcceptTask = ({ task }) => {

  const [userdata, setuserdata] = useContext(userContext);
  const [assignTo, setAssignTo,isCompleted, setisCompleted] = useContext(AssignContext);

  
  useEffect(() => {
  const data = [...userdata.employee]
 
}, [userdata])



 const AcceptHandler = () => {
    if (!userdata || !userdata.employee) return;

    const updatedEmployees = userdata.employee.map((employee) => {
      if (employee.firstname === assignTo) {
        let isNewTask = false;

        const updatedTasks = employee.tasks.map((t) => {
          const isTargetTask =
            t.title === task.title &&
            t.date === task.date;

          if (isTargetTask) {
            isNewTask = t.newTask;
            return {
              ...t,
              completed: true,
              active: false,
              newTask: false,
              failed: false,
            };
          }
          return t;
        });

        return {
          ...employee,
          completedCount: employee.completedCount + 1,
          activeCount: Math.max(0, employee.activeCount - 1),
          newTaskCount: Math.max(0, employee.newTaskCount - (isNewTask ? 1 : 0)),
          tasks: updatedTasks,
        };
      }
      return employee;
    });

    const updatedUserdata = {
      ...userdata,
      employee: updatedEmployees,
    };

    setuserdata(updatedUserdata);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    console.log('Updated user data:', updatedUserdata);
    alert("Task marked as completed and saved to localStorage!");
  };


return (
  <>
    <div className='bg-purple-500 flex-shrink-0  rounded-lg  h-full p-3 w-[370px] '>
      <div className='flex justify-between'>
        <h3 className='bg-red-500 self-start p-2 rounded-md  '>{task.category}</h3>
        <h3 className='font-medium' >{task.date}</h3>
      </div>
      <h2 className='font-bold text-2xl mt-4 pb-3' >{task.title}</h2>
      <p className='text-xl leading-tight'>{task.description}</p>
      <div className='flex mt-3 gap-2 justify-between items-center'>
        <button onClick={AcceptHandler} className="bg-green-700 cursor-pointer rounded-md p-3">Mark as Completed</button>
        <button className="bg-red-700 rounded-md p-3" >Mark as Failed</button>
      </div>
    </div>
  </>
)
}

export default AcceptTask     