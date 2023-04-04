import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const MealDetails = () => {
    const mealDetails =  useLoaderData();
    const navigate =  useNavigate()
    return (
        <div className='flex justify-center my-6'>
            {
                mealDetails.meals.map(meal => <div>
                    <div className="card w-[700px] bg-base-100 shadow-xl">
                        <figure><img className='w-96 rounded-lg' src={meal.strMealThumb} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            {meal.strMeal}
                            <div className="badge badge-secondary">{meal.strCategory}</div>
                            </h2>
                            <p>{meal.strInstructions}</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">Area: {meal.strArea}</div>
                            <div className="badge badge-outline">Products id: {meal.idMeal}</div>
                            
                            </div>
                            <button onClick={() => { navigate(-1)}} className='btn btn-primary mt-10'>Go Back</button>
                        </div>
                        </div>
                </div> )
            }
        </div>
    );
};

export default MealDetails;