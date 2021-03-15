import { imageActions } from '../actions/actionTypes'
const initState = {
    images: [],
    err: null
}

const imageReducer = (state = initState, action) => {
    switch (action.type) {
        case imageActions.IMAGE_UPLOAD_ERROR:
            return {
                ...state,
                err: action.err.message
            }
        case imageActions.IMAGE_UPLOAD_SUCCESS:
            return {
                images: action.images,
                err: null
            }
        case imageActions.GET_IMAGES_SUCCESS:
            return {
                images: action.images,
                err: null
            }
        case imageActions.GET_IMAGES_ERROR:
            return {
                ...state,
                err: action.err.message
            }
        case imageActions.IMAGE_SHARE_SUCCESS:
            return {
                ...state,
                err: null
            }
        case imageActions.IMAGE_SHARE_ERROR:
            return {
                ...state,
                err: 'Unable to Share Image'
            }
        case imageActions.DELETE_IMAGE_SUCCESS:
            return {
                images: action.images,
                err: null
            }
        case imageActions.DELETE_IMAGE_ERROR:
            return {
                ...state,
                err: action.err.message
            }
        default:
            return state
    }
}

export default imageReducer