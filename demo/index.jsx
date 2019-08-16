/* eslint-disable import/no-extraneous-dependencies */
import { createElement, render, useRef, useEffect } from 'rax';
import DU from 'driver-universal';
import View from 'rax-view';
import CheckBox from '../src/index';

const App = () => {
  const checkboxRef = useRef(null);
  useEffect(() => {
    console.log(checkboxRef);
  });
  return <View ><CheckBox ref={checkboxRef} /></View>;
};

render(<App />, document.body, {
  driver: DU
});
