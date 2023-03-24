import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Jobs from './Components/Jobs/Jobs'
import Businiss from './Components/Business/Businiss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Jobs></Jobs>
      <Businiss></Businiss>
    </div>
  )
}

export default App
