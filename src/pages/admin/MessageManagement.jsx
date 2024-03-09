import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table'
import { fileFormat, transformImage } from '../../lib/features'
import moment from 'moment'
import { dashboardData } from '../../components/constants/sampleData'
import { Avatar, Stack, Box } from '@mui/material'
import AttachmentCard from '../../components/shared/AttachmentCard'

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        headerClassname: 'table-header',
        width: 200
    }, {
        field: 'attachments',
        headerName: 'Attachments',
        headerClassname: 'table-header',
        width: 200,
        renderCell: (params) => {
            const { attachments } = params.row
            return attachments?.length > 0 ? (
                attachments.map(i => {
                    const url = i.url
                    const file = fileFormat(url)
                    return (<Box>
                        <a href={url} download target='_blank' style={{ color: 'black' }}>{AttachmentCard(file, url)}</a>
                    </Box>)
                })
            ) : (<span>No Attachments</span>)
        }
    }, {
        field: 'content',
        headerName: 'Content',
        headerClassname: 'table-header',
        width: 400
    }, {
        field: 'sender',
        headerName: 'Sent By',
        headerClassname: 'table-header',
        width: 200,
        renderCell: (params) => (
            <Stack direction={'row'} spacing={'1rem'} alignItems={'center'}>
                <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
                <span>{params.row.sender.name}</span>
            </Stack>
        )
    }, {
        field: 'chat',
        headerName: 'Chat',
        headerClassname: 'table-header',
        width: 220
    }, {
        field: 'groupChat',
        headerName: 'Group Chat',
        headerClassname: 'table-header',
        width: 100
    }, {
        field: 'createdAt',
        headerName: 'Date and Time',
        headerClassname: 'table-header',
        width: 250
    }
]

const MessageManagement = () => {
    const [rows, setRows] = useState([])
    useEffect(() => {
        setRows(dashboardData.messages.map((message) => ({
            ...message,
            id: message._id,
            sender: {
                name: message.sender.name,
                avatar: transformImage(message.sender.avatar, 50)
            },
            createdAt: moment(message.createdAt).format('MMMM Do YYYY, h:mm:ss a')
        })))
    }, [])
    return (
        <AdminLayout>
            <Table heading={'All Messages'} rows={rows} columns={columns} rowHeight={200}></Table>
        </AdminLayout>
    )
}

export default MessageManagement