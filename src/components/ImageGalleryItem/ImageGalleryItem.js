import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ imgS, imgL, onClick }) => {
    return (
 <li className="ImageGalleryItem" >
  <img src={imgS} alt="" onClick = {() => onClick(imgL)} className="ImageGalleryItem-image" />
</li>
    )
}

ImageGalleryItem.propTypes = {
    imgS: PropTypes.string,
    imgL: PropTypes.string,
    onClick: PropTypes.func,
}