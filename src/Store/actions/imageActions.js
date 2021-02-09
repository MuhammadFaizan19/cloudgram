export const imageUpload = (image) => {
    return (dispatch, getState, { getFirebase, getFirestore, getStorage }) => {
        const firestore = getFirestore()
        const storageRef = getStorage.ref(image.name)
        const collectionRef = firestore.collection('images');
        storageRef.put(image).on('state_changed', snap => console.log(snap), err => console.log(err), async () => {
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

export const getImages = (shared, setImages) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('users')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    const userId = doc.data().userId;
                    const uid = getState().firebase.auth.uid;
                    const sharedByFriends = doc.data().shared;
                    if (shared === sharedByFriends && userId === uid) {
                        documents.push({ ...doc.data(), id: doc.id });
                    }
                })
                const s = (setImages, documents) => {
                    setImages(documents)
                    return 'a'
                }
                s(setImages, documents)
                    .then(() => {
                        dispatch({ type: 'GET_IMAGE_SUCCESS' })
                    }
                    ).catch((err) => {
                        dispatch({ type: 'GET_IMAGE_ERROR', err })
                    }
                    )
            })

    }
}
