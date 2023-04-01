import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices , setPrice] = useState([]);
    useEffect(()=>{
        fetch('prices.json')
        .then(res=> res.json())
        .then(data => setPrice(data))
    },[])
    return (
        <div>
            <h1 className='text-center bg-zinc-300 p-2'>Price list</h1>
           <div className='grid grid-cols-3 gap-4 text-center'>
           {
                prices.map(price=> <PriceCard price={price}></PriceCard>)
            }
           </div>
        </div>
    );
};

export default PriceList;