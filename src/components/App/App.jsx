import { Component } from 'react';
import { SearchBar, GalleryList } from 'components/index';
import { fetchImages } from 'components/services/app';

export class App extends Component {
  state = {
    searchedValue: 'dogs',
    images: [],
    page: 1,
    totalImages: 0,
    isLoading: false,
  };

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async () => {
    const { searchedValue, page } = this.state;
    try {
      const data = await fetchImages(searchedValue, page);
      const hits = data.hits;
      console.log(hits);
      this.setState({ images: hits });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidUpdate(_, prevState) {
    if (prevState.searchedValue !== this.state.searchedValue) {
      this.fetchImages();
    }
  }
  gerSearchedValue = searchedValue => {
    this.setState({ searchedValue });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.gerSearchedValue} />
        <GalleryList images={this.state.images} />;
      </>
    );
  }
}
