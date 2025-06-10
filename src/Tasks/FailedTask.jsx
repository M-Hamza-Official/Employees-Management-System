import React from 'react'

const FailedTask = ({key}) => {
  return (
    <div>
         <div data-index={key} className='bg-purple-500 flex-shrink-0  rounded-lg  h-full p-3 w-[370px] '>
                <div className='flex justify-between'>
                    <h3 className='bg-red-500 self-start p-2 rounded-md  '>High</h3>
                    <h3 className='font-medium' >1 June 2025</h3>
                </div>
                <h2 className='font-bold text-2xl mt-4 pb-3' >Make a DataBase Design</h2>
                <p className='text-xl leading-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ullam adipisci totam nihil harum animi laborum ex fugit. Quia, veritatis accusamus. Architecto doloribus quaerat modi, nesciunt aperiam dolorem excepturi mollitia.</p>
            <div className='flex mt-3 gap-2 justify-between items-center'>
                <butoon className="bg-green-700 rounded-md p-3">Retry</butoon>
            </div>
            </div>
    </div>
  )
}

export default FailedTask