import React, { useEffect, useState } from 'react';
import Knob from '../Knob/Knob';
import New from '../New/New';

const Steps = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () =>{
        setSteps(steps + 1)
    }
    return (
        <div>
            <h1>Your Walking Steps : {steps}</h1>
            <button onClick={increaseSteps}>Steps</button>
            <New steps={steps}></New>
            <Knob steps={steps}></Knob>
        </div>
    );
};

export default Steps;