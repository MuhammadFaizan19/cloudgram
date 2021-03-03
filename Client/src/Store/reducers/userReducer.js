const initState = {
    users: []
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_USERS_SUCCESS':
            return {
                ...state,
                users: action.users,
            }
        case 'GET_USERS_ERROR':
            return {
                ...state,
                err: 'Error retrieving users'
            }
        default:
            return state
    }
}

export default userReducer