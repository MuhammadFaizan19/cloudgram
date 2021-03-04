import React, { useState } from 'react';
import ModalDelete from '../Modal/ModalDelete/ModalDelete';
import ModalGallery from '../Modal/ModalGallery/ModalGallery';
import ModalSharing from '../Modal/ModalSharing/ModalSharing';
import UploadImage from '../UploadImage/UploadImage';
import classes from './ImageGrid.module.css';


const ImageGrid = ({ images, title }) => {
    const [sharing, setSharing] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);


    return (
        <div className={classes.ImageGrid} >

            <UploadImage setDeleting={setDeleting} title={title} sharing={sharing} setSharing={setSharing} />
            {sharing && <ModalSharing images={images} setSharing={setSharing} />}
            {selectedImage && <ModalGallery selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
            {deleting && <ModalDelete setDeleting={setDeleting} images={images} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
            <div>
                {images && images.map((i, index) => {
                    return <img src={i.imagePath} alt='' className={classes.Image} key={index} onClick={() => setSelectedImage(i)} />
                })}
            </div>
        </div>
    )
}

export default ImageGrid;
