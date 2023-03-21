import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:'laptop', price:50000},
    {name:'mobile', price:15000},
    {name:'tab', price:18000},
    {name:'watch', price:5000}
  ]
  return (
    <div className="App">
      <header className="App-header">
        {
          products.map(product => <Products name={product.name} price={product.price}></Products>)
        }
      <Products name ="Laptop" price ='50000'></Products>
      </header>
    </div>
  );
}

const Products = (props) =>{
  return (
    <div className='products'>
      <h2 style={{color:'red'}}>Product Name : {props.name}</h2>
      <p>Price : {props.price}</p>
    </div>
  )
}
export default App;
