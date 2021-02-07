import {
	createStore,
	applyMiddleware,
	compose
} from 'redux'
import rootReducer                            from './reducers/rootReducer'
import thunk 		                       from 'redux-thunk'
import { reduxFirestore, getFirestore }    from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'
import firebase                            from '../Firebase/Config'

const getStorage=firebase.storage();
const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(
			thunk.withExtraArgument({
				getFirebase,
				getFirestore,
				getStorage

			})
		),
		reduxFirestore(firebase),
	)
);

export default store