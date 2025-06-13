import React, { useContext, useState } from 'react'
import { userContext } from '../context/AuthProvider'
import { AssignContext } from '../context/AssignToProvider'

const CreateTask = () => {
  const [title, settitle] = useState('')
  const [date, setdate] = useState('')
  const [desc, setdesc] = useState('')
  const [category, setcategory] = useState('')
  const [assignTo, setAssignTo] = useContext(AssignContext)
  const [userdata, setuserdata] = useContext(userContext) || [{ employee: [] }, () => { }]

  const submitHandler = (e) => {
    e.preventDefault();
    
    // Generate unique ID for the task
    const taskId = Date.now().toString();
    
    const newTask = { 
      id: taskId,  // Add unique ID
      title, 
      date, 
      assignTo, 
      description: desc,  // Changed to match AcceptTask (was 'desc')
      category, 
      newTask: true, 
      active: true, 
      completed: false, 
      failed: false 
    }

    // Create new employee array with immutable updates
    const updatedEmployees = userdata.employee.map(employee => {
      if (assignTo === employee.firstname) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],  // Immutable add
          activeCount: employee.activeCount + 1,
          newTaskCount: employee.newTaskCount + 1
        }
      }
      return employee;
    });

    // Update state
    setuserdata(prev => ({
      ...prev,
      employee: updatedEmployees
    }));

    // Reset form
    settitle('')
    setdate('')
    setdesc('')
    setcategory('')
    setAssignTo('')  // Reset assignment
  }

  return (
    <div>
      <form onSubmit={submitHandler} className=''>
        <div className='placeholder-black bg-slate-600 rounded-md items-start gap-5 flex-row flex p-4 justify-between w-[100%] mt-4'>
          <div className='w-1/2'>
            <h3 className='text-white'>Task Title</h3>
            <input 
              value={title} 
              onChange={(e) => settitle(e.target.value)} 
              type="text" 
              className='p-4 text-xl w-4/5 mb-2 outline-none rounded-md' 
              placeholder='Enter Title' 
              required
            />
            
            <h3 className='text-white'>Date</h3>
            <input 
              value={date} 
              onChange={(e) => setdate(e.target.value)} 
              type="date" 
              className='p-4 text-xl w-4/5 outline-none rounded-md mb-2' 
              required
            />
            
            <h3 className='text-white'>Assign to</h3>
            <input 
              value={assignTo} 
              onChange={(e) => setAssignTo(e.target.value)} 
              type="text" 
              className='p-4 text-xl w-4/5 outline-none rounded-md mb-2' 
              placeholder='Employee Name' 
              required
            />
            
            <h3 className='text-white'>Category</h3>
            <input 
              value={category} 
              onChange={(e) => setcategory(e.target.value)} 
              type="text" 
              className='p-4 text-xl w-4/5 outline-none rounded-md mb-2' 
              placeholder='dev,design etc' 
              required
            />
          </div>
          
          <div className='h-full w-[50%] flex flex-col gap-3'>
            <h3 className='text-white text-xl'>Description</h3>
            <textarea 
              value={desc} 
              onChange={(e) => setdesc(e.target.value)} 
              className='h-44 text-xl p-3 rounded-md outline-none w-full' 
              placeholder='Enter Description of task'
              required
            ></textarea>
            
            <button 
              type='submit'
              className='placeholder-white bg-red-500 p-4 text-xl rounded-md text-white'
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateTask