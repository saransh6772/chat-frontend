import { FileOpen as FileOpenIcon } from '@mui/icons-material'
import React from 'react'
import { transformImage } from '../../lib/features'

const AttachmentCard = (file, url) => {
    switch (file) {
        case 'audio':
            return <audio src={url} preload controls/>
        case 'video':
            return <video src={url} preload='none' width={'200px'} controls />
        case 'image':
            return <img src={transformImage(url,200)} alt="Attachment" width={'200px'} height={'200px'} style={{ objectFit: 'contain' }} />
        default:
            return <FileOpenIcon/>
    }
}

export default AttachmentCard