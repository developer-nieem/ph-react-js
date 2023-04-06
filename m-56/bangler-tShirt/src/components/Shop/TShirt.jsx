import React from 'react';

const TShirt = ({tshirt, addToShoppingCart}) => {
    const {_id, picture, name , gender, price} =  tshirt
    return (
        <div className='text-center border-2 border-red-700  m-4 p-4 rounded-md'>
            <img className='w-56 m-auto' src={picture} alt="" />
            <h2>{name}</h2>
            <p>${price}</p>
            
            <button onClick={() => addToShoppingCart(tshirt)} className='p-2 bg-blue-900 text-white mt-5 shadow-lg rounded-lg hover:bg-slate-500'>Buy Now</button>
        </div>
    );
};

export default TShirt;