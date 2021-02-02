import React, { useState,useEffect } from 'react'
import ImageGrid from '../ImageGrid/ImageGrid';
import classes from './ImagesDisplay.module.css';

const ImagesDisplay = (props) => {
    const [data, setData] = useState('');
    useEffect(() => {
            if (props.location.pathname.includes('/home')) {
                setData('Pictures shared by your friends:');
            }
            else if (props.location.pathname.includes('/gallery')) {
                setData('Your Pictures');
            }
        return () => {
            setData('');
        }
    }, [props.location.pathname])

    return (
        <>
            <h3 className={classes.H3} >{data}</h3>
            <hr />
            <ImageGrid />
        </>
    )
}

export default ImagesDisplay;