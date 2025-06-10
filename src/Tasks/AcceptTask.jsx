import React, { useContext } from 'react'
import { userContext } from '../context/AuthProvider';
import { AssignContext } from '../context/AssignToProvider';

const AcceptTask = ({ task }) => {

  const [userdata, setuserdata] = useContext(userContext);
  const [assignTo, setAssignTo] = useContext(AssignContext);





  const AcceptHandler = () => {
    console.log('Accept Handler running ');
   const UpdatedEmployee = userdata.employee.map((e) => {
      const userName = e.firstname;
      const title = e.title
      if (userName == e.firstname && title == e.title  ) {
        return{
  ...e,
      completedCount: e.completedCount + 1 , 

}
}
return e

})
setuserdata((prev)=>(
{
  ...prev,
employee : UpdatedEmployee}
))
localStorage.setItem('employee',JSON.stringify(UpdatedEmployee))
// completedListCount = completedListCount + 1
console.log(userdata);

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
        <button onClick={AcceptHandler} className="bg-green-700 cursor-pointer rounded-md p-3">Mark as Completed</button>
        <button className="bg-red-700 rounded-md p-3" >Mark as Failed</button>
      </div>
    </div>
  </>
)
}

export default AcceptTask     