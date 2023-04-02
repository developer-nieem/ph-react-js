import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import PriceList from './components/PriceList/PriceList'
import Charts from './components/Charts/Charts'
import Deshboard from './components/Deshboard/Deshboard'
import Xsios from './components/Xios/Xsios'

function App() {
      const menu ={

      }
  return (
    <div className="App">
     <Nav></Nav>
     <PriceList></PriceList>
     <Charts></Charts>
     <Deshboard></Deshboard>
     <Xsios></Xsios>
    </div>
  )
}

export default App
