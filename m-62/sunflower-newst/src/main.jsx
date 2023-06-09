import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './routes/Route'
import AuthProvider from './AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={route}></RouterProvider>
    </AuthProvider>
    
  </React.StrictMode>,
)
