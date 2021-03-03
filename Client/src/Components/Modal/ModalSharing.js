import React, { useState, useEffect } from 'react';
import classes from './ModalSharing.module.css';
import Input from '../UI/Input/Input'
import { getUsers } from '../../Store/actions/userActions';
import { connect } from 'react-redux';
import { getImages, updateImage } from '../../Store/actions/imageActions';


const ModalSharing = ({ setSharing, images, currentUser, users, getUsers, updateImage, getImages }) => {
    const [selectedImage, setSelectedImage] = useState(null)
    const [email, setEmail] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        getUsers()
        // eslint-disable-next-line
    }, [])

    const clickHandler = (e) => {
        if (e.target.classList.contains(classes.Modal))
            setSharing(false)
    }

    const selectImage = (i) => {
        if (selectedImage) {
            const previousSelect = document.getElementsByClassName(classes.selectedImage)
            if (previousSelect[0]) { previousSelect[0].classList.remove(classes.selectedImage) }
            if (i._id === selectedImage._id)
                return true
        }
    }

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleShare = () => {
        if (selectedImage) {
            if (email !== currentUser && !selectedImage.sharedTo.includes(email)) {
                if (users.includes(email)) {
                    const previousShared = selectedImage.sharedTo
                    const newSharedTo = previousShared.concat([email])
                    const updatedData = {
                        ...selectedImage,
                        sharedTo: newSharedTo
                    }
                    updateImage(updatedData)
                    setTimeout(() => {
                        setSharing(false)
                        getImages()
                    }, 2000)
                }
                else {
                    setError('User does not exist!')
                }
            }
            else {
                setError('Sharing not allowed')
            }
        }
        else {
            setError('Please select an Image!')
        }
    }

    return (
        <div className={classes.Modal} onClick={clickHandler} >
            <div id='modalSharing' className={classes.ModalSharing}>
                <p>{error ? error : 'Select a single image'}</p>
                <div className={classes.Controls}>
                    <Input onChange={handleChange} name='Email' />
                    <button onClick={handleShare} className={classes.button} >Share</button>
                </div>
                <div className={classes.Modimg}>
                    {images && images.map((i, index) => {
                        return <img src={'http://localhost:3002/' + i.imagePath} className={selectImage(i) && classes.selectedImage} onClick={() => setSelectedImage(i)} alt='' key={index} />
                    })}
                </div>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        users: state.user.users,
        currentUser: state.firebase.auth.email
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers()),
        updateImage: (updatedData) => dispatch(updateImage(updatedData)),
        getImages: () => dispatch(getImages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalSharing);
