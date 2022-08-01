import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Basket from '../components/Basket';
import data from '../components/Data'
import { Grid } from '@mui/material';

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cartItems') || '[]')

function Home() {

    const { products } = data;
    const [cartItems, setCartItems] = useState(cartFromLocalStorage)

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id)
        if (exist) {
            setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }])
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
        <div className="Home">
            {/* <Routes>
        <Route>
          
        </Route>
 </Routes> */}

            <div>
                <Navbar countCartItems={cartItems.length} />
            </div>

            <div className="content" style={{ marginTop: '40px', marginLeft: '30px', }}>
                <Grid container spacing={4}>
                    <Grid item xs={8} style={{ background: 'linear-gradient(-45deg,  #9bdad0, #0f4667 )', borderRadius: '25px' }}>
                        <Main onAdd={onAdd} products={products} />
                    </Grid>
                    <Grid item xs={4} style={{ background: 'linear-gradient(45deg, #bc8cd9, #d98caf )', borderRadius: '25px' }}>
                        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Home;