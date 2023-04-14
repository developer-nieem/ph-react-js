import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = getShoppingCart();
        // console.log(storedCart);
        const saveCart = [];
        for (const id in storedCart) {
            const allAddedCart =  products.find(product => product.id === id);
            // console.log(allAddedCart);
            if (allAddedCart) {
            const quantity = storedCart[id];
            allAddedCart.quantity = quantity;
            saveCart.push(allAddedCart);
            }
        }
        setCart(saveCart)
    },[products])

    const addToCart = (product) =>{
            const newCart = [...cart, product]
            setCart(newCart);
            addToDb(product.id)
        
     }
    return (
        <div className='row p-2'>
            <div className='col-sm-9 '>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product=> <Product addToCart={addToCart} product={product}></Product>)
                }
                </div>
            </div>
            <div className='col-sm-3'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Products;