import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { name } = props;
  const { parentHandleState } = props;
  return (
    <>
      <button type="button" onClick={() => parentHandleState(name)}>
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
  parentHandleState: PropTypes.string,
};

Button.defaultProps = {
  parentHandleState: '0',
};
