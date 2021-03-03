import React from 'react'
import classes from './Input.module.css';

const input=(props)=> {
    return (
        <input className={classes.Input} type={props.type} onChange={props.onChange} id={props.name} name={props.name} placeholder={props.name} />
    )
}
export default input;