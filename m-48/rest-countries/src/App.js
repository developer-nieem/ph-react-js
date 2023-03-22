
import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
     <div>
     <Countries></Countries>
     </div>
    </div>
  );
}

/* function LoadCountries(){
 
  const [countries , setCountries] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=> console.log(data))
  },[])
  
  return (
    <div>
      <h2>Welcome to our World</h2>
    </div>
  )
} */
export default App;
