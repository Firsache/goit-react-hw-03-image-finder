import { Component } from 'react';
import {
  SearchBar,
  Loading,
  GalleryList,
  ModalWindow,
  Button,
} from 'components/index';
import { fetchImages } from 'components/services/app';
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
    this.setState({ searchedValue });
    this.pageUp();
  };

  fetchImages = async () => {
    const { searchedValue, page } = this.state;
    try {
      this.setState({ isLoading: true });

      const data = await fetchImages(searchedValue, page);
      const hits = data.hits;
      const total = data.total;
      this.setState({ images: hits, total });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handlePageChange = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.pageUp();
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
    const { isLoading, images, total, page, imageInfo } = this.state;
    return (
      <App>
        <SearchBar onSubmit={this.gerSearchedValue} />
        {isLoading && <Loading />}
        <GalleryList images={images} toggleModal={this.getImageInfo} />

        {imageInfo && (
          <ModalWindow onClose={this.getImageInfo} imageInfo={imageInfo} />
        )}

        {images.length > 0 && page * 12 < total && (
          <Button handlePageChange={this.handlePageChange} />
        )}
      </App>
    );
  }
}
