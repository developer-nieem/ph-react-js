import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import ErrorPage from './components/Error-page/Error-page';
import Home from './components/Home/Home';
import First from './components/First/First';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import PostDeatils from './components/PostDeatils/PostDeatils';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <div>Hello this is home</div>,
//     errorElement: <ErrorPage></ErrorPage>
//   },
//   {
//     path:'/about',
//     element: <About></About>
//   },
//   {
//     path:'/contact',
//     element: <Contact></Contact>
    
//   }
// ])

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <First></First>
      },
      {
        path: 'users',
        element: <Users></Users>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'user/:userId',
        element: <UserDetails></UserDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      },
      {
        path: 'posts',
        element: <Posts></Posts>,
        loader : () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'post/:postId',
        element: <PostDeatils></PostDeatils>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
      {
        path:'about',
        element: <About></About>
      },
      {
        path:'contact',
        element: <Contact></Contact>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
