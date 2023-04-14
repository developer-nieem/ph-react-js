import React, { useContext } from 'react';
import { ringAnother } from '../../Grandpa';

const Myself = ({ring}) => {
    const useRIng = useContext(ringAnother)
    return (
        <div>
            <h2>MySelf</h2>
            <p>{ring}</p>
           
            
            <p>{useRIng}</p>
           
        </div>
    );
};

export default Myself;