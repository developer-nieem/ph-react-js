import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Button >Link</Button>
    <Button variant="primary">Primary</Button>{' '}
    <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>
      <h2>
        Example heading <Badge bg="secondary">New</Badge>
      </h2>
    </div>
  )
}

export default App
