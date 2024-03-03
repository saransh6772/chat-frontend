import { Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Menu as MenuIcon, Notifications as NotificationsIcon, Search as SearchIcon } from '@mui/icons-material'
import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, lazy, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = lazy(() => import('../specific/Search'))
const Notifications = lazy(() => import('../specific/Notifications'))
const NewGroups = lazy(() => import('../specific/NewGroups'))

const Header = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const [isNewGroup, setIsNewGroup] = useState(false)
    const [isManageGroups, setIsManageGroups] = useState(false)
    const [isNotifications, setIsNotifications] = useState(false)

    const navigate = useNavigate()
    const handleMobile = () => {
        setIsMobile(!isMobile)
    }
    const openSearch = () => {
        setIsSearch(!isSearch)
    }
    const openNewGroup = () => {
        setIsNewGroup(!isNewGroup)
    }
    const manageGroups = () => navigate('/groups')
    const logoutHandler = () => {
        console.log('Logout')
    }
    const notificationHandler = () => {
        setIsNotifications(!isNotifications)
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }} height={"4rem"}>
                <AppBar position="static" sx={{ bgcolor: 'rgba(120,110,220,0.8)' }}>
                    <Toolbar>
                        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                            Chat App
                        </Typography>
                        <Box sx={{ display: { xs: "block", sm: "none" } }}>
                            <IconButton color='inherit' onClick={handleMobile}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Box>
                            <IconBtn title={'Search'} icon={<SearchIcon />} onClick={openSearch} />
                            <IconBtn title={'New Group'} icon={<AddIcon />} onClick={openNewGroup} />
                            <IconBtn title={'Manage Groups'} icon={<GroupIcon />} onClick={manageGroups} />
                            <IconBtn title={'Notifications'} icon={<NotificationsIcon />} onClick={notificationHandler} />
                            <IconBtn title={'Logout'} icon={<LogoutIcon />} onClick={logoutHandler} />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {
                isSearch && (
                    <Suspense fallback={<Backdrop open />}>
                        <Search />
                    </Suspense>
                )
            }
            {
                isNotifications && (
                    <Suspense fallback={<Backdrop open />}>
                        <Notifications />
                    </Suspense>
                )
            }
            {
                isNewGroup && (
                    <Suspense fallback={<Backdrop open />}>
                        <NewGroups />
                    </Suspense>
                )
            }
        </>
    )
}

const IconBtn = ({ title, icon, onClick }) => (
    <Tooltip title={title}>
        <IconButton color='inherit' size='large' onClick={onClick}>
            {icon}
        </IconButton>
    </Tooltip>
)

export default Header