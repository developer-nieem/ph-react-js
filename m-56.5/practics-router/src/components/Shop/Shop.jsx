import React, { useContext } from 'react';
import { ProductsContext } from '../../App';
import Product from './product';
import { addToDB } from '../../utilitis/fakeDB';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {

    // const products =  useContext(productsContext);
    // console.log(products);
    const products = useContext(ProductsContext)
    // const products = useLoaderData();

    console.log(products);
    // card button handler
    const addToCartHandler = (id) => {
        console.log(id);

        addToDB(id)
    }
    return (
       
         <div className='grid md:grid-cols-3 gap-9  justify-center w-10/12 m-auto my-5'>
             {
               products.map(product => <Product 
                key={product.id} 
                product={product}
                addToCartHandler={addToCartHandler}
                ></Product>) 
            }
         </div>
        
    );
};

export default Shop;