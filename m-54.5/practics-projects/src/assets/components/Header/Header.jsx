import React, { useState } from "react";
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [open , setOpen] = useState(false)
  return (
    <div>
        
      <div className="navbar bg-base-100 hidden md:inline-flex">
        <div className="flex-1">
          <Link to='/'><a className="btn btn-ghost normal-case text-xl">MealDB</a></Link>
        </div>
        <div className="flex-none">
            
          <ul className={`menu menu-horizontal px-1 flex-col md:flex-row  md:opacity-100 `}>
            <li>
              <Link to='/restaurant'><a>Restaurant</a></Link>
            </li>
            <li>
              <Link to='/restaurant'><a>MealDb</a></Link>
            </li>
          </ul>
         
        </div>
      </div>
      


       {/* mobile menu */}
       

       <div className="navbar bg-base-100 md:hidden">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        
        <div className="flex jus">
       <Bars3BottomLeftIcon onClick={()=> setOpen(!open)} className="h-6 w-6 text-blue-500 md:hidden " /> </div>
      </div>
            
      <div className="text-right md:hidden">
      <ul className={`menu  menu-horizontal px-1 flex-col md:flex-row  md:opacity-100 ${open ? 'opacity-100': 'hidden'}`}>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
      </div>
      

    </div>
  );
};

export default Header;
