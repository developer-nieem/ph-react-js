import logo from './logo.svg';
import './App.css';

const style = {
  color: 'blue',
  backgroundColor: 'white'
}

const friendStyle = {
  backgroundColor: 'white',
  border : '2px solid red',
  paddign : '20px',
  margin : '20px'

}
const name =  'Nieem Hossen';
const job = {
  name: 'nieem',
  job: 'freelancing'
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <div className="main-container">
          <h2>This is a react server</h2>
          <p style={{color:'blue'}} >My Name : {name}</p>
          <p style={style} > My Name {job.name } im working on {job.job}</p>
          <p >My Name : {name}</p>
          <Name></Name>
          <Name></Name>
          <Name></Name>
          <h2>new Components</h2>
          <Friends></Friends>
          <Friends></Friends>
          <Friends></Friends>
          <Friends></Friends>
        </div>

      </header>
    </div>
  );
}

function Name() {
  return (
    <div className="persion">
    <h1>Nieem</h1>
    <p>Freelancer</p>
    </ div>
  )
}

const Friends = () => {
  return (
    <div style={friendStyle}>
      <h1>Hasan</h1>
      <p>Best Friend</p>
    </div>
  )
}

export default App;
