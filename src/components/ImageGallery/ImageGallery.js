import { Component } from 'react';
import PropTypes from 'prop-types';

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

  PropTypes = {
    imageName: PropTypes.string.isRequired,
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
    const { showModal, loading, images, largeImage } = this.state;

    return (
      <>
        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <img src={largeImage} alt="pics" width="680" height="500" />
          </Modal>
        )}

        <ul className={styles.gallery}>
          {images.map(({ webformatURL, id, tags, largeImageURL }) => {
            return (
              <ImageGalleryItem
                url={webformatURL}
                id={id}
                largeImage={largeImageURL}
                tags={tags}
                toggleModal={this.toggleModal}
                handleLargeImage={this.handleLargeImage}
              />
            );
          })}
        </ul>

        {images.length > 0 && !loading && (
          <Button title="Load More" cbonClick={this.handleBtnClick} />
        )}

        {loading && (
          <Loader
            type="Bars"
            color="#3f51b5"
            height={50}
            width={50}
            timeout={1000}
          />
        )}
      </>
    );
  }
}
