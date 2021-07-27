import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  url,
  id,
  largeImage,
  tags,
  toggleModal,
  handleLargeImage,
}) => {
  const handleModalOpen = () => {
    toggleModal();
    handleLargeImage(largeImage);
  };

  return (
    <li className={styles.item} key={id} onClick={() => handleModalOpen()}>
      <img src={url} alt={tags} className={styles.itemImage} />
    </li>
  );
};

ImageGalleryItem.propeType = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  handleLargeImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
