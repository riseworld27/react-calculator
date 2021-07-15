import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({
  name, handleClick, color, backgroundColor, wide,
}) => (
  <button
    type="button"
    className={styles.button}
    onClick={handleClick}
    style={{ color, backgroundColor, width: wide ? '50%' : '25%' }}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  name: 'Empty',
  handleClick: () => {},
  color: 'white',
  backgroundColor: '#f49040',
  wide: false,
};

export default Button;
