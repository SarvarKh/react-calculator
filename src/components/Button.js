import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { name } = props;
  return (
    <>
      Button name:
      {name}
    </>
  );
}

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '0',
};
