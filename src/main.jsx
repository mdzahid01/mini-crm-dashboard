import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import router from './routes/index.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
