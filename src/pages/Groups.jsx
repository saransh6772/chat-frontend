import { Add as AddIcon, ArrowBack as ArrowBackIcon, Delete as DeleteIcon, Done as DoneIcon, Edit as EditIcon, Menu as MenuIcon } from '@mui/icons-material'
import { Backdrop, Box, Button, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { Suspense, lazy, memo, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { sampleChats } from '../components/constants/sampleData'
import AvatarCard from '../components/shared/AvatarCard'
import { Link } from '../components/styles/StyledComponents'
const ConfirmDeleteDialog = lazy(() => import('../components/dialogs/ConfirmDeleteDialog'))
const AddMemberDialog = lazy(() => import('../components/dialogs/AddMemberDialog'))

const isAddMember = false

const Groups = () => {
    const chatId = useSearchParams()[0].get('group')
    const navigate = useNavigate()
    const [isEdit, setIsEdit] = useState(false)
    const [groupName, setGroupName] = useState("")
    const [groupNameChange, setGroupNameChange] = useState("")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [confirmDelete, setConfirmDelete] = useState(false)
    const navigateBack = () => {
        navigate('/')
    }
    const handleMobile = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    const handleMobileClose = () => {
        setIsMobileMenuOpen(false)
    }
    const updateGroupName = () => {
        setIsEdit(false)
        setGroupName(groupNameChange)
    }
    const openConfirmDeleteHandler = () => {
        setConfirmDelete(true)
    }
    const closeConfirmDeleteHandler = () => {
        setConfirmDelete(false)
    }
    const openAddMemberHandler = () => {
        console.log('Add Member')
    }
    const deleteHandler = () => {
        console.log('Delete')
        closeConfirmDeleteHandler()
    }
    useEffect(() => {
        setGroupName(`Group Name ${chatId}`)
        setGroupNameChange(`Group Name ${chatId}`)
        return () => {
            setGroupName(``)
            setGroupNameChange(``)
            setIsEdit(false)
        }
    }, [chatId])
    const IconBtn = (
        <>
            <Box sx={{ display: { xs: 'block', sm: 'none' }, position: 'fixed', right: '2rem', top: '2rem' }}>
                <Tooltip>
                    <IconButton onClick={handleMobile}>
                        <MenuIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <Tooltip title='Back'>
                <IconButton sx={{ position: 'absolute', top: '2rem', left: '2rem', bgcolor: 'gray', color: 'whitesmoke', '&:hover': { bgcolor: 'black' } }} onClick={navigateBack}>
                    <ArrowBackIcon />
                </IconButton>
            </Tooltip>
        </>
    )
    const GroupName = (
        <>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={'1rem'} padding={'2rem'}>
                {
                    isEdit ? (<>
                        <TextField value={groupNameChange} onChange={e => setGroupNameChange(e.target.value)} />
                        <IconButton onClick={updateGroupName}><DoneIcon /></IconButton>
                    </>) : (<>
                        <Typography variant='h5'>{groupName}</Typography>
                        <IconButton onClick={() => setIsEdit(true)}><EditIcon /></IconButton>
                    </>)
                }
            </Stack>
        </>
    )
    const ButtonGroup = (
        <>
            <Stack direction={{ sm: 'row', xs: 'column' }} spacing={'1rem'} p={{ sm: '1rem', xs: '0', md: '1rem 4rem' }}>
                <Button size='large' startIcon={<AddIcon />} onClick={openAddMemberHandler}>Add Member</Button>
                <Button size='large' color='error' startIcon={<DeleteIcon />} onClick={openConfirmDeleteHandler}>Delete Group</Button>
            </Stack>
        </>
    )
    return (
        <Grid container height={'100vh'}>
            <Grid item bgcolor={'rgba(150,150,210,0.8)'} sm={4} sx={{ display: { xs: 'none', sm: 'block' } }}>
                <GroupList myGroups={sampleChats} chatId={chatId} />
            </Grid>
            <Grid item xs={12} sm={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', padding: '1rem 3rem' }}>
                {IconBtn}
                {groupName && <>
                    {GroupName}
                    <Typography margin={'2rem'} alignSelf={'flex-start'} variant='body1'>Members</Typography>
                    <Stack maxWidth={'45rem'} width={'100%'} boxSizing={'border-box'} p={{ sm: '1rem', xs: '0', md: '1rem 4rem' }} spacing={'2rem'} bgcolor={'rgba(213,189,213,0.5)'} overflow={'auto'} height={'50vh'}>

                    </Stack>
                    {ButtonGroup}
                </>}
            </Grid>
            {
                isAddMember && (<>
                    <Suspense fallback={<Backdrop open />}><AddMemberDialog /></Suspense>
                </>)
            }
            {
                confirmDelete && (<>
                    <Suspense fallback={<Backdrop open />}><ConfirmDeleteDialog open={confirmDelete} handleClose={closeConfirmDeleteHandler} deleteHandler={deleteHandler} /></Suspense>
                </>)
            }
            <Drawer sx={{ display: { xs: 'block', sm: 'none' } }} open={isMobileMenuOpen} onClose={handleMobileClose}>
                <GroupList w='50vw' myGroups={sampleChats} chatId={chatId} />
            </Drawer>
        </Grid>
    )
}

const GroupList = ({ w = '100%', myGroups = [], chatId }) => (
    <Stack width={w}>
        {
            myGroups.length > 0 ? (
                myGroups.map((i) => <GroupListItem key={i._id} group={i} chatId={chatId} />)
            ) : (
                <Typography textAlign={'center'} padding={'1rem'} color='gray'>No Groups Yet</Typography>
            )
        }
    </Stack>
)

const GroupListItem = memo(({ group, chatId }) => {
    const { name, avatar, _id } = group
    return (
        <Link to={`?group=${_id}`} onClick={(e) => { if (chatId === _id) e.preventDefault() }}>
            <Stack direction={'row'} spacing={'1rem'} alignItems={'center'}>
                <AvatarCard avatar={avatar} />
                <Typography>{name}</Typography>
            </Stack>
        </Link>
    )
})

export default Groups