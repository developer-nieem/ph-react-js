import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Outlet, useLoaderData } from 'react-router-dom'
import Footer from './components/Footer'

export const ProductsContext =  createContext();
export const CartContext =  createContext([]);
function App() {

  const {data , initialCart } = useLoaderData()
  
  return (
    <>
    
    <div className='md:min-h-[calc(100vh-150px)]'> 
    <ProductsContext.Provider value={data}>
          <CartContext.Provider value={initialCart}>
                      <Header></Header>
                      <Outlet></Outlet>
          </CartContext.Provider>
            
    </ProductsContext.Provider>
    
    </div>
    <Footer></Footer>
    
    </>
  )
}

export default App
