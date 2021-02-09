import React from 'react';
import UploadImage from '../UploadImage/UploadImage';
import classes from './ImageGrid.module.css';


const imageGrid = ({images,setSelectedImage}) => {
    return (
        <div className={classes.ImageGrid} >
            {images.map((i, index) => {
                return <img src={i} alt='' className={classes.Image} key={index} onClick={() => setSelectedImage(i)} />
            })}
            <UploadImage />
        </div>
    )
}

export default imageGrid;
