import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Shop.css'
import TShirt from './TShirt';
import Cart from './Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Shop = () => {
    const shirtItems =  useLoaderData();

    const [cart , setCart] = useState([])

    const addToShoppingCart = (id) =>{
        const exist =  cart.find(ts => ts._id === id._id);
        if (exist) {
            toast('🦄 Wow so easy!'
                );
           
        }else{
            const newCart =  [...cart , id];
            setCart(newCart)
        }

    }
    
    const removeCartItem =(id) =>{
        const remaining =  cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }
    return (
        <div className='shop-design'>
            <div className='grid grid-cols-3  '>
                {
                   shirtItems.map(items => <TShirt 
                    key={items._id}
                     tshirt={items}
                     addToShoppingCart={addToShoppingCart}
                     ></TShirt>) 
                }
            </div>
            <div>
               <Cart removeCartItem={removeCartItem} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;