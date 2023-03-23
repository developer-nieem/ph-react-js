import React from 'react';

const Country = (props) => {
    const {name, area, population, flags} = props.country
    return (
        <div className='bg-primary-subtle p-4 m-4 border border-primary border-3'>
            <img src={flags.png} alt="" />
           <h2>Name: {name.common}</h2> 
           <p>Area : {area}</p>
           <p>Population : {population}</p>
        </div>
    );
};

export default Country;