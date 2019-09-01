/* eslint-disable import/no-extraneous-dependencies */
/** @jsx createElement */
'use strict';
import { createElement, render, useState } from 'rax';
import DU from 'driver-universal';
import Checkbox from '../src/index';
import View from 'rax-view';
import Text from 'rax-text';

const App = () => {
  const [checked, setChecked] = useState(false);
  const [controlledCheckboxMsg, setControlledCheckboxMsg] = useState('');
  const [unControlledCheckboxMsg, setUncontrolledCheckboxMsg] = useState('');
  return (
    <View>
      <Text>Controlled: {controlledCheckboxMsg}</Text>
      <Checkbox
        checked={checked}
        onChange={hasChecked => {
          setControlledCheckboxMsg(`onChange => ${hasChecked}`);
        }}
      >{(value) => <Text>{value}</Text>}</Checkbox>
      <View
        style={{
          paddingLeft: 15,
          paddingRight: 15,
          backgroundColor: '#1890FF',
          width: 200,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={() => {
          setChecked(!checked);
        }}
      >
        <Text style={{ color: '#fff' }}>Click Me!</Text>
      </View>
      <Text>Uncontrolled: {unControlledCheckboxMsg}</Text>
      <Checkbox
        defaultChecked
        onChange={(hasChecked) => {
          setUncontrolledCheckboxMsg(`onChange => ${hasChecked}`);
        }}
      >{(value) => (<Text>{value}</Text>)}</Checkbox>
    </View>
  );
};

render(<App />, document.body, {
  driver: DU
});
