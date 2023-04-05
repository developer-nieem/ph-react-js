import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] =useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, [])

    const addTOCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.id)
    }

    useEffect(()=>{
        const storedCart= getShoppingCart();
        console.log(storedCart);
            const savedCart = [];

        // step 1: get id from localStorage
        for (const id in storedCart) {

            // step 2: find products bu using id 
           const addedProducts = products.find(product=> product.id === id);
           
           if(addedProducts){
             //  step 3: find qty and set qty in product
             const quantity = storedCart[id];
             addedProducts.quantity = quantity;
             console.log(addedProducts);

            //  add the addedProduct to the savedCart
             savedCart.push(addedProducts);
           }

           setCart(savedCart);
        }
        
    },[products])
    const clearAllCart = () =>{
        setCart([])
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='grid grid-cols-3 gap-4 mx-4 mt-10'>
                {
                    products.map(product => <Product 
                        product={product}
                         key={product.id}
                         addTOCart ={addTOCart}
                         ></Product>)
                }
            </div>
            <div className='bg-[#FF99004D] p-3 ' >
               <Cart clearAllCart={clearAllCart} cart={cart}>

               <Link to='/orders'><button className='w-56 mt-3 bg-amber-500'>
                order review  </button>
                </Link>
               </Cart>
               
            </div>
        </div>
    );
};

export default Shop;