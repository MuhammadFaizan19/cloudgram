import React from 'react';
import classes from './ModalGallery.module.css'

const modalGallery = (props) => {
    document.getElementById('root').style.opacity = '0.8'
    const clickHandler = (e) => {
        if (e.target.classList.contains(classes.ModalGallery)) {
            props.setSelectedImage(null);
            document.getElementById('root').style.opacity = '1'
        }
    }
    return (
        <div className={classes.ModalGallery} onClick={clickHandler} >
            <div className={classes.Container}>
                <img src={props.selectedImage.imageUrl} alt='' />
            </div>
        </div>
    )
}

export default modalGallery;
