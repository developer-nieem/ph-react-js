import React from "react";

const Product = (props) => {
    const {img,name,price,seller,ratings} =props.product
  return (
    <div >
      <div className="card w-full bg-base-100 shadow-xl p-0 h-[600px]">
        <figure className="p-2 ">
          <img className="rounded-lg"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold">
            {name}
          </h2>
          <p className="font-semibold">Price: ${price}</p>
          <p className="mt-12">Manufacturer: {seller}</p>
          <p>Rating: {ratings} Star</p>
          
        </div>
        <div className="">
            <button className="btn btn-block bg-[#FFE0B3] text-black border-0 hover:text-white rounded-none">Add to Cart</button>
            
          </div>
      </div>
    </div>
  );
};

export default Product;
