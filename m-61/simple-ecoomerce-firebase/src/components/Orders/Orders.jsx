import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, getShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';

const Orders = () => {
    const savedCart =  useLoaderData();
    
    const [orderItem, setOrderItem] = useState(savedCart);

    const removeCartItem =(id)=>{
        const getCartId = orderItem.filter(pd => pd.id !== id);
        setOrderItem(getCartId);
        removeFromDb(id)
    }

    const clearAllCart = () =>{
        setOrderItem([])
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
        <div className='gap-4 mx-4 mt-10'>
           {
           orderItem.map(product => <CartItem 
            key={product.id}
            product={product}
            removeCartItem = {removeCartItem}

            
            ></CartItem>)
           }
        </div>
        <div className='bg-[#FF99004D] p-3 ' >
           <Cart clearAllCart={clearAllCart} cart={orderItem}>
          
           <Link to='/checkout'><button  className='w-56 bg-amber-500'>Proceed Checkout  </button></Link>
          
           </Cart>
           
        </div>
    </div>
    );
};

export default Orders;