import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table'
import { Avatar } from '@mui/material'
import { dashboardData } from '../../components/constants/sampleData'
import { transformImage } from '../../lib/features'

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
        renderCell: (params) => (<Avatar alt={params.row.name} src={params.row.avatar} />)
    }, {
        field: 'name',
        headerName: 'Name',
        headerClassname: 'table-header',
        width: 200
    }, {
        field: 'username',
        headerName: 'Username',
        headerClassname: 'table-header',
        width: 200
    }, {
        field: 'friends',
        headerName: 'Friends',
        headerClassname: 'table-header',
        width: 150
    }, {
        field: 'groups',
        headerName: 'Groups',
        headerClassname: 'table-header',
        width: 200
    }
]

const UserManagement = () => {
    const [rows, setRows] = useState([])
    useEffect(() => {
        setRows(dashboardData.users.map((user) => ({ ...user, id: user._id, avatar: transformImage(user.avatar, 50) })))
    }, [])
    return (
        <AdminLayout>
            <Table heading={'All Users'} columns={columns} rows={rows} />
        </AdminLayout>
    )
}

export default UserManagement