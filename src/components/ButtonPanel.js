import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel(props) {
  const { grantParentHandleState } = props;
  return (
    <>
      <div>
        <Button name="AC" parentHandleState={grantParentHandleState} />
        <Button name="+/-" parentHandleState={grantParentHandleState} />
        <Button name="%" parentHandleState={grantParentHandleState} />
        <Button name="÷" parentHandleState={grantParentHandleState} />
      </div>
      <div>
        <Button name="7" parentHandleState={grantParentHandleState} />
        <Button name="8" parentHandleState={grantParentHandleState} />
        <Button name="9" parentHandleState={grantParentHandleState} />
        <Button name="X" parentHandleState={grantParentHandleState} />
      </div>
      <div>
        <Button name="4" parentHandleState={grantParentHandleState} />
        <Button name="5" parentHandleState={grantParentHandleState} />
        <Button name="6" parentHandleState={grantParentHandleState} />
        <Button name="-" parentHandleState={grantParentHandleState} />
      </div>
      <div>
        <Button name="1" parentHandleState={grantParentHandleState} />
        <Button name="2" parentHandleState={grantParentHandleState} />
        <Button name="3" parentHandleState={grantParentHandleState} />
        <Button name="+" parentHandleState={grantParentHandleState} />
      </div>
      <div>
        <Button name="0" parentHandleState={grantParentHandleState} />
        <Button name="." parentHandleState={grantParentHandleState} />
        <Button name="=" parentHandleState={grantParentHandleState} />
      </div>
    </>
  );
}

ButtonPanel.propTypes = {
  grantParentHandleState: PropTypes.func,
};

ButtonPanel.defaultProps = {
  grantParentHandleState: '0',
};
