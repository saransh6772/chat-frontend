import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'

const ConfirmDeleteDialog = ({ open, handleClose, deleteHandler }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Are you sure, you want to delete this group?</DialogTitle>
            <DialogContent>
                <DialogContentText>Sure again?</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={deleteHandler} color='error'>Delete</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDeleteDialog