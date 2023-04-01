import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Nav = () => {
    const [open, setOpen] = useState(false)
    const route = [  {    "id": 1,    "name": "Home",    "path": "/"  },  {    "id": 2,    "name": "About Us",    "path": "/about"  },  {    "id": 3,    "name": "Services",    "path": "/services"  },  {    "id": 4,    "name": "Contact Us",    "path": "/contact"  }]

    return (
        <div >
            <div className='md:hidden'>
            
            
            {open === true ? <XMarkIcon onClick={()=>{setOpen(!open)}} className="h-6 w-6 text-blue-500" />
            : <Bars3Icon onClick={()=>{setOpen(!open)}} className="h-6 w-6 text-blue-500" />}
            </div>

            <ul className={`md:flex gap-2 md:opacity-100 duration-500 p-4 ${open ? 'opacity-100': 'opacity-0'}`}>
                    {
                    route.map(item=> <Link 
                        key={item.id}
                        item={item}
                        ></Link>)  
                    }
            </ul>
        </div>
    );
};

export default Nav;