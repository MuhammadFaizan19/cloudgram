import React from 'react';
import classes from './ImageGrid.module.css';


const imageGrid = (props) => {
    const imgs = []
    return (
        <div className={classes.ImageGrid} >
            {imgs.map((i, index) => {
                return <img src={i} alt='' className={classes.Image} key={index} onClick={() => props.setSelectedImage(i)} />
            })}
        </div>
    )
}

export default imageGrid;
