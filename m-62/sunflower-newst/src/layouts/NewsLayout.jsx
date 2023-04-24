import React from 'react';
import Header from '../Pages/Shared/Header';
import RightNav from '../Pages/Shared/RightNav/RightNav';
import News from '../Pages/News';
import { Outlet, useLoaderData } from 'react-router-dom';

const NewsLayout = () => {
   
    return (
        <div>
            <Header></Header>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <Outlet></Outlet>
                    </div>
                    <div className="col-md-3">
                        <RightNav></RightNav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLayout;