import React from 'react';

const Cart = ({cart}) => {

    let totalPrice= 0;
    let totalShipping= 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping
    }

    const tax =  totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='space-y-2 sticky top-0'>
             <h2 className='text-3xl mt-2 mb-7'>Order summery </h2>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge:  ${totalShipping}</p>
                <p>Tax:  ${tax.toFixed(2)}</p>
                <h3 className='font-semibold text-xl'>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;