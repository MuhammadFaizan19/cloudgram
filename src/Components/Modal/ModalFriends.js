import React from 'react';
import classes from './ModalFriends.module.css';
import Button from '../UI/Button/Button';

const modalFriends = (props) => {
    const clickHandler=()=>{
        document.querySelector('.'+classes.ModalFriends).style.display='none';
    }
    return (
        <div id='modalFriends' className={classes.ModalFriends}>
            <div className={classes.Controls}>
                <Button onClick={clickHandler} id="close" >Close</Button>
                <p>Sharing Pictures With <span id="sharing" ></span></p>
                <Button>Share</Button>
            </div>
            <div className={classes.Modimg}>
                {props.images.map((i, index) => {
                    return <img src={i} alt='' key={index * 2} />
                })}
            </div>
        </div>
    )
}
export default modalFriends;
