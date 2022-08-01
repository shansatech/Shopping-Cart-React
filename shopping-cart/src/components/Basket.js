import React from 'react';
import { Button, Grid, Typography, CardActions } from '@mui/material'

export default function Basket(props) {
    const { cartItems, onAdd, onRemove } = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    const taxPrice = itemsPrice * 18 / 100
    const shippingPrice = itemsPrice >= 50000 ? 0 : itemsPrice >= 30000 ? 20 : itemsPrice >= 20000 ? 30 : 40;

    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (

        <aside style={{ paddingRight: '30px' }}>
            <Typography variant='h4' color='white'>Cart Items</Typography>
            <Grid paddingTop={'30px'} paddingLeft={'20px'}> {cartItems.length === 0 && <Typography color='white' >Your cart is empty</Typography>} </Grid>
            {cartItems.map((item) => (
                <Grid style={{ display: "flex", justifyContent: 'space-between' }}>
                    <Typography width={'100px'}>
                        {item.name}
                    </Typography>
                    <Grid display={'flex'}>
                        <Grid padding='1px'>
                            <Button variant='contained' color='primary' style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} onClick={() => onAdd(item)} className='add'>+</Button >
                        </Grid>
                        <Grid padding='1px'>
                            <Button variant='contained' color='secondary' style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} onClick={() => onRemove(item)} className='remove'>-</Button >
                        </Grid>

                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: 'space-between' }} textwrap={'nowrap'} width={'120px'}>
                        {item.qty} x <div styles={{ textAlign: 'right' }}>₹ {item.price.toFixed(2)}</div>
                    </Grid>
                </Grid>

            ))
            }
            {
                cartItems.length !== 0 &&
                <Grid >
                    <hr></hr>
                    <Grid >
                        <Grid style={{ display: "flex", justifyContent: 'space-between' }}>
                            <Typography >Items Price</Typography>
                            <Grid>₹ {itemsPrice.toFixed(2)}</Grid>
                        </Grid>
                        <Grid style={{ display: "flex", justifyContent: 'space-between' }}>
                            <Typography >Tax Price</Typography>
                            <Grid >₹ {taxPrice.toFixed(2)}</Grid>
                        </Grid>
                        <Grid style={{ display: "flex", justifyContent: 'space-between' }}>
                            <Typography >Shipping Price</Typography>
                            <Grid >₹ {shippingPrice.toFixed(2)}</Grid>
                        </Grid>
                    </Grid>
                    <hr></hr>
                    <Grid style={{ display: "flex", justifyContent: 'space-between' }}>
                        <Typography ><strong>Total Price</strong></Typography>
                        <Grid ><strong>₹ {totalPrice.toFixed(2)}</strong></Grid>
                    </Grid>
                    <hr />
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button variant='contained' onClick={() => alert('Thanks for shopping')}>Checkout</Button>
                    </CardActions>
                </Grid>
            }
        </aside >
    )
}