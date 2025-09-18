import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../components/Navber';
import Footer from '../components/Footer';

const RootLayOut = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayOut;