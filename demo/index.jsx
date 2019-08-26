/* eslint-disable import/no-extraneous-dependencies */
import { createElement, render, useState } from 'rax';
import DU from 'driver-universal';
import Checkbox from '../src/index';
import View from 'rax-view';
import Text from 'rax-text';

const App = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View>
      <Text>Controlled:</Text>
      <Checkbox
        checked={checked}
        onChange={hasChecked => {
          alert(`Controlled onChange => ${hasChecked}`);
        }}
      />
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
      <Text>Uncontrolled:</Text>
      <Checkbox
        defaultChecked
        onChange={hasChecked => {
          alert(`Uncontrolled onChange => ${hasChecked}`);
        }}
      />
    </View>
  );
};

render(<App />, document.body, {
  driver: DU
});
