import React, { useState, useEffect } from 'react';
import classes from "./UploadImage.module.css";

import { connect } from 'react-redux'
import { imageUpload } from '../../Store/actions/imageActions'

const UploadImage = (props) => {
    const [image, setImage] = useState(null)
    useEffect(() => {
        if (image) {
            props.upload(image)
            console.log('upload21')
        }
    }, [image])
    return (
        <div className={classes.UploadForm} >
            <label className={classes.Upload} >
                <input type='file' className={classes.hide} name='image' onChange={(e) => {
                    setImage(e.target.files[0]);
                    document.getElementById('name').textContent = e.target.files[0].name;
                }}
                    accept='image/jpeg,image/png' />
                <span>+</span>
            </label>
            <label id='name' >Upload Image</label>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        upload: (image) => dispatch(imageUpload(image))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadImage)
