import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './provider/AuthProvider';


 
 const router = createBrowserRouter([
  {
     path: "/",
    element: <App></App>,
    errorElement: <div><h1 className='text-5xl'>Error khaico</h1></div>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
 ]);
 
 
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
 <AuthProvider>
 <RouterProvider  router={router}></RouterProvider>
 </AuthProvider>
  
     
    
    
  </React.StrictMode>,
)
