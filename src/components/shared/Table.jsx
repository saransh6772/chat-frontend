import React from 'react'
import { Container, Paper, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const Table = ({ rows, columns, heading, rowHeight = 52 }) => {
    return (
        <Container sx={{ height: '100vh' }}>
            <Paper elevation={3} sx={{ p: '1rem 4rem', borderRadius: '1rem', m: 'auto', width: '100%', overflow: 'hidden', height: '100%', boxShadow: 'none' }}>
                <Typography textAlign={'center'} variant='h5' sx={{ margin: '2rem' }}>{heading}</Typography>
                <DataGrid rows={rows} columns={columns} rowHeight={rowHeight} style={{ height: '80%' }} sx={{ border: 'none' }} />
            </Paper>
        </Container>
    )
}

export default Table