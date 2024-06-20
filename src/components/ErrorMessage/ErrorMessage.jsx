import styles from "./ErrorMessage.module.css";
import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.errorMessage}>
      <img
        src="/src/images/oopsImage.png"
        alt="Oops"
        width="300"
        height="300"
      />
      <p>{message}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
