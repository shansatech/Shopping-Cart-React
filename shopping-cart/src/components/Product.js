import React from 'react'
import { Typography, Button, CardContent, CardActions, CardMedia, Card, Grid } from '@mui/material';
import useStyles from '../Style';
import useFetch from './useFetch';


export default function Product(props) {
    const { product, onAdd, onDelete } = props;
    const { data: products, isPending, error } = useFetch('http://localhost:8000/products')

    // console.log("product", product)
    const classes = useStyles()

    return (

        <Grid className={classes.cardGrid} maxWidth='md' >
            <Card className={classes.card} >
                <CardMedia
                    className={classes.cardMedia}
                    image={product.image}
                    title='Image Title'
                />
                <CardContent className={classes.CardContent}>
                    <Typography gutterBottom variant='h5' >
                        {product.name}
                    </Typography>
                    <Typography gutterBottom>
                        <strong>₹ {parseInt(product.price)}</strong>
                    </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                    <Button variant='contained' size="small" color='primary' onClick={() => onAdd(product)}>Add to Cart</Button>
                    <Button variant='contained' size="small" color='secondary' onClick={onDelete}>Delete</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
