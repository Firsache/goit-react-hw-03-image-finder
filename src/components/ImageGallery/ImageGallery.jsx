import PropTypes from 'prop-types';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export function GalleryList({ images }) {
  return (
    <List>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <GalleryItem key={id} src={webformatURL} alt={largeImageURL} />
      ))}
    </List>
  );
}
GalleryList.propTypes = {
  images: PropTypes.array,
};
