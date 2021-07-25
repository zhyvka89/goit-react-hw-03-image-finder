import { Component } from 'react';

// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// import Button from "./components/Button/Button";
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

  // handleBtnClick = () => {
  //   console.log('button');
  // }

  render() {
    return (
      <Layout>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.imageName} />
        {/* <Button title='Load More' cbonClick={this.handleBtnClick}/>
        <Loader
          type="Bars"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={3000}
        /> */}
      </Layout>
    );
  }
}
