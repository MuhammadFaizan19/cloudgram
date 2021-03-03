import authReducer          from './authReducer'
import { combineReducers }  from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer }  from 'react-redux-firebase'
import imageReducer from './imageReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
	auth      : authReducer,
	image	  : imageReducer,
	user	  : userReducer,
	firestore : firestoreReducer,
	firebase  : firebaseReducer
});

export default rootReducer;