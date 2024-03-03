import { Box, Typography } from '@mui/material'
import React from 'react'
import AppLayout from '../components/layout/AppLayout'

const Home = () => {
    return (
        <Box color='gray' bgcolor={'rgba(220,200,220,0.6)'} height={'100%'}>
            <Typography p='2rem' variant='h5' textAlign={'center'}>Select a friend to chat</Typography>
        </Box>
    )
}

export default AppLayout()(Home)