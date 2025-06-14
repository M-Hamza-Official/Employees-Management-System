import React, { useContext, useState } from 'react';
import { userContext } from '../context/AuthProvider';
import { AssignContext } from '../context/AssignToProvider';

const Login = ({ handleLogin }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const [assignTo, setAssignTo] = useContext(AssignContext);
  const [userdata] = useContext(userContext);

  const HandlerSubmit = (e) => {
    e.preventDefault();

    // Perform login (can include your logic in handleLogin)
    handleLogin(email, password);

    // Find the matched employee
    const matchedEmployee = userdata?.employee?.find(
      emp => emp?.email === email && emp?.password === password
    );

    if (matchedEmployee) {
      setAssignTo(matchedEmployee?.firstname); // 🔥 Set the logged-in name
      localStorage.setItem('assignTo', matchedEmployee.firstname); // Optional: persist
      // console.log('Assigned to:', matchedEmployee.firstname);
    } else {
      console.error('Login failed: No matching employee found.');
    }

    setemail('');
    setpassword('');
  };

  return (
    <div className='h-screen w-full bg-black flex items-center justify-center'>
      <div className='border-2 rounded-md p-9 border-red-600 w-[30%] '>
        <form onSubmit={HandlerSubmit} className='flex flex-col gap-4 items-center justify-center'>
          <input
            required
            value={email}
            autoComplete="email"
            onChange={(e) => setemail(e.target.value)}
            type="email"
            className='px-3 outline-none text-xl border-red-600 border-2 mx-10 w-full rounded-3xl py-5'
            placeholder='Enter email'
          />

          <input
            required
            value={password}
            autoComplete="current-password"
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            className='px-3 outline-none border-red-600 border-2 mx-10 text-xl w-full rounded-3xl py-5'
            placeholder='Enter password'
          />

          <button
            className='px-4 mx-10 w-full text-xl bg-red-600 rounded-3xl py-4 text-white'
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
