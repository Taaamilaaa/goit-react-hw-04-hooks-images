
import React from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, onClick }) => {
  
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return <ImageGalleryItem key={id} imgL = {largeImageURL} imgS={webformatURL} onClick={onClick} />
      })}
      
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  onClick: PropTypes.func,
}