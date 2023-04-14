import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import loadProducts from './loader/loadProducts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Products></Products>
      },
      {
        path: '/shop',
        element: <Products></Products>
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
        loader: loadProducts
      },
      {
        path: '/inventory',
        element: <div>inventory</div>
      },
      {
        path: '/login',
        element: <div>login</div>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
