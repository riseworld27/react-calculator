import React, { useState, useEffect } from 'react';

import Display from './components/Display/Display';
import ButtonPanel from './components/ButtonPanel/ButtonPanel';
import calculate from './utils/calculate';
import styles from './App.module.css';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [display, setDisplay] = useState(null);

  const handleClick = buttonName => {
    const result = calculate({ total, next, operation }, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  useEffect(() => {
    if (operation === null) {
      if (total === null) {
        setDisplay(<Display result="0" />);
      } else {
        setDisplay(<Display result={total} />);
      }
    } else if (next === null) {
      setDisplay(<Display result={`${total} ${operation}`} />);
    } else {
      setDisplay(<Display result={`${total} ${operation} ${next}`} />);
    }
  }, [total, next, operation]);

  return (
    <div className={styles.container}>
      {display}
      <ButtonPanel clickHandler={e => handleClick(e.target.innerText)} />
    </div>
  );
};

export default App;
