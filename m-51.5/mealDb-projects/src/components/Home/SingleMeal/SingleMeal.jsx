import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

const SingleMeal = ({singleMeal, addMeal}) => {
    // console.log(singleMeal);
    return (
        <div>
            
                <div className="col">
                    <div className="card h-100">
                    <img src={singleMeal.strMealThumb} className="card-img-top" alt="Meal"/>
                    <div className="card-body">
                        <h5 className="card-title">{singleMeal.strMeal}</h5>
                        <p className="card-text">{singleMeal.strInstructions.slice(1,100)}...</p>
                        <p>Category: <b>{singleMeal.strCategory}</b></p>
                    </div>
                    <div >
                        <button onClick={()=>addMeal(singleMeal)} className='btn btn-primary w-100'>Add Meal <FontAwesomeIcon icon={faUtensils} /></button>
                    </div>
                    </div>
                </div>
                
        </div>
    );
};

export default SingleMeal;