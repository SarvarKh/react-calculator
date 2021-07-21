import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../style/components.module.css';

export default function Button(props) {
  const { name } = props;
  const { parentHandleState } = props;
  const operators = ['+', '-', '÷', 'X', '='];
  const getClass = (btn) => {
    let result;
    if (btn === '0') {
      result = styles.btnZero;
    } else if (operators.includes(btn)) {
      result = styles.btnOperators;
    } else {
      result = styles.btn;
    }
    return result;
  };
  return (
    <>
      <button type="button" onClick={() => parentHandleState(name)} className={getClass(name)}>
        {name}
      </button>
    </>
  );
}

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '0',
};

Button.propTypes = {
  parentHandleState: PropTypes.func,
};

Button.defaultProps = {
  parentHandleState: '0',
};
