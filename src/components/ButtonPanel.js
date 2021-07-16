/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button';

export default function ButtonPanel(props) {
  return (
    <>
      <div>
        <Button name="AC" onClick={() => props.handleClick('AC')} />
        <Button name="+/-" onClick={() => props.handleClick('+/-')} />
        <Button name="%" onClick={() => props.handleClick('%')} />
        <Button name="÷" onClick={() => props.handleClick('÷')} />
      </div>
      <div>
        <Button name="7" onClick={() => props.handleClick('7')} />
        <Button name="8" onClick={() => props.handleClick('8')} />
        <Button name="9" onClick={() => props.handleClick('9')} />
        <Button name="X" onClick={() => props.handleClick('X')} />
      </div>
      <div>
        <Button name="4" onClick={() => props.handleClick('4')} />
        <Button name="5" onClick={() => props.handleClick('5')} />
        <Button name="6" onClick={() => props.handleClick('6')} />
        <Button name="-" onClick={() => props.handleClick('-')} />
      </div>
      <div>
        <Button name="1" onClick={() => props.handleClick('1')} />
        <Button name="2" onClick={() => props.handleClick('2')} />
        <Button name="3" onClick={() => props.handleClick('3')} />
        <Button name="+" onClick={() => props.handleClick('+')} />
      </div>
      <div>
        <Button name="0" onClick={() => props.handleClick('0')} />
        <Button name="," onClick={() => props.handleClick(',')} />
        <Button name="=" onClick={() => props.handleClick('=')} />
      </div>
    </>
  );
}
