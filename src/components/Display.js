import React from 'react';
import PropTypes from 'prop-types';

export default function Display(props) {
  const { status } = props;
  return (
    <>
      {status === null ? '0' : status}
    </>
  );
}

Display.propTypes = {
  status: PropTypes.string,
};

Display.defaultProps = {
  status: '0',
};
