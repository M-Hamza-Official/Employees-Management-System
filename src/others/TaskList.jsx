import React from 'react'
import AcceptTask from '../Tasks/AcceptTask'
import NewTask from '../Tasks/NewTask'
import FailedTask from '../Tasks/FailedTask'
import CompleteTask from '../Tasks/CompleteTask'

const TaskList = ({ data }) => {
console.log("Rendering TaskList with:", data?.tasks);
    
    return (
        <div id='tasklist-wrapper' className=' overflow-x-auto h-[55%] mt-4 mx-4 flex gap-6 p-6 flex-nowrap text-white  rounded-sm'   >
             {
                data?.tasks?.map((e,index) => {
                    if (e?.active) {
                        return <AcceptTask key={index} task={e} />
                    }
                    if (e?.failed) {
                        return <FailedTask key={index} task={e}/>
                    }
                    if (e?.completed) {
                        return <CompleteTask key={index} task={e} />
                    }
                    if (e?.newTask) {
                        return <NewTask key={index} task={e}/>
                    }
                })
            }
        </div>
    )
}

export default TaskList