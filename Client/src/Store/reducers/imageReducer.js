const initState = {

}

const imageReducer = (state = initState, action) => {
    switch (action.type) {
        case 'IMAGE_UPLOAD_ERROR':
            console.log('upload image error');
            return {
                ...state,
                err: 'Error uploading image'
            }
        case 'IMAGE_UPLOAD_SUCCESS':
            console.log('uploading image success');
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
        default:
            return state
    }
}

export default imageReducer