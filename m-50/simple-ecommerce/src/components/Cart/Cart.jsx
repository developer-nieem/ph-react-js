import React from 'react';

const Cart = ({cart}) => {

    let totalPrice= 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price
    }
    return (
        <div className='space-y-2'>
             <h2 className='text-3xl mt-2 mb-7'>Order summery </h2>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: {totalPrice}</p>
                <p>Total Shipping Charge:  </p>
                <p>Tax:  </p>
                <h3 className='font-semibold text-2xl'>Grand Total: </h3>
        </div>
    );
};

export default Cart;