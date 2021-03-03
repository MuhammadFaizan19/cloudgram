import axios from 'axios'

export const imageUpload = (image) => {
    return (dispatch, getState) => {
        const userEmail = getState().firebase.auth.email;
        let formData = new FormData();
        formData.append('imagePath', image)
        formData.append('userEmail', userEmail)
        formData.append('shared', false)
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
                imagesList = imagesList.filter((imageData => {
                    return (imageData.userEmail === userEmail &&
                        imageData.shared === shared)
                }))
                dispatch({ type: 'GET_IMAGES_SUCCESS', images: imagesList })
            })
            .catch((err) => {
                dispatch({ type: 'GET_IMAGES_ERROR' })
            })
    }
}
