
export const signIn = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();
		const auth = firebase.auth();
		const firestore = firebase.firestore()
		const googleProvider = new firebase.auth.GoogleAuthProvider()
		auth.signInWithPopup(googleProvider)
			.then((res) => {
				const uid = res.user.uid
				const loggedUser = {
					email: res.user.email,
					name: res.user.displayName,
				}
				firestore.collection('users').doc(res.user.uid).get()
					.then((res) => {
						if (!res.data()) {
							auth.sendPasswordResetEmail(loggedUser.email)
							firestore.collection('users').doc(uid).set(loggedUser)
								.then(res => {
									dispatch({ type: 'GOOGLE_LOGIN_SUCCESS', data: loggedUser });
								})
						}
						else {
							dispatch({ type: 'GOOGLE_LOGIN_SUCCESS', data: res.data() });
						}
					})
			})
			.catch((err) => {
				dispatch({ type: 'GOOGLE_LOGIN_ERROR', err });
			})
	}
}

export const signInEmailPassword = (creds) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();
		firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
			.then((res) => {
				firebase.firestore().collection('users').doc(res.user.uid).get()
					.then(res => dispatch({ type: 'SIGN_IN_SUCCESS', data: res.data() }))
					.catch(err => console.log(err))
			})
			.catch((err) => {
				dispatch({ type: 'SIGN_IN_ERROR', err })
			})
	}
}

export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		getFirebase().auth().signOut()
			.then(() => {
				dispatch({ type: 'SIGNOUT_SUCCESS' })
			})
	}
}

export const signUp = (newUser) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();
		firebase.auth().createUserWithEmailAndPassword(
			newUser.email,
			newUser.password
		).then(res => {
			firebase.firestore().collection('users').doc(res.user.uid).set({
				name: newUser.fullname,
				email: newUser.email,
			})
				.then((res) => {
					dispatch({ type: 'SIGNUP_SUCCESS', data: newUser });
				})
				.catch((err) => {
					console.log(err)
				});
		})
			.catch(err => {
				console.log(err.message)
				dispatch({ type: 'SIGNUP_ERROR', err });
			})
	}
}

export const getProfile = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();
		const uid = getState().firebase.auth.uid
		firebase.firestore().collection('users').doc(uid).get()
			.then(res => {
				dispatch({ type: 'GET_PROFILE_SUCCESS', data: res.data() })
			})
			.catch(err => {
				dispatch({ type: 'GET_PROFILE_ERROR' })
			})
	}
}