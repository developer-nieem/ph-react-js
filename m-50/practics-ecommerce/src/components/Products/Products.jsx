import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
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
        
    },[])

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