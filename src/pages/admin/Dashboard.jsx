import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Container, Paper, Stack, Typography, Box } from '@mui/material'
import { AdminPanelSettings as AdminPanelSettingsIcon, Notifications as NotificationIcon, Groups as GroupIcon, Person as PersonIcon, Message as MessageIcon } from '@mui/icons-material'
import moment from 'moment'
import { SearchField, CurvedButton } from '../../components/styles/StyledComponents'
import { LineChart, DoughnutChart } from '../../components/specific/Chart'

const Dashboard = () => {
    const AppBar = (
        <Paper elevation={3} sx={{ p: '2rem', m: '2rem 0', borderRadius: '1rem' }}>
            <Stack direction={'row'} spacing={'1rem'} alignItems={'center'}>
                <AdminPanelSettingsIcon sx={{ fontSize: '1.5rem' }} />
                <SearchField placeholder='Search...' />
                <CurvedButton>Search</CurvedButton>
                <Box flexGrow={1} />
                <Typography display={{ xs: 'none', lg: 'block' }} color='rgba(0,0,0,0.5)' textAlign={{xs:'center',lg:'stretch'}}>
                    {moment().format('MMMM DD YYYY')}
                </Typography>
                <NotificationIcon />
            </Stack>
        </Paper>
    )
    const Widgets = (
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={'2rem'} justifyContent={'space-between'} alignItems={'center'} margin={'2rem 0'}>
            <Widget title={'Users'} value={34} icon={<PersonIcon />} />
            <Widget title={'Chats'} value={3} icon={<GroupIcon />} />
            <Widget title={'Messages'} value={45} icon={<MessageIcon />} />
        </Stack>
    )
    return (
        <AdminLayout>
            <Container component={'main'}>
                {AppBar}
                <Stack direction={{ xs: 'column', lg: 'row' }} sx={{gap:'2rem'}} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
                    <Paper elevation={3} sx={{ p: '1.5rem 2rem', borderRadius: '1rem', width: '100%', maxWidth: '36rem' }}>
                        <Typography margin={'2rem 0'} variant='h4'>Last Messages</Typography>
                        <LineChart value={[1, 2, 3, 4, 5, 6, 7]} />
                    </Paper>
                    <Paper elevation={3} sx={{ p: '1rem', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '100%', sm: '50%' }, position: 'relative', width: '100%', maxWidth: '24rem' }}>
                        <DoughnutChart labels={['Single Chats', 'Group Chats']} value={[23, 66]} />
                        <Stack position={'absolute'} direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={'0.5rem'} width={'100%'} height={'100%'}>
                            <GroupIcon />
                            <Typography variant='h6'>V/S</Typography>
                            <PersonIcon />
                        </Stack>
                    </Paper>
                </Stack>
                {Widgets}
            </Container>
        </AdminLayout>
    )
}

const Widget = ({ title, value, icon }) => (
    <Paper elevation={3} sx={{ p: '2rem', m: '2rem 0', borderRadius: '1rem', width: '20rem' }}>
        <Stack alignItems={'center'} spacing={'1rem'}>
            <Typography sx={{ color: 'dark', borderRadius: '50%', border: '5px solid rgba(0,0,0,0.9)', width: '5rem', height: '5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{value}</Typography>
            <Stack direction={'row'} spacing={'1rem'} alignItems={'center'}>
                {icon}
                <Typography>{title}</Typography>
            </Stack>
        </Stack>
    </Paper>
)

export default Dashboard