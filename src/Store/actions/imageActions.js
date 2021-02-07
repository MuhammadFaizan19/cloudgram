export const imageUpload = (image) => {
    return (dispatch, getState, { getFirebase, getFirestore, getStorage }) => {
        const firestore = getFirestore()
        const storageRef = getStorage.ref(image.name)
        const collectionRef = firestore.collection('images');
        storageRef.put(image).on('state_changed',snap=>console.log(snap),err=>console.log(err), async () => {
            try {
                const url = await storageRef.getDownloadURL();
                const createdAt = new Date();
                const userId = getState().firebase.auth.uid;
                collectionRef.add({ url, userId, createdAt })
                    .then(() => {
                        dispatch({ type: 'UPLOAD_IMAGE_SUCCESS' })
                    }
                    ).catch((err) => {
                        dispatch({ type: 'UPLOAD_IMAGE_ERROR', err })
                    }
                    )
            } catch (e) {
                console.log(e)
            }
        })
    }
}
