import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table'
import { Avatar, Stack } from '@mui/material'
import { dashboardData } from '../../components/constants/sampleData'
import { transformImage } from '../../lib/features'
import AvatarCard from '../../components/shared/AvatarCard'

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        headerClassname: 'table-header',
        width: 200
    }, {
        field: 'avatar',
        headerName: 'Avatar',
        headerClassname: 'table-header',
        width: 150,
        renderCell: (params) => (<AvatarCard avatar={params.row.avatar} />)
    }, {
        field: 'name',
        headerName: 'Name',
        headerClassname: 'table-header',
        width: 300
    }, {
        field: 'totalMembers',
        headerName: 'Total Members',
        headerClassname: 'table-header',
        width: 120
    }, {
        field: 'members',
        headerName: 'Members',
        headerClassname: 'table-header',
        width: 400,
        renderCell: (params) => (<AvatarCard max={100} avatar={params.row.members} />)
    }, {
        field: 'totalMessages',
        headerName: 'Total Messages',
        headerClassname: 'table-header',
        width: 120
    }, {
        field: 'creator',
        headerName: 'Created By',
        headerClassname: 'table-header',
        width: 250,
        renderCell: (params) => (
            <Stack direction={'row'} alignItems={'center'} spacing={'1rem'}>
                <Avatar src={params.row.creator.avatar} alt={params.row.creator.name} />
                <span>{params.row.creator.name}</span>
            </Stack>
        )
    }
]

const ChatManagement = () => {
    const [rows, setRows] = useState([])
    useEffect(() => {
        setRows(dashboardData.chats.map((chat) => ({
            ...chat,
            id: chat._id,
            avatar: chat.avatar.map(i => transformImage(i, 50)),
            members: chat.members.map(i => transformImage(i.avatar, 50)),
            creator: {
                name: chat.creator.name,
                avatar: transformImage(chat.creator.avatar, 50)
            }
        })))
    }, [])
    return (
        <AdminLayout>
            <Table heading={'All Chats'} columns={columns} rows={rows} />
        </AdminLayout>
    )
}

export default ChatManagement