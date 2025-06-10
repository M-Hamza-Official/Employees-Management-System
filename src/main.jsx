import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import AssignProvider from './context/AssignToProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AssignProvider>
      <App />
      </AssignProvider>
    </AuthProvider>
  </StrictMode>,
)
