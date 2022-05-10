import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header '>
            <div>
                <h3 className='logo'>Header</h3>
            </div>
            <div className='items'>
                <Link to="/home">Home</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;