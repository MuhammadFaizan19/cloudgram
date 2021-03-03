import React, { useState, useEffect } from 'react';
import classes from "./UploadImage.module.css";

import { connect } from 'react-redux'
import { imageUpload } from '../../Store/actions/imageActions'

const UploadImage = ({ upload, uploadError }) => {
    const [image, setImage] = useState(null)

    const handleUploadClick = () => {
        document.getElementById('upload').click()
    }
    const handleImageInput = (e) => {
        setImage(e.target.files[0])
    }

    useEffect(() => {
        image && upload(image)
        // eslint-disable-next-line
    }, [image])


    return (
        <div className={classes.upload} >


            <button className={classes.button} onClick={handleUploadClick} >
                Upload Image
                <input id='upload' type='file' accept='image/jpeg,image/png' className={classes.imageInput} onChange={handleImageInput} />
            </button>
            <button className={classes.button}>Share Image</button>
            {uploadError ? <p>{uploadError}</p> : null}

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        uploadError: state.image.err,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        upload: (image) => dispatch(imageUpload(image))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadImage)
