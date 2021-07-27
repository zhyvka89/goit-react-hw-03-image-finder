import { Component } from 'react';

import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

import styles from './ImageGallery.module.css';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import ImagesApi from '../../services/apiImageService';
const imagesApi = new ImagesApi();

export default class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    showModal: false,
    largeImage: '',
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const currentName = this.props.imageName;

    if (prevName !== currentName) {
      this.setState({ images: [] });
      imagesApi.query = currentName;
      imagesApi.resetPage();
      this.getImages();
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  handleLargeImage = image => {
    this.setState({ largeImage: image });
  };

  handleBtnClick = () => {
    this.getImages();
  };

  getImages = () => {
    this.setState({ loading: true });

    setTimeout(() => {
      imagesApi
        .fatchImages()
        .then(({ hits }) =>
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
          })),
        )
        .catch(error => {
          this.setState({ error });
          console.log(error);
        })
        .finally(this.setState({ loading: false }));
    }, 1000);
  };

  render() {
    return (
      <>
        {this.state.showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <img
              src={this.state.largeImage}
              alt="pics"
              width="680"
              height="500"
            />
          </Modal>
        )}

        <ul className={styles.gallery}>
          {this.state.images.map(image => {
            return (
              <ImageGalleryItem
                url={image.webformatURL}
                id={image.id}
                largeImage={image.largeImageURL}
                tags={image.tags}
                toggleModal={this.toggleModal}
                handleLargeImage={this.handleLargeImage}
              />
            );
          })}
        </ul>

        {this.state.images.length > 0 && (
          <Button title="Load More" cbonClick={this.handleBtnClick} />
        )}

        {this.state.loading && (
          <Loader
            type="Bars"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={1000}
          />
        )}
      </>
    );
  }
}
