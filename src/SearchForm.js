import React, { Component } from "react";

class SearchForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.setSearchText(document.getElementById("searchTerm").value);
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <label htmlFor="search"></label>
        <input
          type="search"
          name="search"
          id="searchTerm"
          placeholder="Search..."
        />
        <button type="submit" id="submit" className="search-button">
          <i className="btn-search">Go</i>
        </button>
      </form>
    );
  }
}

export default SearchForm;