import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Basket from '../components/Basket';
// import data from '../components/Data'
import { Grid } from '@mui/material';
import useFetch from '../components/useFetch';
import AddProduct from '../components/AddProduct';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const cartFromLocalStorage = JSON.parse(localStorage.getItem('cartItems') || '[]')

function Home() {

    // const { id } = useParams();
    const { data: products, isPending, error } = useFetch('http://localhost:8000/products')

    const [data, setData] = useState();
    const [cartItems, setCartItems] = useState(cartFromLocalStorage);
    const navigate = useNavigate()

    useEffect(() => {
        setData(products)
    }, [products])

    const onDeleteProps = (itemId) => {
        const filteredData = data.filter(i => i.id !== itemId)
        // products.splice(itemIndex, 1)
        // // console.log('vlaues::', values)
        // console.log('itemIndex:', itemIndex)
        // // setData(values)

        // console.log("*********************************//", values)

        // console.log("--------------------------------->")

        console.log("------------------------------------------------>", data)
        setData(filteredData)
    }

    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id)
        if (exist) {
            setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }])
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
        }
    }

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id))
        } else {
            setCartItems(
                cartItems.map((x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
            )
        }
    }
    return (
        <Grid className="Home">

            <Grid>
                <Navbar countCartItems={cartItems.length} />
            </Grid>

            <Grid className="content" style={{ marginTop: '40px', marginLeft: '30px', }}>
                <Grid container spacing={4}>
                    <Grid item xs={8} style={{ background: 'linear-gradient(-45deg,  #9bdad0, #0f4667 )', borderRadius: '25px' }}>
                        < Main onAdd={onAdd} products={data} onDeleteProps={(id) => onDeleteProps(id)} />
                        {isPending && <Grid color='white'>Loading....</Grid>}
                        {error && <Grid color='white'>{error} </Grid>}
                    </Grid>
                    <Grid item xs={4} style={{ background: 'linear-gradient(45deg, #bc8cd9, #d98caf )', borderRadius: '25px' }}>
                        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
                    </Grid>
                    <Grid>
                        <AddProduct />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Home;