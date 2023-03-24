import React from 'react';
import { shop, shopTwo } from '../../utilities/shop';

const Jobs = () => {
    const shopOne = shop(12,3)
    const shopTwo1 = shopTwo(12, 12)
    return (
        <div>
            <h1>Nieem Hossen shop: {shopOne} and {shopTwo1}</h1>
        </div>
    );
};

export default Jobs;