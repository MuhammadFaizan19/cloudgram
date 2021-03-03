import React, { useState } from 'react';
import ModalGallery from '../Modal/ModalGallery';
import ModalSharing from '../Modal/ModalSharing';
import UploadImage from '../UploadImage/UploadImage';
import classes from './ImageGrid.module.css';


const ImageGrid = ({ images, title }) => {
    const [sharing, setSharing] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);


    return (
        <div className={classes.ImageGrid} >

            <UploadImage title={title} sharing={sharing} setSharing={setSharing} />
            {sharing && <ModalSharing images={images} setSharing={setSharing} />}
            {selectedImage && <ModalGallery selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
            <div>
                {images && images.map((i, index) => {
                    return <img src={'http://localhost:3002/' + i.imagePath} alt='' className={classes.Image} key={index} onClick={() => setSelectedImage(i)} />
                })}
            </div>
        </div>
    )
}

export default ImageGrid;
