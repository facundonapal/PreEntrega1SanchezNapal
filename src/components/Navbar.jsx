import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import CartWidget from './CartWidget';
import Logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <AppBar className='navbar' position="static">
      <Toolbar className='toolbar'>
      <Box
            component="img"
            sx={{
            height: 64,
            }}
            alt="Your logo."
            src={Logo}
            className="navbar-logo"
        />
        <div className='navbar-categories-container'>
          <div className='navbar-category'><a>Category 1</a> </div>
          <div className='navbar-category'><a>Category 2</a> </div>
          <div className='navbar-category'><a>Category 3</a> </div>
          <div className='navbar-category'><a>Category 4</a> </div>
        </div>
        <div className="cart-widget">
          <CartWidget cartItemCount={4} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
