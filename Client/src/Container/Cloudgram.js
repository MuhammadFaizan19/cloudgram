import React, { useState, useEffect } from 'react';
import ImageGrid from '../Components/ImageGrid/ImageGrid';
import ModalGallery from '../Components/Modal/ModalGallery';
import Button from '../Components/UI/Button/Button';
import classes from './Cloudgram.module.css';

import { connect } from 'react-redux'
import { getImages } from '../Store/actions/imageActions'

const Cloudgram = ({ images, getImages }) => {
    const [title, setTitle] = useState('');
    const [change, setChange] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);


    const changeImagesHandler = () => {
        setChange(!change);
    }
    useEffect(() => {
        getImages(false);
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
            <Button onClick={changeImagesHandler} >{title}</Button>
            <hr />
            <ImageGrid images={images} setSelectedImage={setSelectedImage} />
            {selectedImage && <ModalGallery selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
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
        getImages: (shared) => dispatch(getImages(shared))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cloudgram);