import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Counts></Counts>
        <ChangeNumber></ChangeNumber>
      </header>
    </div>
  );
}

const Counts = (props) =>{
  const [count , setCount] = useState(55);
  
  // increass count
  const countPlus = () =>{
    const newCount =  count +1;
    setCount(newCount)
  }

  // decrase count
  const decraseCount = () => setCount(count - 1);

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={countPlus}>Incress</button>
      <button onClick={decraseCount}>Decrese</button>
    </div>
  )
}


function ChangeNumber(){
  const [count, setCount] = useState(2);
  const increassNumber = () => setCount(count+1);
  const decraseNUmber = () => setCount(count-1);
  return (
    <div>
      <h2>number: {count}</h2>
      <button onClick={increassNumber}>Increase</button>
      <button onClick={decraseNUmber}>Decrease</button>
    </div>
  )
}
export default App;

/* const Products = (props) =>{
  return (
    <div className='products'>
      <h2 style={{color:'red'}}>Product Name : {props.name}</h2>
      <p>Price : {props.price}</p>
    </div>
  )
} */

/* {
  products.map(product => <Products name={product.name} price={product.price}></Products>)
}
<Products name ="Laptop" price ='50000'></Products> */


/* const products = [
  {name:'laptop', price:50000},
  {name:'mobile', price:15000},
  {name:'tab', price:18000},
  {name:'watch', price:5000}
] */