import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigation } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  const navigation = useNavigation()

  return (
    <div >
     {
      navigation.state === 'Loading' ? 'loading....' : ''
     }
    </div>
  )
}

export default App
