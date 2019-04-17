import { createElement, useState, useEffect } from 'rax';
import Image from 'rax-image';
import View from 'rax-view';
import './index.css';

const CHECKED_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUxpcTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzLRwScAAAAPdFJOUwDvEI8wz69QQL/fIHCAYDHs4yUAAACoSURBVCjPfdIBDoMgDAXQ31JE1K33v60UZSJ2NjEmvvgpUIAD6aMoMMBR3YqMoBpmDDXbV1B5nApKUB3/kU9ZR1QLDcKklACPJmvCpWSSPWLbJK0e1bgNDrW4J/3iLmLbSov7oqNyjtFsM5nQUzyOc61xfKPlOOpsr4QbSb0x6uKuNqTdZovrmm+W8KDTJjhUbeGB5LS8SDcChV4GwB0bqWPzMmz/R3QHJwAPwC8jHWQAAAAASUVORK5CYII=';
const UNCHECKED_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUxpcTMzMzMzMzMzMzMzMzMzMzMzMzMzM2vW5DoAAAAHdFJOUwCPEO9AzzBOX/xUAAAASklEQVQoz+2SMRKAQAwCIcmF///YaKl4tYU7Q8O2CwRTD5IBxJJlBSixcKPOFzkzUAmpnGppFCy/+qpqZ2rUJgCbTV/ZbGJ7T/QAwyIE71akwQMAAAAASUVORK5CYII=';

const CheckBox = (props) => {
  const {
    checked = false,
    checkedImage = CHECKED_ICON,
    uncheckedImage = UNCHECKED_ICON,
    containerStyle,
    checkboxStyle = {height: 10, width: 10},
  } = props;

  const [isChecked, setIsChecked] = useState(Boolean(checked));

  const onChange = () => {
    const { onChange } = props;
    const _checked = !isChecked;
    setIsChecked(_checked);
    if (onChange) {
      onChange(_checked);
    }
  };

  useEffect(() => {
    setIsChecked(Boolean(props.checked));
  }, [props.checked]);

  let imageSource = isChecked ? checkedImage : uncheckedImage;
  if (typeof imageSource === 'string') {
    imageSource = {
      uri: imageSource
    };
  }

  return (
    <View role="checkbox" aria-checked={isChecked} onClick={onChange} className="flexContainer">
      <View className="container" style={containerStyle}>
        <Image
          className="checkbox"
          style={checkboxStyle}
          source={imageSource} />
      </View>
    </View>
  );
};

export default CheckBox;
