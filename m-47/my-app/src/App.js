import logo from './logo.svg';
import './App.css';

const name =  'Nieem Hossen';
const job = {
  name: 'nieem',
  job: 'freelancing'
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="main-container">
          <h2>This is a react server</h2>
          <p style={{color:'blue'}} >My Name : {name}</p>
          <p > My Name {job.name } im working on {job.job}</p>
          <p >My Name : {name}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
