import PropTypes from 'prop-types';

import Button from '../Button/Button';
import styles from './ButtonPanel.module.css';

const buttonList = {
  group1: ['AC', '+/-', '%', '/'],
  group2: ['7', '8', '9', 'x'],
  group3: ['4', '5', '6', '-'],
  group4: ['1', '2', '3', '+'],
  group5: ['0', '.', '='],
};

const opList = ['+', '-', 'x', '/', '='];

const Panel = ({ clickHandler }) => (
  <div className={styles.buttonPanel}>
    {
      Object.keys(buttonList).map(key => (
        buttonList[key].map(value => (
          <Button
            key={value}
            name={value}
            group={key}
            handleClick={clickHandler}
            backgroundColor={opList.includes(value) ? undefined : '#dfdfdf'}
            color={opList.includes(value) ? 'white' : 'black'}
            wide={['0'].includes(value) ? true : undefined}
          />
        ))))
    }
  </div>
);

Panel.propTypes = {
  clickHandler: PropTypes.func,
};

Panel.defaultProps = {
  clickHandler: () => {},
};

export default Panel;
