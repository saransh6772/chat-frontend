import React, { memo } from 'react'
import { Box, Dialog, Stack, IconButton, TextField, DialogTitle, Typography, ListItem, Avatar, Button } from '@mui/material'
import moment from 'moment'
import { fileFormat } from '../../lib/features'
import AttachmentCard from './AttachmentCard'

const MessageComponent = ({ message, user }) => {
    const { sender, content, attachments = [], createdAt } = message
    console.log(attachments)
    const timeAgo = moment(createdAt).fromNow()
    const sameSender = sender?._id === user?._id
    return (
        <div style={{ alignSelf: sameSender ? 'flex-end' : 'flex-start', backgroundColor: 'whitesmoke', color: 'black', borderRadius: '1rem', padding: '0.5rem', width: 'fit-content' }}>
            {
                !sameSender && <Typography color={'gray'} fontWeight={'600'} variant='inherit'>{sender.name}</Typography>
            }
            {
                content && <Typography>{content}</Typography>
            }
            {
                attachments.length > 0 && attachments.map((i, index) => {
                    const url = i.url
                    const fileExt = fileFormat(url)
                    return (
                        <Box key={index}>
                            <a href={url} target='_blank' download style={{ color: 'black' }}>
                                {AttachmentCard(fileExt, url)}
                            </a>
                        </Box>
                    )
                })
            }
            <Typography variant='caption' color={'gray'}>{timeAgo}</Typography>
        </div>
    )
}

export default memo(MessageComponent)