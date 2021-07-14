import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const myData = {
  total: '5',
  next: '3',
  operation: '+',
};

export default function App() {
  calculate(myData, '=');
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
}
