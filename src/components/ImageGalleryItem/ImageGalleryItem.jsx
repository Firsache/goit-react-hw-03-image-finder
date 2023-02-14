import PropTypes from 'prop-types';
import { Item, Img } from './ImageGalleryItem.styled';

export function GalleryItem({ src, alt }) {
  return (
    <Item>
      <Img src={src} alt={alt} />
    </Item>
  );
}

GalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
