import React from 'react'
import { useEffect } from 'react'

const TaskCounter = ({data}) => {

  useEffect(() => {
    console.log('i am changed');
    
  }, [data])
  
  return (
    <div className='text-white flex gap-5 p-4'>
<div className='bg-green-500    w-[45%] p-9 rounded-md mt-8'>
    <h1 className='text-xl' >{data.newTaskCount}</h1>
    <h1 className='text-xl' >New Task</h1>
</div>
<div className='bg-blue-400   w-[45%] p-9 rounded-md mt-8'>
      <h1 className='text-xl' >{data.completedCount}</h1>
    <h1 className='text-xl' >Completed Task</h1>
</div>
<div className='bg-red-400   w-[45%] p-9 rounded-md mt-8'>
     <h1 className='text-xl' >{data.failedCount}</h1>
    <h1 className='text-xl' >failed Task</h1>
</div>
<div className='bg-yellow-500   w-[45%] p-9 rounded-md mt-8'>
     <h1 className='text-xl' >{data.activeCount}</h1>
    <h1 className='text-xl' >active Task</h1>
</div>

    </div>
  )
}

export default TaskCounter