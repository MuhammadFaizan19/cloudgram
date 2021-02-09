import React, { useState, useEffect } from 'react';
import ImageGrid from '../Components/ImageGrid/ImageGrid';
import ModalGallery from '../Components/Modal/ModalGallery';
import Button from '../Components/UI/Button/Button';
import classes from './Cloudgram.module.css';

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {getImages} from '../Store/actions/imageActions'

const Cloudgram = (props) => {
    const [title, setTitle] = useState('');
    const [images, setImages] = useState([]);
    const [change, setChange] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);


    const changeImagesHandler = () => {
        setChange(!change);
        console.log(change);
    }
    const shared=false;
    useEffect(()=>{
        props.getImages(shared,setImages);
    },[])
    useEffect(() => {
        if (change) {
            setTitle('Show Friends Images');
        }
        else {
            setTitle('Show My Images');
        }
        return () => {
            setTitle('');
        }
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
        images: state.images
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getImages: (shared,setImages) => dispatch(getImages(shared,setImages))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cloudgram);