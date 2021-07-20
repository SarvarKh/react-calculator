import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { name } = props;
  const { parentHandleState } = props;
  const isBtn0 = name === '0' ? '202%' : '100%';
  return (
    <>
      <button type="button" onClick={() => parentHandleState(name)} style={{ width: isBtn0 }}>
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
