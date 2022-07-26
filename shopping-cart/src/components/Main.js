import React from 'react';
import Product from './Product';
import { Grid, Container, Typography } from '@mui/material';
import useStyles from '../Style';

export default function Main(props) {
    const classes = useStyles()
    const { products, onAdd } = props;
    return <main>
        <Typography variant='h4' color='white'>Products</Typography>
        <Container className={classes.cardContainer}>
            <Grid container >
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </Grid>

        </Container>
        {/* </Grid> */}
    </main >
}