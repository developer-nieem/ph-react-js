import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import HomeMain from './components/HomeMain/HomeMain';
import HomeSidebar from './components/HomeSidebar/HomeSidebar';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [watchTime, setWatchTime] = useState(0)

  const bookNow =(time) =>{

    const priviousTime = JSON.parse(localStorage.getItem('watchTime')) ;
    if (priviousTime) {
      const sum = priviousTime + time;
      localStorage.setItem('watchTime', sum)
      setWatchTime(sum);
    }else{
      localStorage.setItem('watchTime', time)
      setWatchTime(time);
    }
    
  }
  return (
    <div className="App">
      <Header></Header>
      <div className='row p-4'>
      <div className='col-md-8'>
        
        <HomeMain bookNow={bookNow}></HomeMain>
       
      </div>
      <div className='col-md-4'>
      <HomeSidebar watchTime={watchTime} ></HomeSidebar>
      <ToastContainer></ToastContainer>
      </div>
      </div>
    </div>
  )
}

export default App
