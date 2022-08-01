import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, TextField, Grid, FormControl, Box, } from '@mui/material'
// import Home from '../Home/Home';

const adminUser = {
    email: "admin@admin.com",
    password: "admin@123"
};

function LoginForm() {
    const [details, setDetails] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("details", details);

        if (details.email === '' ||
            details.password === '') {
            setError('Please enter the given text field')
        } else if (
            details.email !== adminUser.email ||
            details.password !== adminUser.password
        ) {
            setError("Details do not match!");
        }
        else {
            navigate("/cart");
        }

        // details.email == adminUser.email && details.password == adminUser.password
        //   ? navigate("/cart")
        //   : "Details do not match";
        // Login(details)
        // console.log(Login)
        // console.log(details)
    };

    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '60vh' }} >
            <form onSubmit={submitHandler}>
                <Typography variant='h4' color='primary'>Login</Typography>
                {(error !== '') ? (<div>{error}</div>) : ''}

                <Grid>
                    <Typography htmlFor="name">Name: </Typography>
                    <TextField
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) => setDetails({ ...details, name: e.target.value })}
                        value={details.name}
                    />
                </Grid>
                <Grid>
                    <Typography htmlFor="email">Email: </Typography>
                    <TextField
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => setDetails({ ...details, email: e.target.value })}
                        value={details.email}
                    />
                </Grid>
                <Grid>
                    <Typography htmlFor="password">Password: </Typography>
                    <TextField
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) =>
                            setDetails({ ...details, password: e.target.value })
                        }
                        value={details.password}
                    />
                </Grid>
                <Grid marginTop='10px' display='flex' justifyContent='center'>
                    <Button type="submit" variant="contained" >Signin</Button>
                </Grid>

            </form>
        </Grid>
    );
}
export default LoginForm;
