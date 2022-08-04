import React from 'react';
import Product from './Product';
import { Grid, Container, Typography, } from '@mui/material';
import useStyles from '../Style';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

export default function Main(props) {

    const { products, onAdd, onDeleteProps } = props;
    // const [data, setData] = useState([])
    const classes = useStyles()

    // useEffect(() => {
    //     if (products) {
    //         setData(products)
    //     }
    // }, [])


    // const onDelete = (itemId) => {


    //     const filteredData = products.filter(i => i.id !== itemId)
    //     // products.splice(itemIndex, 1)
    //     // // console.log('vlaues::', values)
    //     // console.log('itemIndex:', itemIndex)
    //     // // setData(values)

    //     // console.log("*********************************//", values)

    //     // console.log("--------------------------------->")

    //     console.log("------------------------------------------------>", products)
    //     setData(filteredData)

    // }

    const renderProducts = () => {
        return products && products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd} onDelete={() => onDeleteProps(product.id)}></Product>
        ))
    }

    return <Grid>
        <Typography variant='h4' color='white'>Products</Typography>
        <Container className={classes.cardContainer}>

            <Grid container >
                {renderProducts()}
            </Grid>
        </Container>
        {/* </Grid> */}
    </Grid >
}