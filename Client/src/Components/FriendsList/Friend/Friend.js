import React from 'react';
import classes from './Friend.module.css';
import Button from '../../UI/Button/Button';

const friend=(props)=>{
    return (
        <div className={classes.Friend}>
            <p>Muhammad Faizan</p>
            <Button onClick={props.clicked}>Share Pictures</Button>
        </div>
    )
}

export default friend;
