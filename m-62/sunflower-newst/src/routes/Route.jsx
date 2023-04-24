import {
  Navigate,
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Profile/Login";
import Register from "../Pages/Profile/Register";
import Profile from "../Pages/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Catagory from "../Pages/Catagory/Catagory";
import NewsLayout from "../layouts/NewsLayout";
import News from "../Pages/News";
import LoginLayout from "../layouts/LoginLayout";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        children:[
          {
            path:'/',
            element:<Navigate to='/category/0'></Navigate>
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
    },
    {
      path: 'news', 
      element: <NewsLayout></NewsLayout>,
      children: [
          {
              path: ':id',
              element: <News></News>,
              loader: ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
          }
      ]
    },
    {
      path:'login',
      element: <LoginLayout></LoginLayout>,
      children: [
        {
          path:'/login',
          element: <Login></Login>
        }
      ]
    },
    {
      path:'register',
      element: <LoginLayout></LoginLayout>,
      children: [
        {
          path:'/register',
          element: <Register></Register>
        }
      ]
    }

])

export default route