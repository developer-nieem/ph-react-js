import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, addToCartHandler }) => {
  // console.log(product);
  return (
    <div>
      <div className="card  bg-[#F3F4F6] shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={product.picture}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{product.name}</h2>
          <p>Category: {product.category}</p>
          <p className="font-bold">Price ${product.price}</p>
          <div className="text-center mt-2">
            <Link><button onClick={()=> addToCartHandler(product.id)} className="btn bg-[#D6EBFF] btn-wide text-black border-0 hover:bg-slate-400">Buy Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
