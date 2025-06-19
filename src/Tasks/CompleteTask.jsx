import React, { useContext } from 'react'
import { userContext } from '../context/AuthProvider';

const CompleteTask = ({key,task}) => {
    const [userdata, setuserdata] = useContext(userContext);
  
  return (
    <div>
         <div data-index={key}  className='bg-purple-500 flex-shrink-0  rounded-lg  h-full p-3 w-[370px] '>
                <div className='flex justify-between'>
                    <h3 className='bg-red-500 self-start p-2 rounded-md  '>{task.category}</h3>
                    <h3 className='font-medium' >{task.date}</h3>
                </div>
                <h2 className='font-bold text-2xl mt-4 pb-3' >{task.title}</h2>
                <p className='text-xl leading-tight'>{task.description}</p>
            <div className='flex mt-3 gap-2 justify-between items-center'>
                <butoon className="bg-green-700 rounded-md p-3">Mark as from Completed</butoon>
            </div>
            </div>
    </div>
  )
}

export default CompleteTask