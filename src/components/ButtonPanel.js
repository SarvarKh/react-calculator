/* eslint-disable react/prop-types */
// import { checkPropTypes } from 'prop-types';
import React from 'react';
import Button from './Button';

export default function ButtonPanel(props) {
  const { grantParentHandleState } = props;
  return (
    <>
      <div>
        <Button name="AC" parentHandleState={grantParentHandleState} />
        <Button name="+/-" parentHandleState={grantParentHandleState} />
        <Button name="%" parentHandleState={grantParentHandleState} />
        <Button name="÷" />
      </div>
      <div>
        <Button name="7" parentHandleState={grantParentHandleState} />
        <Button name="8" parentHandleState={grantParentHandleState} />
        <Button name="9" parentHandleState={grantParentHandleState} />
        <Button name="X" />
      </div>
      <div>
        <Button name="4" parentHandleState={grantParentHandleState} />
        <Button name="5" parentHandleState={grantParentHandleState} />
        <Button name="6" parentHandleState={grantParentHandleState} />
        <Button name="-" />
      </div>
      <div>
        <Button name="1" parentHandleState={grantParentHandleState} />
        <Button name="2" parentHandleState={grantParentHandleState} />
        <Button name="3" parentHandleState={grantParentHandleState} />
        <Button name="+" />
      </div>
      <div>
        <Button name="0" parentHandleState={grantParentHandleState} />
        <Button name="." parentHandleState={grantParentHandleState} />
        <Button name="=" />
      </div>
    </>
  );
}
