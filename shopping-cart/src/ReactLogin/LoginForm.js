import { useState, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../components/auth'
import { Button, Typography, TextField, Grid } from '@mui/material'

const adminUser = {
    email: "admin@admin.com",
    password: "admin@123"
};

const LoginForm = () => {
    const [details, setDetails] = useState({ name: "", email: "", password: "" })
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const location = useLocation()
    const auth = useAuth()
    const getEmail = localStorage.getItem('emailData')
    const getPassword = localStorage.getItem('passwordData')
    const getLogggedIn = localStorage.getItem('isLoggedIn')

    // const redirectPath = location.state?.path || '/'

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('auth', auth)
        if (details.email === '' || details.password === '') {

            setError('Please fill the blank text field')
        }

        else if (details.email !== adminUser.email || details.password !== adminUser.password) {
            setError("Details does not match! Enter correct details");
        }

        else {

            const user = {
                email: details.email,
                password: details.password
            }

            auth.login(user)
            localStorage.setItem("emailData", "admin@admin.com")
            localStorage.setItem("passwordData", "admin@123")
            localStorage.setItem('isLoggedIn', true)
            // navigate('/', { replace: true })
            {
                getEmail && getPassword && getLogggedIn ? navigate('/') : navigate('/signin')
            }
        }
    }

    return (
        <Grid>
            {/* <Grid>
                <Navbar />
            </Grid> */}
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '60vh' }} >


                <form onSubmit={submitHandler}>
                    <Typography variant='h4' color='primary' display='flex' justifyContent='center'>Login</Typography>
                    {/* {(error !== '') ? (<div>{error}</div>) : ''} */}

                    <Grid>
                        <Typography htmlFor="name">Name: </Typography>
                        <TextField
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your name"
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
                            placeholder="Enter your email"
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
                            helperText={error}
                            onChange={(e) =>
                                setDetails({ ...details, password: e.target.value })
                            }
                            value={details.password}
                        />
                    </Grid>
                    <Grid helperText={setError}></Grid>
                    <Grid marginTop='10px' display='flex' justifyContent='center'>
                        <Button type="submit" variant="contained" >Signin</Button>
                    </Grid>

                </form>

            </Grid>
        </Grid>
    )
}

export default LoginForm