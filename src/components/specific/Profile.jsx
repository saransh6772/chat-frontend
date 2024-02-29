import React from 'react'
import { Stack, Avatar, Typography } from '@mui/material'
import { Face6TwoTone as FaceIcon, AlternateEmailRounded as UserNameIcon, CalendarMonth as CalendarIcon } from '@mui/icons-material'
import moment from 'moment'

const Profile = () => {
    return (
        <Stack spacing={'2rem'} direction={'column'} alignItems={'center'}>
            <Avatar sx={{ width: 200, height: 200, objectFit: 'contain', marginBottom: '1rem', border: '5px solid white' }} />
            <ProfileCard heading={'Bio'} text={'kglvjn'} />
            <ProfileCard heading={'Username'} text={'kglvjn'} icon={<UserNameIcon sx={{ color: 'black' }} fontSize='large' />} />
            <ProfileCard heading={'Name'} text={'kglvjn'} icon={<FaceIcon sx={{ color: 'black' }} fontSize='large' />} />
            <ProfileCard heading={'Joined'} text={moment().fromNow()} icon={<CalendarIcon sx={{ color: 'black' }} fontSize='large' />} />
        </Stack>
    )
}

const ProfileCard = ({ text, icon, heading }) => (
    <Stack spacing={'1rem'} direction={'row'} alignItems={'center'} color={'white'} textAlign={'center'}>
        {icon && icon}
        <Stack>
            <Typography color={'gray'} variant='body1'>{text}</Typography>
            <Typography color={'gray'} variant='caption'>{heading}</Typography>
        </Stack>
    </Stack>
)

export default Profile