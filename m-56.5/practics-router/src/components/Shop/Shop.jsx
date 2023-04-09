import React, { useContext } from 'react';
import { productsContext } from '../../App';
import Product from './product';

const Shop = () => {

    const products =  useContext(productsContext);
    return (
       
         <div className='grid md:grid-cols-3 gap-9  justify-center w-10/12 m-auto my-5'>
             {
               products.map(product => <Product key={product.id} product={product}></Product>) 
            }
         </div>
        
    );
};

export default Shop;