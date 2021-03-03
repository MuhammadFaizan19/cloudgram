import React from 'react';
import classes from './Button.module.css';

const button=(props)=> {
    return (
        <button className={classes.Button} type={props.type} onClick={(e)=>props.onClick(e)} >{props.children}</button>
    )
}

export default button;