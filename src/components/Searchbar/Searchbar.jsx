import { Component } from 'react';
import { Header, Form, Input, Btn, Icon } from './Searchbar.styled';
// import { BiSearch } from 'react-icons/bi';

export class SearchBar extends Component {
  state = {
    searchedValue: '',
  };

  handleSearch = evt => {
    if (evt.target.value !== this.state.searchedValue) {
      this.setState({ searchedValue: evt.target.value });
    }
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.searchedValue.trim().toLowerCase());
    this.setState({ searchedValue: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Btn>
            <Icon>Search</Icon>
          </Btn>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchedValue}
            onChange={this.handleSearch}
          />
        </Form>
      </Header>
    );
  }
}
