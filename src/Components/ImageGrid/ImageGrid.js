import React from 'react';
import UploadImage from '../UploadImage/UploadImage';
import classes from './ImageGrid.module.css';


const imageGrid = (props) => {
    const imgs = [
        'https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg',
        'https://www.timeoutdubai.com/public/images/2020/07/13/IMG-Dubai-UAE.jpg'
    ]
    return (
        <div className={classes.ImageGrid} >
            {imgs.map((i, index) => {
                return <img src={i} alt='' className={classes.Image} key={index} onClick={() => props.setSelectedImage(i)} />
            })}
            <UploadImage />
        </div>
    )
}

export default imageGrid;
