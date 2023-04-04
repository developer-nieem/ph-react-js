import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/components/Home/Home';
import Restaurant from './assets/components/Restaurant/Restaurant';
import ErrorPage from './assets/components/ErrorPage/ErrorPage';
import MealDetails from './assets/components/Restaurant/MealDetails';
import MainPage from './assets/components/MainPage/MainPage';

const route =createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path: '/',
        element: <MainPage></MainPage>
      },
      {
        path:'restaurant',
        element:<Restaurant></Restaurant>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a'),
      },
      {
        path: 'meal/:mealId',
        element: <MealDetails></MealDetails>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
      },
      {
        path:'*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
