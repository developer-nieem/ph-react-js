import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeSidebar = ({watchTime}) => {
    const [time, setTime] = useState(watchTime)
    const [breakTimeInfo, setBreakTimeInfo] = useState('')

    useEffect(()=>{
        const getTime= localStorage.getItem('watchTime');
        // console.log(getTime);
        setTime(getTime);

        const getBreakTime = localStorage.getItem('breakTime');
        if (getBreakTime) {
            setBreakTimeInfo(getBreakTime)
        }else{
            setBreakTimeInfo(0)
        }
    },[watchTime])


    const breakTime = (bt) =>{
        // const getBreakTime = localStorage.getItem('breakTime');
        localStorage.setItem('breakTime', bt);
        setBreakTimeInfo(bt)
    }

    const calculateBreak = () =>{
        const getWatchValue = JSON.parse(time)  -  JSON.parse(breakTimeInfo) 
        toast("total watch time "+ getWatchValue + ' minute');
    }

    return (
        <div className='text-center'>
            <h2>My Cart</h2>
            {/* <h2>time : {watchTime}</h2> */}
            <p className='pt-5'>total watch time </p>
            <input className='form-control' type="text"  value={time} />
            <p>Add break time</p>
            <button onClick={()=> breakTime(15)} className='btn btn-primary me-1'>15</button>
            <button  onClick={()=> breakTime(20)} className='btn btn-warning me-1'>20</button>
            <button  onClick={()=> breakTime(25)} className='btn btn-success'>25</button>
            <input className='form-control mt-2' type="text"  value={breakTimeInfo} />
            <button onClick={calculateBreak} className='btn btn-primary mt-5'>Complete</button>
        </div>
    );
};

export default HomeSidebar;