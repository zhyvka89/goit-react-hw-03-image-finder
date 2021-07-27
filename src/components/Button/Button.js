import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ title, type = 'button', cbonClick }) => {
  return (
    <div className={styles.buttonThumb}>
      <button type={type} onClick={cbonClick} className={styles.button}>
        {title}
      </button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  cbonClick: PropTypes.func.isRequired,
};

export default Button;
