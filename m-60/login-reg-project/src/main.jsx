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
import PrivateRoute from './privateRoute/PrivateRoute';
import Order from './components/Order';
import Profile from './components/Profile';


 
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
        path: '/order',
        element: <PrivateRoute> <Order></Order> </PrivateRoute>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/profile',
        element:<PrivateRoute> <Profile></Profile> </PrivateRoute>
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
