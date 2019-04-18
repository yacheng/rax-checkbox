# CheckBox

[![npm](https://img.shields.io/npm/v/rax-checkbox.svg)](https://www.npmjs.com/package/rax-checkbox)

CheckBox is the basis of the selection box, select the box with a picture to achieve, to support users to use their own images to replace

## Install

```bash
$ npm install rax-checkbox --save
```

## Import

```jsx
import CheckBox from 'rax-checkbox';
```

## Props

| name      | type       | default  | describe   |
| :------ | :------- | :--- | :--- |
| checked | Boolean |      | selected state |
| checkedImage | String |      | selected picture |
| uncheckedImage | String |      | unselected picture |
| containerStyle | Object |      | select container style |
| checkboxStyle | Object |      | select picture style |
| onChange | Function |      | select event |

## Example

```jsx
// demo
import { createElement } from 'rax';
import CheckBox from 'rax-checkbox';

export default (props) => {
  return (
    <CheckBox
      containerStyle={{
        marginTop: 10,
      }}
      checkboxStyle={{
        width: 5,
        height: 5,
      }}
      onChange={(checked) => {
        console.log('checked', checked);
      }} />
  );
};
```