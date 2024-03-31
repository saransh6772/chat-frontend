import moment from 'moment'

export const fileFormat = (url = "") => {
    const fileExt = url.split('.').pop()
    if (fileExt === 'mp3' || fileExt === 'wav') {
        return 'audio'
    }
    if (fileExt === 'mp4' || fileExt === 'mkv' || fileExt === 'webm') {
        return 'video'
    }
    if (fileExt === 'jpg' || fileExt === 'jpeg' || fileExt === 'png' || fileExt === 'gif') {
        return 'image'
    }
    return 'file'
}

export const transformImage = (url = "", width = 100) => {
    const newUrl = url.replace("upload/", `upload/dpr_auto/w_${width}/`);
    return newUrl;
}

export const getLast7Days = () => {
    const currentDate = moment()
    const Last7Days = []
    for (let i = 0; i < 7; i++) {
        Last7Days.unshift(currentDate.clone().subtract(i, 'days').format('dddd'))
    }
    return Last7Days.reverse()
}

export const getOrSaveFromStorage = ({ key, value, get }) => {
    if (get) return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
    else localStorage.setItem(key, JSON.stringify(value));
};