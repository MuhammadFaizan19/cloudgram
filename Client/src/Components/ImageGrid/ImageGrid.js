import React from 'react';
import UploadImage from '../UploadImage/UploadImage';
import classes from './ImageGrid.module.css';


const imageGrid = ({ images, setSelectedImage }) => {

    return (
        <div className={classes.ImageGrid} >
            <UploadImage />
            <div>
                {images && images.map((i, index) => {
                    return <img src={'http://localhost:3002/' + i.imagePath} alt='' className={classes.Image} key={index} onClick={() => setSelectedImage(i)} />
                })}
            </div>
        </div>
    )
}

export default imageGrid;
