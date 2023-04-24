import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Profile/Login";
import Register from "../Pages/Profile/Register";
import Profile from "../Pages/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Catagory from "../Pages/Catagory/Catagory";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        children:[
          {
            path:'/',
            element:<Main></Main>
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/register',
            element:<Register></Register>
          },
          {
            path:'/profile',
            element:<PrivateRoute><Profile></Profile></PrivateRoute>
          },
          {
            path:'/category/:id',
            element:<Catagory></Catagory>,
            loader: ({params})=> fetch(`http://localhost:3000/categories/${params.id}`)
          }
        ]
    }
])

export default route