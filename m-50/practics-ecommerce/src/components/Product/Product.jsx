import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
     const {name,price,seller,ratings,img} = props.product

    const addToCart = props.addToCart;
    return (
        <>
                <div className="col">
                    <div className="card h-100 p-0">
                        <img src={img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text fw-semibold">Price: {price}</p>
                                <p className='mt-5 pt-5'>Manufacturer: {seller}</p>
                                <p> Ratting: {ratings} star</p>
                            </div>
                            <div className="card-footer p-0  ">
                               <button onClick={()=>addToCart(props.product)} className='w-100  bg-warning-subtle'>Add to Cart
                               <FontAwesomeIcon icon={faCartShopping} />
                               </button>
                            </div>
                    </div>
                </div>
        </>
    );
};

export default Product;