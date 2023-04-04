import React from "react";
import { Link } from "react-router-dom";

const MealItem = ({ meal }) => {
//   console.log(meal);
  const {idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb} =  meal
  return (
    <div>
      <div className="card w-96 m-auto bg-base-100 shadow-xl">
        <figure>
          <img 
            src={strMealThumb}
            alt="meal"
          />
        </figure>
        <div className="card-body">
            <p>Category: {strCategory}, Area: {strArea}</p>
          <h2 className="card-title">{strMeal}</h2>
          <p>{strInstructions.slice(0,50)}...</p>
          <div className="card-actions justify-end">
            <Link to={`/meal/${idMeal}`}>Details</Link>
            <Link to={`/meal/${idMeal}`}><button className="btn btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealItem;
