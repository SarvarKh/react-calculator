import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default function App() {
  calculate();
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
}
