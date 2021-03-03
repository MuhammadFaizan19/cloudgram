import React, { useState, useEffect } from 'react';
import ImageGrid from '../Components/ImageGrid/ImageGrid';
import Button from '../Components/UI/Button/Button';
import classes from './Cloudgram.module.css';

import { connect } from 'react-redux'
import { getImages } from '../Store/actions/imageActions'
import { getProfile } from '../Store/actions/authActions';

const Cloudgram = ({ images, getImages, getProfile }) => {
    const [title, setTitle] = useState('');
    const [change, setChange] = useState(true);



    const changeImagesHandler = () => {
        setChange(!change);
    }
    useEffect(() => {
        getImages(false);
        getProfile()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (change) {
            setTitle('Show Shared Images');
            getImages(false)
        }
        else {
            setTitle('Show My Images');
            getImages(true)
        }
        // eslint-disable-next-line
    }, [change])

    return (
        <div className={classes.Cloudgram} >
            <Button onClick={changeImagesHandler} id='controlImages' >{title}</Button>
            <hr />
            <ImageGrid title={title} images={images} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        images: state.image.images
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getImages: (shared) => dispatch(getImages(shared)),
        getProfile: () => dispatch(getProfile())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cloudgram);