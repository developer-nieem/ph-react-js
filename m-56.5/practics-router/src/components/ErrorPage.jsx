import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
console.log(error);
  return (
    <div className="flex justify-center mt-36 "> 
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Page not found {error.status}</h2>
          <p>{error.error.message}</p>
          <div className="card-actions justify-end">
            <Link to='/'><button className="btn btn-primary">Back to HomePage</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
