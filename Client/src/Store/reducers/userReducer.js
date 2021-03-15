import { userActions } from '../actions/actionTypes'

const initState = {
    users: [],
    err: null
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case userActions.GET_USERS_SUCCESS:
            return {
                err: null,
                users: action.users,
            }
        case userActions.GET_USERS_ERROR:
            return {
                ...state,
                err: 'Error retrieving users'
            }
        default:
            return state
    }
}

export default userReducer