import React, { useContext } from 'react'
import AcceptTask from '../Tasks/AcceptTask'
import NewTask from '../Tasks/NewTask'
import FailedTask from '../Tasks/FailedTask'
import CompleteTask from '../Tasks/CompleteTask'
import { userContext } from '../context/AuthProvider'
import { AssignContext } from '../context/AssignToProvider'

const TaskList = ({ data,showActive }) => {
    const [userdata,canShow] = useContext(userContext);
const [assignTo] = useContext(AssignContext);

const currentEmployee = userdata.employee?.find(emp => emp.firstname === assignTo);


    return (
        <div id='tasklist-wrapper' className=' overflow-x-auto  mt-4 mx-4 flex gap-6 p-6 flex-nowrap text-white  rounded-sm'   >
             {

                
                currentEmployee?.tasks?.map((e,index) => {
                    
                    if (  showActive &&  e?.active && !e.completed && !e.FailedTask ) {
                        // console.log(data);
                        return <AcceptTask key={index} task={e} />
                        
                    }
                    // if (e?.failed ) {
                    //     return <FailedTask key={index} task={e}/>
                    // }
                    
                    if (  showActive && e?.newTask && !e.completed ) {
                        return <NewTask key={index} task={e}/>
                    }
                })
            }
        </div>
    )
}

export default TaskList