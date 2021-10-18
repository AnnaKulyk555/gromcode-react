import React from 'react';

class Search extends React.Component {
  state = { value: '' };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  search = event => {
    event.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <form className="search" onSubmit={this.search}>
        <input
          type="text"
          value={this.state.value}
          className="search__input"
          onChange={this.handleChange}
        />
        <button className="search__button">Search</button>
      </form>
    );
  }
}

export default Search;
