const initState = {
	authError: null,
	userData: null
}

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case 'GOOGLE_LOGIN_ERROR':
			return {
				...state,
				authError: action.err.message
			}
		case 'GOOGLE_LOGIN_SUCCESS':
			return {
				...state,
				authError: null,
				userData: action.data
			}
		case 'SIGN_IN_SUCCESS':
			return {
				...state,
				authError: null,
				userData: action.data
			}
		case 'SIGN_IN_ERROR':
			return {
				...state,
				authError: action.err.message
			}
		case 'SIGNOUT_SUCCESS':
			return {
				...state,
				userData: null
			}
		case 'SIGNUP_SUCCESS':
			return {
				...state,
				authError: null,
				userData: action.data
			}
		case 'SIGNUP_ERROR':
			console.log(action.err.message)
			return {
				...state,
				authError: action.err.message
			}
		default:
			return state
	}
}

export default authReducer