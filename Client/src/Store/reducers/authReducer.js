import { authActions } from '../actions/actionTypes'

const initState = {
	userData: null,
	err: null
}

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case authActions.GOOOGLE_LOGIN_ERROR:
			return {
				...state,
				err: action.err.message
			}
		case authActions.GOOOGLE_LOGIN_SUCCESS:
			return {
				err: null,
				userData: action.data
			}
		case authActions.SIGN_IN_SUCCESS:
			return {
				err: null,
				userData: action.data
			}
		case authActions.SIGN_IN_ERROR:
			return {
				...state,
				err: action.err.message
			}
		case authActions.SIGN_OUT_SUCCESS:
			return {
				err: null,
				userData: null
			}
		case authActions.SIGN_UP_SUCCESS:
			return {
				err: null,
				userData: action.data
			}
		case authActions.SIGN_UP_ERROR:
			return {
				...state,
				err: action.err.message
			}
		case authActions.GET_PROFILE_SUCCESS:
			return {
				err: null,
				userData: action.data
			}
		case authActions.GET_PROFILE_ERROR:
			return {
				...state,
				err: action.err.message
			}
		default:
			return state
	}
}

export default authReducer