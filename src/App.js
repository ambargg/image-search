import React, { Component } from "react";
import PhotoList from "./PhotoList";
import SearchForm from "./SearchForm";

class App extends Component {
  state = {
    images: [],
    searchText: "",
  };

  setSearchText = (text) => {
    this.setState({ searchText: text });
    this.updatePhotos(text);
  };

  updatePhotos = (searchTerm) => {
    // original URL endpoint: https://api.unsplash.com/photos/?client_id=UVGIvLIdKgQ16WEGvBqgJIXoe1kHOHn4gOwU6AtR1IQ
    
    const url = `https://api.unsplash.com/search/photos/?page=1&per_page=28&query=${searchTerm}&client_id=UVGIvLIdKgQ16WEGvBqgJIXoe1kHOHn4gOwU6AtR1IQ`;

    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        this.setState({
          images: data.results,
        });
      });
  }

  render() {
    return (
      <div className="main-container">
        <div className="main-header">
          <div className="banner">
            <h1 className="main-title">Image Search</h1>
            <SearchForm
              setSearchText={this.setSearchText}
            />
          </div>
        </div>
        {/* <p>Inspiration for: {this.state.searchText}</p> */}
        <div className="grid-container">
          <PhotoList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;