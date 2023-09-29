import React from 'react';

const ImageGalleryItem = ({ src, alt, onClick }) => {
    return (
        <li className="gallery-item" onClick={onClick}>
        <img src={src} alt={alt} />
        </li>
    );
};

export default ImageGalleryItem;

