import PropTypes from 'prop-types';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export function GalleryList({ images, toggleModal }) {
  return (
    <List>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <GalleryItem
          key={id}
          src={webformatURL}
          alt={largeImageURL}
          toggleModal={toggleModal}
        />
      ))}
    </List>
  );
}
GalleryList.propTypes = {
  images: PropTypes.array,
};
