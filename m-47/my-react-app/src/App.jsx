import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="App">
     {/* <CounterNumber></CounterNumber> */}
    <ShowUser></ShowUser>
    </div>
  )
}


function ShowUser(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => setUsers(data))
  }, [])
  console.log(users);
  return (
    <div className='container-main'>
        {
          users.map(user => <UserShow name ={user.name} email={user.email} address={user.address.city} phone={user.phone}></UserShow>)
          
        }
    </div>
  )
}


function UserShow(props){
  return (
    <div className='users-container'>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
      <p>Address: {props.address}</p>
    </div>
  )
}


// cunter function

/* function CounterNumber(){
  const [count , setCount] = useState(0);

// Increase Count
  const increaseCount = () => setCount(count + 1);

  // decrease COunt
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h2>number: {count}</h2>
      <button onClick={increaseCount}>Increase </button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
} */
export default App
