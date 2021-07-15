import React from 'react';
import PropTypes from 'prop-types';

import styles from './Display.module.css';

const Display = ({ result }) => (
  <div className={styles.displayContainer}>
    <p className={styles.displayOutput}>{result}</p>
  </div>
);

Display.propTypes = {
  result: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Display.defaultProps = {
  result: 0,
};

export default Display;
