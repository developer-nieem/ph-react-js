import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const cartItems =  useLoaderData();
    console.log(cartItems);
    return (
        <div>
           order 
        </div>
    );
};

export default Orders;