import React, { useState, useEffect } from 'react';
import ImageGrid from '../Components/ImageGrid/ImageGrid';
import ModalGallery from '../Components/Modal/ModalGallery';
import Button from '../Components/UI/Button/Button';
import UploadImage from '../Components/UploadImage/UploadImage';
import classes from './Cloudgram.module.css';

const Cloudgram = (props) => {
    const [title, setTitle] = useState('');
    const [images, setImages] = useState([]);
    const [change, setChange] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

    const changeImagesHandler = () => {
        setChange(!change);
        console.log(change);
    }
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
            <ImageGrid setSelectedImage={setSelectedImage} />
            <UploadImage />
            {selectedImage && <ModalGallery selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
        </div>
    )
}

export default Cloudgram;