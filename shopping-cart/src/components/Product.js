import React from 'react'
import { Typography, Button, CardContent, CardActions, CardMedia, Card, Grid } from '@mui/material';
import useStyles from '../Style';

export default function Product(props) {
    const { product, onAdd } = props;
    console.log("product", product)
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
                        <strong>₹ {product.price}</strong>
                    </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                    <Button variant='contained' color='primary' onClick={() => onAdd(product)}>Add to Cart</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
