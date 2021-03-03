import React, { useState, useEffect } from 'react';
import classes from "./UploadImage.module.css";

import { connect } from 'react-redux'
import { imageUpload } from '../../Store/actions/imageActions'

const UploadImage = ({ upload, title, uploadError, setSharing }) => {
    const [image, setImage] = useState(null)
    const [sharedImagesViewed, setSharedImagesViewed] = useState(false)

    const handleUploadClick = () => {
        document.getElementById('upload').click()
    }

    useEffect(() => {
        if (title === 'Show My Images') setSharedImagesViewed(true)
        else setSharedImagesViewed(false)
        // eslint-disable-next-line
    }, [title])

    const handleImageInput = (e) => {
        setImage(e.target.files[0])
    }

    const handleShare = () => {
        setSharing(true)
    }

    useEffect(() => {
        image && upload(image)
        // eslint-disable-next-line
    }, [image])

    return (
        <div className={classes.upload} >
            {!sharedImagesViewed && <button className={classes.button} onClick={handleUploadClick} >
                Upload Image
                <input id='upload' type='file' accept='image/jpeg,image/png' className={classes.imageInput} onChange={handleImageInput} />
            </button>
            }
            <button onClick={handleShare} className={classes.button}>Share Image</button>
            {uploadError && <p>{uploadError}</p>}

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
