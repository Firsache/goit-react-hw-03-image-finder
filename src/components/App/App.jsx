import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  SearchBar,
  Loading,
  GalleryList,
  ModalWindow,
  Button,
} from 'components/index';
import { fetchImages } from 'services/app';
import { App } from './App.styled';

export class Gallery extends Component {
  state = {
    searchedValue: '',
    images: [],
    page: 1,
    total: 0,
    isLoading: false,
    imageInfo: null,
  };

  componentDidUpdate(_, prevState) {
    const { searchedValue, page } = this.state;
    if (prevState.searchedValue !== searchedValue || prevState.page !== page) {
      this.fetchImages();
    }
  }

  gerSearchedValue = searchedValue => {
    this.setState({ searchedValue, page: 1, images: [], total: 0 });
    this.pageUp();
  };

  fetchImages = async () => {
    const { searchedValue, page, images } = this.state;
    try {
      this.setState({ isLoading: true });

      const { hits, total } = await fetchImages(searchedValue, page);

      if (total === 0) {
        toast.error(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
      }

      if (total > 0 && page === 1) {
        toast.success(`Horray! We found ${total} images.`);
      }

      if (total > 0 && total === images.length) {
        toast.info(
          "We're sorry, but you've reached the end of search results."
        );
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        total,
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handlePageChange = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  getImageInfo = (imageInfo = null) => {
    this.setState({ imageInfo });
  };

  pageUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const { isLoading, images, total, imageInfo } = this.state;
    return (
      <App>
        <SearchBar onSubmit={this.gerSearchedValue} />
        {isLoading && <Loading />}
        <GalleryList images={images} toggleModal={this.getImageInfo} />

        {imageInfo && (
          <ModalWindow onClose={this.getImageInfo} imageInfo={imageInfo} />
        )}

        {images.length > 0 && images.length < total && (
          <Button handlePageChange={this.handlePageChange} />
        )}
        <ToastContainer autoClose={3000} newestOnTop theme="dark" />
      </App>
    );
  }
}
