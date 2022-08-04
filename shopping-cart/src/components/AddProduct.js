import React, { useState } from 'react'
import { Typography, Button, Grid, TextField } from '@mui/material';

function AddProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        const newProducts = { name, price, image }
        console.log(newProducts)

        fetch('http://localhost:8000/products', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProducts)
        })
            .then(() => {
                console.log('new products added')
            })
    }

    return (
        <Grid>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '60vh' }} >

                <form onSubmit={submitHandler}>
                    <Typography variant='h4' color='primary' display='flex' justifyContent='center'>Add New Product</Typography>
                    {/* {(error !== '') ? (<div>{error}</div>) : ''} */}

                    <Grid>
                        <Typography htmlFor="name">Name: </Typography>
                        <TextField
                            type="text"
                            required
                            name="name"
                            id="name"
                            placeholder="Enter your name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </Grid>
                    <Grid>
                        <Typography htmlFor="text">Price: </Typography>
                        <TextField
                            type="number"
                            required
                            name="price"
                            id="price"
                            placeholder="Enter the price"
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                        />
                    </Grid>
                    <Grid>
                        <Typography htmlFor="image">Image_Url: </Typography>
                        <TextField
                            type="text"
                            required
                            name="image"
                            id="image"
                            placeholder="Enter the image_URL"
                            // helperText={error}
                            onChange={(e) =>
                                setImage(e.target.value)
                            }
                            value={image}
                        />
                    </Grid>
                    {/* <Grid helperText={setError}></Grid> */}
                    <Grid marginTop='10px' display='flex' justifyContent='center'>
                        <Button type="submit" variant="contained" >Launch New Product</Button>
                    </Grid>

                </form>
            </Grid>
        </Grid>

    )
}

export default AddProduct
