import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Outlet, useLoaderData } from 'react-router-dom'
import Footer from './components/Footer'

export const productsContext =  createContext()
function App() {

  const products = useLoaderData()
  return (
    <>
    
    <div className='md:min-h-[calc(100vh-150px)]'> 
    <productsContext.Provider value={products}>
            <Header></Header>
          <Outlet></Outlet>
    </productsContext.Provider>
    
    </div>
    <Footer></Footer>
    
    </>
  )
}

export default App
