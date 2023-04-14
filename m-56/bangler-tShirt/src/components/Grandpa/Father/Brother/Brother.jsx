import React, { useContext } from 'react';
import { ringAnother } from '../../Grandpa';

const Brother = () => {
    const ring = useContext(ringAnother)
    return (
        <div>
            <h2>Brother</h2>
            <p>{ring}</p>
        </div>
    );
};

export default Brother;