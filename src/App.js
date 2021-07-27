import { Component } from 'react';

import ImageGallery from './components/ImageGallery';
import Layout from './components/Layout';
import Searchbar from './components/Searchbar';

export default class App extends Component {
  state = {
    imageName: '',
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <Layout>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.imageName} />
      </Layout>
    );
  }
}
