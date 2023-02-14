import { Component } from 'react';
import { SearchBar, GalleryList } from 'components/index';
import { fetchImages } from 'components/services/app';

export class App extends Component {
  state = {
    searchedValue: '',
  };
  componentDidMount() {
    fetchImages();
  }
  // fetchImages = (query, page) {

  // }

  gerSearchedValue = searchedValue => {
    this.setState({ searchedValue });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.gerSearchedValue} />
        <GalleryList />;
      </>
    );
  }
}
