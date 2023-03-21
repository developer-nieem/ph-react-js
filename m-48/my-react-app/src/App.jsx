import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './components/Countries/Countries'
import Persion from './components/Persion/Persion'
import Header from './components/Header/Header.jsx'

function App() {

  return (
    <div className="App">
      
     <Countries></Countries>
     <Persion></Persion>
     <Header></Header>
    
    </div>
  )
}

/* function LoadCountries(){
  const [countries, setCountries] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=> setCountries(data))
  },[])

  return (
    <div>
      <h2>Welcome to our World</h2>
     {
      countries.map(country=> <Countries name={country.name.common} population={country.population}></Countries>)
      
     }
    </div>
  )
}
 */
// function Countries(props){
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <p>population: {props.population}</p>
//     </div>
//   )
// }
export default App
