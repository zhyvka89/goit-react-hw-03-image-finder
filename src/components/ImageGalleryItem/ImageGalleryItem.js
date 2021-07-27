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

export default ImageGalleryItem;
