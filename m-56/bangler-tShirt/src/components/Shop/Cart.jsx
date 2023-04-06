import React from 'react';

const Cart = ({cart, removeCartItem}) => {
    // if else condition
    let message;
    if(cart.length === 2){
        message = <div>You can go</div>
    }else{
        message = <div>add more</div>
    }

    return (
        <div>
            <h2 className='text-2xl'>How many cart added : {cart.length}</h2>
            {/* ternary condition */}
            {cart.length === 3 ? <h1>3</h1> : <h1>low</h1> }

            {/* && condition */}
            { cart.length < 2 && <p>choto</p> }

            {/* || conditon */}
            {cart.length === 2 || <p className='text-4xl'>bujinai</p> }
            {message}
            {
                cart.map(cartItem =>  <div>
                    <span>{cartItem.name}</span> <button onClick={()=> removeCartItem(cartItem._id)} className='bg-slate-400 p-2 m-2 rounded-full'>X</button>
                </div> )
            }
        </div>
    );
};

export default Cart;