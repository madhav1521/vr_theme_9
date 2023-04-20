import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Container, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, Link, OutlinedInput, TextField, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { bgtriangle, brandlogo, mockup } from '../assets/images';

export default function Login() {
    // for password -------------------------------
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <>
            <Box className='login-page'>
                <Box className='hero-image '>
                    <img src={mockup} alt="hero-image" className='img-fluid'/>
                </Box>
        {/* <Container maxWidth='xl'> */}
                <Box className="login-container">
                    <Link href="/" title="brand-logo"> 
                    <img src={brandlogo} alt="logo" className='img-fluid' />
                    {/* <Svgcolors fill='primary' /> */}
                    </Link>
                    <Typography variant="h1" className="login-heading" marginBottom="6px" marginTop={{xs:'25px', md:'43px' }}>
                        Welcome Back!
                    </Typography>
                    <Typography variant="h5" className="login-subheading" marginBottom={{xs:'25px', md:'40px' }}>
                        Log in to your account
                    </Typography>
                    <Box className="login-form">
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    label="Username"
                                    type="text"
                                    autoFocus
                                    variant='standard'
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="standard-adornment-password">
                                        Password
                                    </InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={showPassword ? "text" : "password"}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                // edge="end"
                                                >
                                                    {showPassword ? <Visibility /> :<VisibilityOff /> }
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                    <Box className="btn-line" marginTop={{xs:'25px', md:'30px' }} marginBottom='26px'>
                                        <Button type="submit" disableElevation variant="contained" className="login-btn" onClick={() => { navigate("/dashboard"); }}>
                                            <Typography variant="body1" component="span" className="login" >
                                                Login
                                            </Typography>
                                        </Button>
                                        <Link href="#" className="forgot-password" title="forgot-password">
                                            Forgot Password?
                                        </Link>
                                    </Box>
                                    <Typography variant="body1" component="p" className="register-here">
                                        Don’t have an account ?<Link href="#" className="sign-up"> SIGN UP</Link>
                                    </Typography>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            {/* </Container> */}
                <img src={bgtriangle} alt="design-image" className='img-fluid' />
            </Box>
        </>
    )
}
