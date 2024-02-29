import React, { useState } from 'react'
import { Dialog, Stack, DialogTitle, TextField, Typography, ListItem, Avatar, Button } from '@mui/material'
import { sampleUsers } from '../constants/sampleData'
import UserItem from '../shared/UserItem'
import { useInputValidation } from '6pp'

const NewGroups = () => {
    const groupName = useInputValidation('')
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
    const submithandler = () => {
        console.log('Submit')
    }
    const closeHandler = () => {
        console.log('Close')
    }
    return (
        <Dialog open onClick={closeHandler}>
            <Stack p={{ xs: '1rem', sm: '3rem' }} width={'25rem'} spacing={'2rem'}>
                <DialogTitle textAlign='center' variant='h5'>New Group</DialogTitle>
                <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler} />
                <Typography variant='body1'>Members</Typography>
                <Stack>
                    {
                        members.map((i) => (
                            <UserItem user={i} key={i._id} handler={selectMemberHandler} isAdded={selectedMembers.includes(i._id)}/>
                        ))
                    }
                </Stack>
                <Stack direction={'row'} justifyContent={'space-evenly'}>
                    <Button variant='text' color='error' size='large'>Cancel</Button>
                    <Button variant='text' size='large' onClick={submithandler}>Create</Button>
                </Stack>
            </Stack>
        </Dialog>
    )
}

export default NewGroups