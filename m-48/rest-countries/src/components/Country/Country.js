import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div className='show-countries'>
            <h2>Country name : {props.name}</h2>
            <p>Population : {props.population}</p>
        </div>
    );
};

export default Country;