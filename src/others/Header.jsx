import React, { useEffect, useState } from 'react'

const Header = ({data,logout}) => {
  const [usename, setusename] = useState('')
console.log(data?.firstname);

  useEffect(() => {
    
    if(!data){
      setusename('admin')
    }else{
      setusename(data.firstname)
    }
  }, [])
  
  return (
    <>
    <div className='pt-4 px-4 flex justify-between items-end text-white'>
<h1 className='text-5xl'>Hello <span className='font-bold'>{usename}👋</span></h1>
<button onClick={logout} className='bg-red-600 p-3 text-2xl rounded-lg'>Log Out</button>
    </div>
    </>
  )
}

export default Header