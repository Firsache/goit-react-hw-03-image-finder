import { Component } from 'react';
import { SearchBar } from 'components/index';

export class App extends Component {
  state = {
    searchedValue: '',
  };

  gerSearchedValue = searchedValue => {
    this.setState({ searchedValue });
  };

  render() {
    return <SearchBar onSubmit={this.gerSearchedValue} />;
  }
}
