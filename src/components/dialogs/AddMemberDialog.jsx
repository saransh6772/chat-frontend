import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { sampleUsers } from '../constants/sampleData'
import UserItem from '../shared/UserItem'

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {
    const [members, setMembers] = useState(sampleUsers)
    const [selectedMembers, setSelectedMembers] = useState([])
    const selectMemberHandler = (id) => {
        setSelectedMembers((prev) => {
            if (prev.includes(id)) {
                return prev.filter(i => i !== id)
            } else {
                return [...prev, id]
            }
        })
    }
    const addMemberSubmit = () => {
        closeHandler()
    }
    const closeHandler = () => {
        setSelectedMembers([])
        setMembers([])
    }
    return (
        <Dialog open={closeHandler}>
            <Stack p={'2rem'} width={'20rem'} spacing={'2rem'}>
                <DialogTitle textAlign={'center'}>Add member to group</DialogTitle>
                <Stack spacing={'1rem'}>
                    {
                        members.length > 0 ? (
                            members.map((user) => (
                                <UserItem user={user} key={user._id} handler={selectMemberHandler} isAdded={selectedMembers.includes(user._id)}/>
                            ))) : (
                            <Typography textAlign={'center'}>No Friends</Typography>
                        )
                    }
                </Stack>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'}>
                    <Button color='error' onClick={closeHandler}>Cancel</Button>
                    <Button onClick={addMemberSubmit} disabled={isLoadingAddMember}>Save Changes</Button>
                </Stack>
            </Stack>
        </Dialog>
    )
}

export default AddMemberDialog