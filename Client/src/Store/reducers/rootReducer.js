import authReducer          from './authReducer'
import { combineReducers }  from 'redux'
import { firebaseReducer }  from 'react-redux-firebase'
import imageReducer from './imageReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
	auth      : authReducer,
	image	  : imageReducer,
	user	  : userReducer,
	firebase  : firebaseReducer
});

export default rootReducer;