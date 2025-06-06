import React, { useContext, useState } from 'react'
import { userContext } from '../context/AuthProvider'

const Login = ({handleLogin}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
const result = useContext(userContext)
    const HandlerSubmit = (e) => {
          e.preventDefault(); // Stop the page from reloading
handleLogin(email,password)
        setemail('');
        setpassword('')
    }
// console.log(result);



    return (
        <div className='h-screen w-full bg-black flex items-center justify-center'>
            <div className='border-2 rounded-md p-9 border-red-600 w-[30%] '>
                <form onSubmit={(e) => {

                    HandlerSubmit(e)
                }} className='flex flex-col  gap-4 items-center justify-center ' >
                    <input required value={email} autocomplete="email" onChange={(e) => {
                        setemail(e.target.value);

                    }} type="email" className='px-3 outline-none text-xl border-red-600 border-2 mx-10 w-full rounded-3xl py-5' placeholder='Enter email' />

                    <input required value={password} onChange={(e) => setpassword(e.target.value)}
                        autocomplete="current-password"
                        type="password" className='px-3 outline-none border-red-600 border-2 mx-10 text-xl w-full rounded-3xl py-5' placeholder='Enter password' />
                    <button className='px-4 mx-10 w-full text-xl   bg-red-600 rounded-3xl py-4 text-white'  >Log In</button>
                </form>
            </div>

        </div>
    )
}

export default Login