import React, { useEffect, useState } from 'react';
import Persion from '../Persion/Persion';

const Persions = () => {
    const [persions, setPersions] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPersions(data))
    },[])
    return (
        <div>
            {
                persions.map(man => <Persion {...man}></Persion>)
            }
        </div>
    );
};

export default Persions;