import React from 'react';
import Header from '../ShearSection/Header/Header';
import Footer from '../ShearSection/Footer/Footer';
import { Outlet } from 'react-router-dom';

const HomePageLayout = () => {
    return (
        <div className='bg-[#FAF9FF]'>
            <div className='h-[90px]'><Header></Header></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomePageLayout;