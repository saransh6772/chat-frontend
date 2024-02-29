export const fileFormat=(url="")=>{
    const fileExt = url.split('.').pop()
    if(fileExt==='mp3'||fileExt==='wav'){
        return 'audio'
    }
    if(fileExt==='mp4'||fileExt==='mkv'||fileExt==='webm'){
        return 'video'
    }
    if(fileExt==='jpg'||fileExt==='jpeg'||fileExt==='png'||fileExt==='gif'){
        return 'image'
    }
    return 'file'
}

export const transformImage=(url="",width=100)=>{
    return url
}