import classes from './FriendsList.module.css';
import React from 'react'
import ModalFriends from '../Modal/ModalFriends';
// eslint-disable-next-line
// import Friend from './Friend/Friend';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
const friendsList = () => {
    // eslint-disable-next-line
    // const clickHandler = () => {
    //     document.querySelector('#modalFriends').style.display = 'flex';
    //     document.querySelector('#sharing').textContent = 'Muhammad Faizan';
    // }
    return (
        <div className={classes.Friends}>
            <ModalFriends images={[]} />
            <div>
                <h2>Friends</h2>
                <div>
                    <Input type='text' name="Friend's Email" />
                    <Button>Add</Button>
                </div>
                <div className={classes.FriendsList}>
                </div>
            </div>
        </div>
    )
}

export default friendsList;
