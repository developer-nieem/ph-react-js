import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Shop from './components/Shop/Shop'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import { productsLoadData } from './loader/productsLoad'
import CartItem from './components/Shop/cartItem'

const router =  createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: productsLoadData,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        
        
      },
      {
        path:'shop',
        element:<Shop></Shop>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'cart',
        element: <CartItem></CartItem>
      }
    ]
  },
 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)


