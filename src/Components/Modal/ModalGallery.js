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
                <div className={classes.Details}>
                    <p className={classes.Caption}>{props.data.caption}</p>
                    {props.pathname.includes('/home') && <p >{props.data.friend}</p>}
                    <p>{props.data.date}</p>
                </div>
            </div>
        </div>
    )
}

export default modalGallery;
