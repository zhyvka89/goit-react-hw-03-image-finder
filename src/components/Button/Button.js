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

export default Button;
