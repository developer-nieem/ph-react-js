import React, { useState } from 'react';

const Mobile = () => {
    const [charge , setCharge] = useState(100);
    const batteryDown = () =>{
        setCharge(charge - 10);
        console.log(charge);
       if (!charge ) {
        setCharge(0)
       }
    }
    return (
        <div>
            <h2>Mobile charge {charge}%</h2>
            <button onClick={batteryDown}>battery down</button>
        </div>
    );
};

export default Mobile;