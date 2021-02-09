const initState = {
    authError: null
}

const imageReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPLOAD_IMAGE_ERROR':
            console.log('upload image error');
            return {
                ...state,
                authError: 'uploading image failed'
            }
        case 'UPLOAD_IMAGE_SUCCESS':
            console.log('uploading image success');
            return {
                ...state,
                images:action.images,
                authError: null
            }
        case 'GET_IMAGE_SUCCESS':
            console.log('images[]')
            return {
                ...state,
                images:[],
                authError: null
            }
        case 'GET_IMAGE_ERROR':
            return {
                ...state,
                authError: 'Images retrieval Failed'
            }
        default:
            return state
    }
}

export default imageReducer