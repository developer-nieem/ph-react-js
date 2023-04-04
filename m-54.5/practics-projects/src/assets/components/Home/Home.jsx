import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <div>{navigation.state === "loading" ? <Loading></Loading>: ''}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;