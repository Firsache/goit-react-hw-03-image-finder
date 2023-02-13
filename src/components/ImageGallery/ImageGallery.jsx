import PropTypes from 'prop-types';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export function GalleryList({ gallery }) {
  return (
    <List>
      {gallery.map(({ item, alt }) => (
        <GalleryItem />
      ))}
    </List>
  );
}
GalleryList.propTypes = {
  gallery: PropTypes.array,
};
