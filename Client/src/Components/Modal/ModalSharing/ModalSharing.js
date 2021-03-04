import React, { useState, useEffect } from 'react';
import classes from './ModalSharing.module.css';
import Input from '../../UI/Input/Input'
import { getUsers } from '../../../Store/actions/userActions';
import { connect } from 'react-redux';
import { shareImage } from '../../../Store/actions/imageActions';


const ModalSharing = ({ setSharing, images, currentUser, users, getUsers, shareImage }) => {
    const [selectedImage, setSelectedImage] = useState(null)
    const [email, setEmail] = useState(null)
    const [text, setText] = useState('Select An Image To Share')

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
            if (email !== currentUser) {
                if (users.includes(email)) {
                    const shareData = {
                        imageUrl: selectedImage.imagePath,
                        userEmail: email,
                        shared: true
                    }
                    shareImage(shareData)
                    setTimeout(() => {
                        setSharing(false)
                    }, 1000)
                }
                else {
                    setText('User does not exist!')
                }
            }
            else {
                setText('Sharing not allowed')
            }
        }
        else {
            setText('Please select an Image!')
        }
    }

    return (
        <div className={classes.Modal} onClick={clickHandler} >
            <div id='modalSharing' className={classes.ModalSharing}>
                <p>{text}</p>
                <div className={classes.Controls}>
                    <Input onChange={handleChange} name='Email' />
                    <button onClick={handleShare} className={classes.button} >Share</button>
                </div>
                <div className={classes.Modimg}>
                    {images && images.map((i, index) => {
                        return <img src={i.imageUrl} className={selectImage(i) && classes.selectedImage} onClick={() => setSelectedImage(i)} alt='' key={index} />
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
        shareImage: (shareData) => dispatch(shareImage(shareData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalSharing);
