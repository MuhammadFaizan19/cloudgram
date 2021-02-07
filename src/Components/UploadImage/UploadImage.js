import React from 'react';
import classes from "./UploadImage.module.css";



const UploadImage = () => {
    return (
        <div className={classes.UploadForm} >
            <label className={classes.Upload} >
                <input type='file' className={classes.hide} name='image' onChange={(e) => {
                    document.getElementById('name').textContent = e.target.files[0].name;
                }}
                    accept='image/jpeg,image/png' />
                <span>+</span>
            </label>
            <label id='name' >Upload Image</label>
        </div>
    )
}

export default UploadImage;
