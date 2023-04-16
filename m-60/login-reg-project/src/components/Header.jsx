import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Login from "./Login";

const Header = () => {

  const {users, logOut} =  useContext(AuthContext);
  console.log(users);

  const logoutHandler = () =>{
    logOut()
    .then(()=>{})
    .then(error=> {console.log(error.message)})
  }
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Auth Power</a>
        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/order'>Order</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
        <Link className="btn btn-ghost normal-case text-xl"  to='/register'>Register</Link>
        {
          users &&  <Link className="btn btn-ghost normal-case text-xl"  to='/profile'>Profile</Link>
        }

        {
            users ? <span>{users.email} <button onClick={logoutHandler} className="btn btn-xs">Sign out</button></span> : <span><Link to='/login' className="btn btn-xs">Log in</Link></span>
        }
      </div>
    </div>
  );
};

export default Header;
