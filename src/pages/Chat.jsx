import { AttachFileRounded as FileIcon, Send as SendIcon } from '@mui/icons-material'
import { IconButton, Stack } from '@mui/material'
import React, { useRef } from 'react'
import { sampleMessages } from '../components/constants/sampleData'
import FileMenu from '../components/dialogs/FileMenu'
import AppLayout from '../components/layout/AppLayout'
import MessageComponent from '../components/shared/MessageComponent'
import { InputBox } from '../components/styles/StyledComponents'

const user = {
    _id: '2',
    name: 'Johnny',
}

const Chat = () => {
    const containerRef = useRef(null)
    return (
        <>
            <Stack ref={containerRef} boxSizing={'border-box'} padding={'1rem'} spacing={'1rem'} bgcolor={'rgba(220,190,220,0.8)'} height={'90%'} sx={{ overflowX: 'hidden', overflowY: 'auto' }}>
                {
                    sampleMessages.map((i) => (
                        <MessageComponent message={i} user={user} key={i._id}/>
                    ))
                }
            </Stack>
            <form style={{ height: '10%' }}>
                <Stack direction={'row'} height={'100%'} padding={'1rem'} alignItems={'center'} position={'relative'}>
                    <InputBox placeholder='Type Your Message Here' />
                    <Stack direction={'row'}>
                        <IconButton sx={{ rotate: '45deg', bgcolor: 'rgba(210,180,210,0.3)', color: 'gray', margin: '0.15rem', '&:hover': { bgcolor: 'rgba(220,190,220,0.8)' } }}><FileIcon /></IconButton>
                        <IconButton type='submit' sx={{ rotate: '-45deg', bgcolor: 'rgba(210,180,210,0.3)', color: 'gray', margin: '0.15rem', '&:hover': { bgcolor: 'rgba(220,190,220,0.8)' } }}><SendIcon /></IconButton>
                    </Stack>
                </Stack>
            </form>
            <FileMenu />
        </>
    )
}

export default AppLayout()(Chat)