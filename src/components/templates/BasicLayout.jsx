import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const MainLayout = ({children}) => (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
);

export default MainLayout;
