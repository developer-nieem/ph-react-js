import React from 'react';

const Cart = ({cart}) => {

  
    let totalPrice= 0;
    let totalShipping= 0;
    let totalQty = 0;
    
    for (const product of cart) {
        if(product.quantity === 0){
            product.quantity = 1;
        }
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        totalQty = totalQty + product.quantity
    }

    const tax =  totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='space-y-2 sticky top-0'>
             <h2 className='text-3xl mt-2 mb-7'>Order summery </h2>
                <p>Selected Items: {totalQty}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge:  ${totalShipping}</p>
                <p>Tax:  ${tax.toFixed(2)}</p>
                <h3 className='font-semibold text-xl'>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;