import classes from './Modal.module.css';
import React from 'react'

const modal = (props) => {
    console.log(props);
    const clickHandler = (e) => {
        if (e.target.classList.contains(classes.ModalGallery)) {
            props.setSelectedImage(null);
        }
    }

    let display;
    if (props.pathname.includes('/home') || props.pathname.includes('/gallery')) {
        display = [
            <div className={classes.ModalGallery} onClick={clickHandler} >
                <div className={classes.Container}>
                    <img src={props.selectedImage} />
                    <div className={classes.Details}>
                        <p className={classes.Caption}>{props.data.caption}</p>
                        {props.pathname.includes('/home') && <p >{props.data.friend}</p>}
                        <p>{props.data.date}</p>
                    </div>
                </div>
            </div>
        ]
    }
    else if (props.pathname.includes('/friends')) {
        display = [
            <div className={classes.ModalFriends} onClick={clickHandler}>
                <div className={classes.Controls}>
                    <button id="close" >Close</button>
                    <p>Sharing Pictures With <span id="sharing" ></span></p>
                    <button id="share" >Share</button>
                </div>
                <div className={classes.Modimg}>
                    {props.images.map((i, index) => {
                        <img src={i} alt='' key={index * 2} />
                    })}
                </div>
            </div>
        ]
    }
    return (
        display
    )
}

export default modal;
