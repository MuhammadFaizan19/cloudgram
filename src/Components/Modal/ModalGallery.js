import React from 'react';
import classes from './ModalGallery.module.css'

const modalGallery = (props) => {
    const clickHandler = (e) => {
        if (e.target.classList.contains(classes.ModalGallery)) {
            props.setSelectedImage(null);
        }
    }

    return (
        <div className={classes.ModalGallery} onClick={clickHandler} >
            <div className={classes.Container}>
                <img src={props.selectedImage} alt='' />
            </div>
        </div>
    )
}

export default modalGallery;
