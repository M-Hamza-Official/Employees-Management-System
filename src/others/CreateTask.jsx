import React, { useContext, useState } from 'react'
import { userContext } from '../context/AuthProvider'

const CreateTask = () => {
  const [title, settitle] = useState('')
  const [date, setdate] = useState('')
  const [assinTo, setassinTo] = useState('')
  const [desc, setdesc] = useState('')
  const [category, setcategory] = useState('')
  const [task, settask] = useState({})
  // const data = JSON.parse(localStorage.getItem('employees'))


  const [userdata, setuserdata] = useContext(userContext) || [{ employee: [] }, () => { }]


  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = { title, date, assinTo, desc, category, newTask: true, active: true, completed: false, failed: false }

    const data = [...userdata.employee]

    const UpdatedEmployee = data.map(elm => {
      if (assinTo == elm.firstname) {
        elm.tasks.push(newTask)
elm.activeCount = elm.activeCount + 1

      }
      return elm

    });
    // const logged = userdata.employee.map(emp => emp.firstname) 
    // console.log(data);


    setuserdata(prev => ({
      ...prev,
      employee: UpdatedEmployee
    }));

    settitle('')
    setdate('')
    setassinTo('')
    setdesc('')
    setcategory('')
  }

  return (
    <div>

      <form onSubmit={(e) => submitHandler(e)} className='' >
        <div className='placeholder-black bg-slate-600 rounded-md   items-start gap-5 flex-row flex    p-4 justify-between w-[100%] mt-4'>
          <div className=' w-1/2'>
            <h3 className='text-white'  >Task Title</h3>
            <input value={title} onChange={(e) => settitle(e.target.value)} type="text" className='p-4 text-xl w-4/5 mb-2 outline-none  rounded-md' placeholder='Enter Title' />
            <h3 className='text-white '  >Date</h3>
            <input value={date} onChange={(e) => setdate(e.target.value)} type="date" className='p-4 text-xl w-4/5 outline-none rounded-md mb-2' />
            <h3 className='text-white'  >Assign to</h3>
            <input value={assinTo} onChange={(e) => setassinTo(e.target.value)} type="text" className='p-4 text-xl w-4/5 outline-none rounded-md mb-2' placeholder='Employee Name' />
            <h3 className='text-white'  >Category</h3>
            <input value={category} onChange={(e) => setcategory(e.target.value)} type="text" className='p-4 text-xl w-4/5 outline-none rounded-md mb-2' placeholder='dev,design etc' />
          </div>
          <div className='h-full w-[50%] flex flex-col gap-3'>

            <h3 className='text-white text-xl' >Description</h3>
            <textarea value={desc} onChange={(e) => setdesc(e.target.value)} className='h-44 text-xl p-3 rounded-md outline-none w-full' name="" id="" placeholder='Enter Description of task' ></textarea>
            <button className='placeholder-white bg-red-500 p-4 text-xl rounded-md text-white' >Create Task</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateTask