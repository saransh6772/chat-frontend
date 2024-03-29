import { Grid } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { sampleChats } from '../constants/sampleData'
import Title from '../shared/Title'
import ChatList from '../specific/ChatList'
import Profile from '../specific/Profile'
import Header from './Header'

const AppLayout = () => WrappedComponent => {
    return (props) => {
        const params = useParams()
        const chatId = params.chatId
        console.log('chatId', chatId)
        const handleDeleteChat = (e, _id, groupChat) => {
            e.preventDefault()
            console.log('Delete Chat', _id, groupChat)
        }
        return (
            <>
                <Title title='Chat' description='This is.' />
                <Header />
                <Grid container height={"calc(100vh - 4rem)"}>
                    <Grid item sm={4} md={3} sx={{ display: { xs: "none", sm: "block" } }} height={"100%"}><ChatList chats={sampleChats} chatId={chatId} handleDeleteChat={handleDeleteChat} /></Grid>
                    <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
                        <WrappedComponent {...props} />
                    </Grid>
                    <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "block" }, padding: "2rem", bgcolor: 'rgba(210,180,210,0.5)' }} height={"100%"}><Profile /></Grid>
                </Grid>
                {/* <Footer /> */}
            </>
        )
    }
}

export default AppLayout