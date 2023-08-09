import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import CartWidget from './CartWidget';
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar className='navbar' position="static">
      <Toolbar className='toolbar'>
        <Link to={'/'}>
          <Box
                component="img"
                sx={{
                height: 64,
                }}
                alt="Your logo."
                src={Logo}
                className="navbar-logo"
            />
        </Link>
        <div className='navbar-categories-container'>
          <Link to={`/category/${'cat1'}`}>
            <div className='navbar-category--button'><a>Cat 1</a> </div>
          </Link>
          <Link to={`/category/${'cat2'}`}>
            <div className='navbar-category--button'><a>Cat 2</a> </div>
          </Link>
          <Link to={`/category/${'cat3'}`}>
            <div className='navbar-category--button'><a>Cat 3</a> </div>
           </Link>
           <Link to={`/category/${'cat4'}`}>
            <div className='navbar-category--button'><a>Cat 4</a> </div>
          </Link>
        </div>
        <Link to={'/cart'}>
        <div className="cart-widget">
          <CartWidget cartItemCount={4} />
        </div>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
