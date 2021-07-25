const ImageGalleryItem = ({ url, id, largeImage, tags }) => {
  return (
    <li key={id}>
      <img src={url} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
