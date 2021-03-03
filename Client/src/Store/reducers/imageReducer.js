const initState = {
    images: [],
    err: null
}

const imageReducer = (state = initState, action) => {
    switch (action.type) {
        case 'IMAGE_UPLOAD_ERROR':
            return {
                ...state,
                err: 'Error uploading image'
            }
        case 'IMAGE_UPLOAD_SUCCESS':
            return {
                ...state,
                images: action.images
            }
        case 'GET_IMAGES_SUCCESS':
            return {
                ...state,
                images: action.images,
            }
        case 'GET_IMAGES_ERROR':
            return {
                ...state,
                err: 'Error retrieving images'
            }
        case 'UPDATE_IMAGE_SUCCESS':
            return state
        case 'UPDATE_IMAGE_ERROR':
            return {
                ...state,
                err: 'Sharing failed'
            }

        default:
            return state
    }
}

export default imageReducer