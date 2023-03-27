import React, { useEffect, useState } from 'react';
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
        console.log(newCart);
        setCart(newCart)
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
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;