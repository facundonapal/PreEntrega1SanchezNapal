import React from 'react';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = ({ cartItemCount }) => {
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={cartItemCount} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartWidget;
