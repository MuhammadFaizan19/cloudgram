import React, { useState, useEffect } from 'react';
import classes from "./UploadImage.module.css";

import { connect } from 'react-redux'
import { imageUpload } from '../../Store/actions/imageActions'

const UploadImage = ({ upload, setDeleting, title, uploadError, setSharing }) => {
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(null)
    const [sharedImagesViewed, setSharedImagesViewed] = useState(false)

    const handleUploadClick = () => {
        document.getElementById('upload').click()
    }

    if (progress) document.getElementsByClassName(classes.progress)[0].style.width = progress + 'vw'
    if (progress === 100) document.getElementsByClassName(classes.progress)[0].style.width = '0'

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
    const handleDelete = () => {
        setDeleting(true)
    }

    useEffect(() => {
        if (image) {
            upload(image, setProgress)
        }
        // eslint-disable-next-line
    }, [image])

    return (
        <div className={classes.upload} >
            <div>
                {!sharedImagesViewed && <button className={classes.button} onClick={handleUploadClick} >
                    Upload
                <input id='upload' type='file' accept='image/jpeg,image/png' className={classes.imageInput} onChange={handleImageInput} />
                </button>
                }
                <button onClick={handleShare} className={classes.button}>Share</button>
                <button onClick={handleDelete} className={classes.button} >Delete</button>
            </div>
            {uploadError && <p>{uploadError}</p>}
            <p className={classes.progress} ></p>

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
        upload: (image, setProgress) => dispatch(imageUpload(image, setProgress))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadImage)
