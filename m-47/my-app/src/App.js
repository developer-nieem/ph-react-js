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
          <Name name ="nieem" job="freelanching"></Name>
          <Name name = "hasan" job="garments"></Name>
          <Name></Name>
          <h2>new Components</h2>
          <Friends name="Hasan" like= "Best Friend"></Friends>
          <Friends name =" Tarik" like = "Not Best"></Friends>
          <Friends></Friends>
          <Friends></Friends>
        </div>

      </header>
    </div>
  );
}

function Name(props) {
  console.log(props);
  return (
    <div className="persion">
    <h1>{props.name}</h1>
    <p>Job: {props.job}</p>
    </ div>
  )
}

const Friends = (props) => {
  return (
    <div style={friendStyle}>
      <h1>{props.name}</h1>
      <p>{props.like}</p>
    </div>
  )
}

export default App;
