import React, { memo } from 'react'
import { ListItem, Stack, Avatar, Typography, IconButton } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material';

const UserItem = ({ user, handler, handlerIsLoading }) => {
    const { name, avatar, _id } = user
    return (
        <ListItem>
            <Stack direction={'row'} alignItems={'center'} spacing={'1rem'} width={'100%'}>
                <Avatar />
                <Typography variant='body1' sx={{ flexGrow: 1, display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: 'hidden', textOverflow: 'ellipsis', width:'100%' }}>{name}</Typography>
                <IconButton onClick={() => handler(_id)} disabled={handlerIsLoading} size='small' sx={{ bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }}>
                    <AddIcon />
                </IconButton>
            </Stack>
        </ListItem>
    )
}

export default memo(UserItem)