import { Grid, Skeleton, Stack } from '@mui/material'
import React from 'react'

const Loaders = () => {
    return (
        <Grid container height={"calc(100vh - 4rem)"} spacing={'1rem'}>
            <Grid item sm={4} md={3} sx={{ display: { xs: "none", sm: "block" } }} height={"100%"}><Skeleton variant='rectangular' height={'100vh'} /></Grid>
            <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
                <Stack spacing={"1rem"}>
                    {
                        Array(10).fill(0).map((_, i) => (
                            <Skeleton key={i} variant='text' height={"5rem"} />
                        ))
                    }
                </Stack>
            </Grid>
            <Grid item sm={4} md={3} sx={{ display: { xs: "none", sm: "block" } }} height={"100%"}><Skeleton variant='rectangular' height={'100vh'} /></Grid>
        </Grid>
    )
}

export default Loaders