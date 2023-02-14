import PropTypes from 'prop-types';
import { Item, Img } from './ImageGalleryItem.styled';

export function GalleryItem({ src, alt, toggleModal }) {
  return (
    <Item>
      <Img src={src} alt={alt} onClick={() => toggleModal()} />
    </Item>
  );
}

GalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
