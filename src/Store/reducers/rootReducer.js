import authReducer          from './authReducer'
import { combineReducers }  from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer }  from 'react-redux-firebase'
import imageReducer from './imageReducer';

const rootReducer = combineReducers({
	auth      : authReducer,
	image	  : imageReducer,
	firestore : firestoreReducer,
	firebase  : firebaseReducer
});

export default rootReducer;