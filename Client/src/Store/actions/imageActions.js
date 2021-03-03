import axios from 'axios'

export const imageUpload = (image) => {
    return (dispatch, getState) => {
        const userEmail = getState().firebase.auth.email;
        let formData = new FormData();
        formData.append('imagePath', image)
        formData.append('userEmail', userEmail)
        axios.post('http://localhost:3002/api/images', formData)
            .then((res) => {
                let images = getState().image.images;
                images = [res.data].concat(images);
                dispatch({ type: 'IMAGE_UPLOAD_SUCCESS', images })
            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: 'IMAGE_UPLOAD_ERROR' })
            })

    }
}

export const getImages = (shared) => {
    return (dispatch, getState) => {
        const userEmail = getState().firebase.auth.email;
        axios.get('http://localhost:3002/api/images')
            .then((res) => {
                let imagesList = res.data
                if (!shared) {
                    imagesList = imagesList.filter((imageData => {
                        return (imageData.userEmail === userEmail)
                    }))
                }
                else {
                    imagesList = imagesList.filter(imageData => {
                        const sharedToUser = imageData.sharedTo.filter(user => {
                            return user === userEmail
                        })
                        if (sharedToUser[0]) return true
                        return false
                    })
                }
                dispatch({ type: 'GET_IMAGES_SUCCESS', images: imagesList })
            })
            .catch((err) => {
                dispatch({ type: 'GET_IMAGES_ERROR' })
            })
    }
}

export const updateImage = (imageUpdate) => {
    return (dispatch, getState) => {
        axios.put('http://localhost:3002/api/images/' + imageUpdate._id, imageUpdate)
            .then(res => {
                console.log(res.data)
                dispatch({ type: 'UPDATE_IMAGE_SUCCESS', updatedImage: res.data })
            })
            .catch(err => {
                dispatch({ type: 'UPDARE_IMAGE_ERROR', err })
            })
    }
}