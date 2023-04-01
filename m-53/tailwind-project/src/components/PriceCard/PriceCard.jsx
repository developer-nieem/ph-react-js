import React from 'react';

const PriceCard = ({price}) => {
    return (
        <div className='bg-slate-500'>
            <h1>{price.price}</h1>
            <h2 className='font-bold '>{price.name}</h2>
        </div>
    );
};

export default PriceCard;