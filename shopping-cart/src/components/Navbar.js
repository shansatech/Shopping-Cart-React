import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge, Typography, AppBar, Toolbar, Button, Grid } from '@mui/material';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useAuth } from './auth';

export default function Navbar(props) {
    const { countCartItems } = props
    const navigate = useNavigate()
    const auth = useAuth()

    const handleLogout = () => {
        auth.logout()
        localStorage.setItem('isLoggedIn', false)
        navigate('/signin')
    }

    return (
        <AppBar style={{ position: 'relative', background: 'linear-gradient(45deg, #332e36, #80b6c7 )', borderRadius: '25px' }}>
            <Toolbar style={{ justifyContent: 'space-between', size: '30px' }}>
                <Typography variant='h4'>Shopping Cart</Typography>
                <Grid style={{ display: 'flex', justifyContent: 'space-between', size: '30px' }}>
                    <Badge color="secondary" badgeContent={countCartItems} position="relative" style={{ marginRight: "30px", display: 'flex', alignItems: 'bottom' }}>
                        <ShoppingCartIcon />{' '}
                    </Badge>
                    <Button variant='contained' onClick={handleLogout}>Sign-out</Button>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}