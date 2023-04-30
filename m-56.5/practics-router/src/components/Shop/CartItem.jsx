import React, { useContext, useState } from 'react';
import { getShoppingCart, removeFromDb } from '../../utilitis/fakeDB';
import { useLoaderData } from 'react-router-dom';
import { CartContext, ProductsContext } from '../../App';

const CartItem = () => {
   const cartItem =  useContext(CartContext)
  
    const [cart , setCart] = useState(cartItem)

   const delateCartItem = (id) => {
        removeFromDb(id)
        const remaining =  cart.filter(pd => pd.id !== id);
        setCart(remaining)

   }
    return (
        <div>
          {
           cart.map(item => <div className='w-[70%] m-auto'>
                <div className="card  card-side bg-base-100 shadow-xl my-4">
                <figure><img className='w-40' src={item.picture} alt="Movie"/></figure>
                <div className="card-body  ">
                 <div className='flex justify-between'>
                    <div>
                            <h2 className="card-title">{item.name}</h2>
                            <p>Quantity : {item.quantity}</p>
                            <button onClick={()=> delateCartItem(item.id)} className='btn btn-error mt-5 p-3'>Remove</button>
                    </div>
                    <div className="">
                            <p className='text-xl font-medium'>Price: ${item.price} </p>
                            <p>Total: {item.price * item.quantity}$</p>
                    </div>
                 </div>
                   
                </div>
                </div>
            </div> )
          }
        </div>
    );
};

export default CartItem;