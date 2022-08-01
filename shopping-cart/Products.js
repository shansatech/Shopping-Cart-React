import React, { useState, useEffect } from 'react'
import { Typography, Container, Card, CardContent, CardMedia, CardActions, Button, Grid } from '@mui/material';
import useStyles from './Style';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function Products() {
    const classes = useStyles()
    const [data, setData] = useState([])

    useEffect(() => {
        getApi();
    }, [])
    const getApi = () => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setData(json)
            })
    }


    const onAdd = () => {

    }

    const onRemove = () => {
        alert('bye')
    }
    return (
        <div>
            {data.map((item) => {
                return (
                    <div>
                        <h4>{item.title}</h4>
                    </div>
                )
            })}
        </div>

    )
}

export default Products