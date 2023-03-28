import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
             const qty = storedCart[id];
             addedProducts.qty = qty;
             console.log(addedProducts);

            //  add the addedProduct to the savedCart
             savedCart.push(addedProducts);
           }

           setCart(savedCart);
        }
        
    },[products])

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
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;