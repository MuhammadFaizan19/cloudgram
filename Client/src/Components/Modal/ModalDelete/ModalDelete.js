import React, { useState } from 'react';
import classes from './ModalDelete.module.css';
import { connect } from 'react-redux';
import { deleteImage } from '../../../Store/actions/imageActions';


const ModalSharing = ({ setDeleting, images, deleteImage }) => {
    const [selectedImage, setSelectedImage] = useState(null)
    const [text, setText] = useState('Select An Image From Below')

    const clickHandler = (e) => {
        if (e.target.classList.contains(classes.Modal))
            setDeleting(false)
    }

    const selectImage = (i) => {
        if (selectedImage) {
            const previousSelect = document.getElementsByClassName(classes.selectedImage)
            if (previousSelect[0]) { previousSelect[0].classList.remove(classes.selectedImage) }
            if (i._id === selectedImage._id)
                return true
        }
    }

    const handleDelete = () => {
        if (selectedImage) {
            deleteImage(selectedImage._id)
            setTimeout(() => {
                setDeleting(false)
            }, 1000)
        }
        else {
            setText('Please Select An Image To Delete')
        }
    }

    return (
        <div className={classes.Modal} onClick={clickHandler} >
            <div id='modalSharing' className={classes.ModalSharing}>
                <p>{text}</p>
                <div className={classes.Controls}>
                    <button onClick={handleDelete} className={classes.button} >Delete</button>
                </div>
                <div className={classes.Modimg}>
                    {images && images.map((i, index) => {
                        return <img src={i.imagePath} className={selectImage(i) && classes.selectedImage} onClick={() => setSelectedImage(i)} alt='' key={index} />
                    })}
                </div>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        currentUser: state.firebase.auth.email
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteImage: (imageId) => dispatch(deleteImage(imageId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalSharing);
