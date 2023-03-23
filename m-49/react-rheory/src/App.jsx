import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Steps from './components/Steps/Steps'
import Knob from './components/Knob/Knob'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Knob steps ={5000}></Knob>
      <Steps></Steps>
    </div>
  )
}

export default App
