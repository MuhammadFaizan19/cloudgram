const initState = {
    images: [],
}

const imageReducer = (state = initState, action) => {
    switch (action.type) {
        case 'IMAGE_UPLOAD_ERROR':
            return {
                ...state,
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
            }
        case 'IMAGE_SHARE_SUCCESS':
            return {
                ...state,
            }
        case 'IMAGE_SHARE_ERROR':
            return {
                ...state,
            }
        case 'DELETE_IMAGE_SUCCESS':
            return {
                ...state,
                images: action.images
            }
        case 'DELETE_IMAGE_ERROR':
            return {
                ...state,
            }
        default:
            return state
    }
}

export default imageReducer