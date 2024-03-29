import { useFileHandler, useInputValidation } from '6pp'
import { CameraAlt } from '@mui/icons-material'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents'
import { usernameValidator } from '../utils/validators'

const Login = () => {
    const [isLogin, setIsLogin] = useState(true)
    const toggleLogin = () => setIsLogin(!isLogin)
    const name = useInputValidation("")
    const bio = useInputValidation("")
    const username = useInputValidation("", usernameValidator)
    const password = useInputValidation("")
    const avatar = useFileHandler('single')
    const handleLogin = (e) => {
        e.preventDefault()
    }
    const handleSignUp = (e) => {
        e.preventDefault()
    }
    return (
        <div style={{ backgroundImage: "linear-gradient(rgba(220,210,200,0.5),rgba(120,110,220,0.5))" }}>
            <Container component={"main"} maxWidth="xs" sx={{ height: '100vh', display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Paper elevation={3} sx={{ padding: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    {isLogin ? (
                        <>
                            <Typography variant='h5'>Login</Typography>
                            <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleLogin}>
                                <TextField required fullWidth label="Username" margin='normal' variant='outlined' value={username.value} onChange={username.changeHandler} />
                                {username.error && <Typography color='error' variant='caption'>{username.error}</Typography>}
                                <TextField required fullWidth label="Password" margin='normal' variant='outlined' type='password' value={password.value} onChange={password.changeHandler} />
                                {password.error && <Typography color='error' variant='caption'>{password.error}</Typography>}
                                <Button sx={{ marginTop: "1rem" }} variant='text' color='primary' type='submit' fullWidth>Login</Button>
                                <Typography textAlign={'center'} m={'1rem'}>Or</Typography>
                                <Button variant='text' color='secondary' fullWidth onClick={toggleLogin}>Sign Up Instead</Button>
                            </form>
                        </>
                    ) : (
                        <>
                            <Typography variant='h5'>Sign Up</Typography>
                            <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleSignUp}>
                                <Stack position={'relative'} width={'10rem'} margin={'auto'}>
                                    <Avatar sx={{ width: "10rem", height: '10rem', objectFit: 'contain' }} src={avatar.preview} />
                                    {avatar.error && <Typography color='error' m={'1rem'} width={'fit-content'} display={'block'} variant='caption'>{avatar.error}</Typography>}
                                    <IconButton sx={{ position: "absolute", bottom: "0", right: "0", color: "white", bgcolor: "rgba(0,0,0,0.5)", ":hover": { bgcolor: "rgba(0,0,0,0.7)" }, }} component="label">
                                        <>
                                            <CameraAlt />
                                            <VisuallyHiddenInput type='file' onChange={avatar.changeHandler} />
                                        </>
                                    </IconButton>
                                </Stack>
                                <TextField required fullWidth label="Name" margin='normal' variant='outlined' value={name.value} onChange={name.changeHandler} />
                                <TextField required fullWidth label="Bio" margin='normal' variant='outlined' value={bio.value} onChange={bio.changeHandler} />
                                <TextField required fullWidth label="Username" margin='normal' variant='outlined' value={username.value} onChange={username.changeHandler} />
                                {username.error && <Typography color='error' variant='caption'>{username.error}</Typography>}
                                <TextField required fullWidth label="Password" margin='normal' variant='outlined' type='password' value={password.value} onChange={password.changeHandler} />
                                {password.error && <Typography color='error' variant='caption'>{password.error}</Typography>}
                                <Button sx={{ marginTop: "1rem" }} variant='text' color='primary' type='submit' fullWidth>Sign Up</Button>
                                <Typography textAlign={'center'} m={'1rem'}>Or</Typography>
                                <Button variant='text' color='secondary' fullWidth onClick={toggleLogin}>Login Instead</Button>
                            </form>
                        </>
                    )}
                </Paper>
            </Container>
        </div>
    )
}

export default Login