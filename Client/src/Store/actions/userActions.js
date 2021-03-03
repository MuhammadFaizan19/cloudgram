export const getUsers = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.firestore().collection('users').get()
            .then(res => {
                let users = res.docs.map(doc => doc.data())
                users = users.map(user => user.email)
                dispatch({ type: 'GET_USERS_SUCCESS', users })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: 'GET_USERS_ERROR', err })
            })
    }
}