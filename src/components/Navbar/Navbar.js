import React from 'react';
import { NavBar } from './navbarStyled.js';
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
      <NavBar>
          <img src={logo} alt="logo" width="20px"/>
      </NavBar>
    );
};

export default Navbar;