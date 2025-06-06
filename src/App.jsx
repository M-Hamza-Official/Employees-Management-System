import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './Auth/Login'
import EmployeDashboard from './Dashboard/EmployeDashboard'
import AdminDashboard from './Dashboard/AdminDashboard'
import { userContext } from './context/AuthProvider'

function App() {
  const [user, setuser] = useState(null)
  const authData = useContext(userContext)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(() => {
    const loggedinUser = JSON.parse(localStorage.getItem('LoggedinUser'))
    console.log(loggedinUser?.role);

    if (loggedinUser) {
      setuser(loggedinUser.role)
      setLoggedInUserData(loggedinUser.data)
    }
  }, [])

  const HandleLogOut = () => {
    localStorage.removeItem('LoggedinUser')
    setLoggedInUserData('');
    setuser('')
  }

  const handleLogin = (email, password) => {
    if (authData && authData?.admin && authData?.admin?.email == email && authData?.admin?.password == password) {
      localStorage.setItem('LoggedinUser', JSON.stringify({ role: 'admin' }))
      setuser('admin')
    } else if (authData) {
      const employee = authData?.employee.find((e) => e?.email == email && e?.password == password)

      if (employee) {
        setLoggedInUserData(employee)
        setuser('employee')
        console.log(employee);
        localStorage.setItem('LoggedinUser', JSON.stringify({ role: 'employee', data: employee }))
      }
    } else {
      alert('invalid inputs')
    }
  }
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user == 'admin' && <AdminDashboard logout={HandleLogOut} data={LoggedInUserData} />}
      {user == 'employee' && <EmployeDashboard logout={HandleLogOut} data={LoggedInUserData} />}

    </>
  )
}

export default App
