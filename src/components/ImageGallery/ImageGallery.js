import { Component } from 'react';

import ImageGalleryItem from '../ImageGalleryItem';
import imagesApi from '../../services/apiImageService';
import Button from '../Button/Button';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    error: null,
  };

  // componentDidMount() {
  //   console.log('did mount');
  //   // this.setState({ page: 1 });
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log('did update');
    // console.log(prevProps);
    console.log(prevState.page);
    const prevName = prevProps.imageName;
    const currentName = this.props.imageName;
    // const page = this.state.page;

    if (prevName !== currentName) {
      this.getImages();
      // this.setState({ page: 1 });
      //   imagesApi
      //   .fetchImages(currentName, page)
      //     .then(({ hits }) => this.setState((prevState) => ({
      //       images: [...prevState.images, ...hits],
      //       page: 1,
      //     })))
      //   .catch(error => this.setState({ error }));
    }
  }

  handleBtnClick = () => {
    console.log('button');
    this.getImages();
    // this.setState(prevState => ({ page: prevState.page + 1 }));
    // imagesApi
    //   .fetchImages(this.props.imageName, this.state.page)
    //   .then(({ hits }) => this.setState((prevState) => ({
    //     images: [...prevState.images, ...hits],
    //     page: prevState.page + 1,
    //   })))
    //   .catch(error => this.setState({ error }));
  };

  getImages = () => {
    imagesApi
      .fetchImages(this.props.imageName, this.state.page)
      .then(({ hits }) =>
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <>
        <ul>
          {this.state.images.map(image => {
            return (
              <ImageGalleryItem
                url={image.webformatURL}
                id={image.id}
                largeImage={image.largeImageURL}
                tags={image.tags}
              />
            );
          })}
        </ul>
        <Button title="LoadMore" cbonClick={this.handleBtnClick} />
        <Loader
          type="Bars"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={3000}
        />
      </>
    );
  }
}
