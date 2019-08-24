/* eslint-disable import/no-extraneous-dependencies */
import { createElement, render, useRef, useState } from 'rax';
import DU from 'driver-universal';
import Checkbox from '../src/index';
import View from 'rax-view';

const App = () => {
  const [checked, setChecked] = useState(false);
  return <View>
    <Checkbox checked={checked} onChange={(hasChecked) => {
      alert(`onChange => ${hasChecked}`);
    }}/>
    <View style={{ width: 200, height: 200, backgroundColor: 'red' }} onClick={() => {
      setChecked(!checked);
    }}/>
  </View>;
};

render(<App />, document.body, {
  driver: DU
});
