import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'
const Navbar = () => {
    return (
      <div className="navbar">
          <img src={logo} alt="logo" width="20px"/>
      </div>
    );
};

export default Navbar;