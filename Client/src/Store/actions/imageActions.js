import axios from 'axios'
import { imageActions } from './actionTypes'

export const imageUpload = (image, setProgress) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        const userEmail = getState().firebase.auth.email;
        const storageRef = firebase.storage().ref(image.name + Math.random() + +image.lastModified);

        storageRef.put(image).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress?.(percentage);
        }, (err) => {
            dispatch({ type: imageActions.IMAGE_UPLOAD_ERROR, err })
        }, async () => {
            const imageUrl = await storageRef.getDownloadURL();
            axios.post('https://cloudgram.herokuapp.com/api/images', { imageUrl, userEmail, shared: false })
                .then((res) => {
                    let images = getState().image.images;
                    images = [res.data].concat(images);
                    dispatch({ type: imageActions.IMAGE_UPLOAD_SUCCESS, images })
                })
                .catch((err) => {
                    dispatch({ type: imageActions.IMAGE_UPLOAD_ERROR, err })
                })
        })
    }
}


export const shareImage = (shareData) => {
    return (dispatch, getState) => {
        axios.post('https://cloudgram.herokuapp.com/api/images', shareData)
            .then((res) => {
                dispatch({ type: imageActions.IMAGE_SHARE_SUCCESS })
            })
            .catch((err) => {
                dispatch({ type: imageActions.IMAGE_SHARE_ERROR })
            })
    }
}


export const getImages = (shared) => {
    return (dispatch, getState) => {
        const userEmail = getState().firebase.auth.email;
        axios.get('https://cloudgram.herokuapp.com/api/images')
            .then((res) => {
                let imagesList = res.data
                if (!shared) {
                    imagesList = imagesList.filter(imageData => {
                        return (imageData.userEmail === userEmail && imageData.shared === false)
                    })
                }
                else {
                    imagesList = imagesList.filter(imageData => {
                        return (imageData.userEmail === userEmail && imageData.shared === true)
                    })
                }

                dispatch({ type: imageActions.GET_IMAGES_SUCCESS, images: imagesList })
            })
            .catch((err) => {
                dispatch({ type: imageActions.GET_IMAGES_ERROR, err })
            })
    }
}


export const deleteImage = (imageId) => {
    return (dispatch, getState) => {
        axios.delete('https://cloudgram.herokuapp.com/api/images/' + imageId)
            .then(() => {
                let newImagesList = getState().image.images
                newImagesList = newImagesList.filter((image) => image._id !== imageId)
                dispatch({ type: imageActions.DELETE_IMAGE_SUCCESS, images: newImagesList })
            })
            .catch((err) => {
                dispatch({ type: imageActions.DELETE_IMAGE_ERROR, err })
            })
    }
}



