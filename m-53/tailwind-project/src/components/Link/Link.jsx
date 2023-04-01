import React from 'react';

const Link = ({item}) => {
    return (
        <>
            
            <li className='list-none '><a className='text-black' href={item.path}>{item.name}</a></li>
        </>
    );
};

export default Link;