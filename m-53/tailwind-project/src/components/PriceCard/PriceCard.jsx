import React from 'react';
import {CheckCircleIcon } from '@heroicons/react/24/solid'
const PriceCard = ({price}) => {
    return (
        <div className='bg-slate-700 rounded-md p-4 flex flex-col '>
            <h1>{price.price} <span className='text-2xl'>/mon</span> </h1>
            <h2 className='font-bold '>{price.name}</h2>
            <p>Features:</p>
            <div className='text-left space-y-3'>
            {
                price.features.map(feature=> <span className='flex gap-2'><CheckCircleIcon  className="h-6 w-6 text-blue-500" /> {feature}</span> )
            }
            </div>
            <button className='text-black mt-auto'>Buy now</button>
        </div>
    );
};

export default PriceCard;