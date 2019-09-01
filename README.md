# CheckBox 选择框

CheckBox 是基础的选择框，选择框用图片实现，支持用户使用自己的图片进行替换

![](https://gw.alicdn.com/tfs/TB1r5wbRVXXXXaNXFXXXXXXXXXX-255-77.gif)

## 安装

```bash
$ npm install rax-checkbox --save
```

## 引用

```jsx
import CheckBox from "rax-checkbox";
```

## 属性

| 名称           | 类型     | 默认值 | 描述           |
| :------------- | :------- | :----- | :------------- |
| defaultChecked | Boolean  |        | 默认选中状态       |
| checked        | Boolean  |        | 选中状态       |
| checkedImage   | String   |        | 选中图片       |
| uncheckedImage | String   |        | 非选中图片     |
| containerStyle | Object   |        | 选择框容器样式 |
| checkboxStyle  | Object   |        | 选择框图片样式 |
| onChange       | Function |        | 选择事件       |

## 基本示例

```jsx
// demo
/** @jsx createElement */
'use strict';
import { createElement, render, useState } from 'rax';
import DU from 'driver-universal';
import Checkbox from 'rax-checkbox';
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
```
