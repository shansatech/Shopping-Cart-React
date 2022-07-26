import React from 'react';
import { Badge, Typography, AppBar, Toolbar } from '@mui/material';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Navbar(props) {
    const { countCartItems } = props
    return (
        <AppBar style={{ position: 'relative', background: 'linear-gradient(45deg, #332e36, #80b6c7 )', borderRadius: '25px' }}>
            <Toolbar style={{ justifyContent: 'space-between', size: '30px' }}>
                <Typography variant='h4'>Shopping Cart</Typography>
                <Badge color="secondary" badgeContent={countCartItems} position="relative" style={{ marginRight: "20px", display: 'flex', alignItems: 'center' }}>
                    <ShoppingCartIcon />{' '}
                </Badge>
            </Toolbar>
        </AppBar>
    )
}