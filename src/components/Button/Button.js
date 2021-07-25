const Button = ({ title, type = 'button', cbonClick }) => {
  return (
    <button type={type} onClick={cbonClick}>
      {title}
    </button>
  );
};

export default Button;
