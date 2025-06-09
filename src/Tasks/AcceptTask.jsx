import React, { useContext } from 'react'
import { userContext } from '../context/AuthProvider';
import { AssignContext } from '../context/AssignToProvider';

const AcceptTask = ({ task }) => {

  const [userdata, setuserdata] = useContext(userContext);
  const [assignTo ,setAssignTo] = useContext(AssignContext)


  let completedListCount = userdata.employee.completedCount
// console.log(userdata);


  const AcceptHandler = () => {
    console.log('Accept Handler running ');
userdata.employee.map((e)=>{
const userName = e.firstname;
if(userName == assignTo )
completedListCount = completedListCount + 1
})

// completedListCount = completedListCount + 1

  }

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
          <butoon onClick={AcceptHandler} className="bg-green-700 cursor-pointer rounded-md p-3">Mark as Completed</butoon>
          <butoon className="bg-red-700 rounded-md p-3" >Mark as Failed</butoon>
        </div>
      </div>
    </>
  )
}

export default AcceptTask