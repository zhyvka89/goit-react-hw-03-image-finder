import { Component } from 'react';
// import ImagesApi from '../../services/apiImageService';

// const imageApi = new ImagesApi();

export default class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleImageNameChange = e => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
    // imageApi.query = this.state.imageName;
  };

  handlerSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.imageName);
    // imageApi.query = this.state.imageName;
    // const images = imageApi.fatchImages();
    // console.log(images);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handlerSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleImageNameChange}
          />
        </form>
      </header>
    );
  }
}
