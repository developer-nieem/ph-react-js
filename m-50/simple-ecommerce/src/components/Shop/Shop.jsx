import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] =useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='grid grid-cols-3 gap-4 mx-4 mt-10'>
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>
            <div >
                <h1>Order summery </h1>
            </div>
        </div>
    );
};

export default Shop;