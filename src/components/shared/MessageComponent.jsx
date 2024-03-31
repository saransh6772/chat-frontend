import { Box, Typography } from '@mui/material'
import moment from 'moment'
import React, { memo } from 'react'
import { fileFormat } from '../../lib/features'
import AttachmentCard from './AttachmentCard'
import { motion } from 'framer-motion'

const MessageComponent = ({ message, user }) => {
    const { sender, content, attachments = [], createdAt } = message
    const timeAgo = moment(createdAt).fromNow()
    const sameSender = sender?._id === user?._id
    return (
        <motion.div initial={{ opacity: 0, x: "-100%" }} whileInView={{ opacity: 1, x: 0 }} style={{ alignSelf: sameSender ? 'flex-end' : 'flex-start', backgroundColor: 'whitesmoke', color: 'black', borderRadius: '1rem', padding: '0.5rem', width: 'fit-content' }}>
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
        </motion.div>
    )
}

export default memo(MessageComponent)