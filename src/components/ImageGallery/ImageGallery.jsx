import PropTypes from 'prop-types';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export function GalleryList({ images, toggleModal }) {
  return (
    <List>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => (
        <GalleryItem
          key={id}
          src={webformatURL}
          alt={tags}
          toggleModal={toggleModal}
          largeImageURL={largeImageURL}
        />
      ))}
    </List>
  );
}
GalleryList.propTypes = {
  images: PropTypes.array,
};
