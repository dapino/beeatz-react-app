import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className='Header'>
        <Link to="/">Home</Link>
        <Link to="login">Login</Link>
        <Link to="search">Search</Link>
    </div>
);

export default Header;
