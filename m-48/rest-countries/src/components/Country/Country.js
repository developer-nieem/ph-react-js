import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props.country);
    // console.log(props.country);
    const {name , area , population, flags} = props.country
    return (
        <div className='show-countries'>
            <img src={flags.png} alt="" srcset="" />
            <h2>Name {name.common}</h2>
            <p>Area : {area}</p>
            <p>Popuation : {population}</p>
        </div>
    );
};

export default Country;