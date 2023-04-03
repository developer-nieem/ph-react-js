import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const ActiveLink = useNavigation()
    return (
        <div>
            <Header></Header>
            <div>{ActiveLink.state === "loading" && "loading...." }</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;