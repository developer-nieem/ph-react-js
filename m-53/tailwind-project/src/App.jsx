import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import PriceList from './components/PriceList/PriceList'

function App() {
      const menu ={

      }
  return (
    <div className="App">
     <Nav></Nav>
     <PriceList></PriceList>
    </div>
  )
}

export default App
