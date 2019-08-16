import {
  createElement,
  CSSProperties,
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  RefForwardingComponent
} from 'rax';
import View from 'rax-view';
import Image from 'rax-image';

const CHECKED_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUxpcTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzLRwScAAAAPdFJOUwDvEI8wz69QQL/fIHCAYDHs4yUAAACoSURBVCjPfdIBDoMgDAXQ31JE1K33v60UZSJ2NjEmvvgpUIAD6aMoMMBR3YqMoBpmDDXbV1B5nApKUB3/kU9ZR1QLDcKklACPJmvCpWSSPWLbJK0e1bgNDrW4J/3iLmLbSov7oqNyjtFsM5nQUzyOc61xfKPlOOpsr4QbSb0x6uKuNqTdZovrmm+W8KDTJjhUbeGB5LS8SDcChV4GwB0bqWPzMmz/R3QHJwAPwC8jHWQAAAAASUVORK5CYII=';
const UNCHECKED_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUxpcTMzMzMzMzMzMzMzMzMzMzMzMzMzM2vW5DoAAAAHdFJOUwCPEO9AzzBOX/xUAAAASklEQVQoz+2SMRKAQAwCIcmF///YaKl4tYU7Q8O2CwRTD5IBxJJlBSixcKPOFzkzUAmpnGppFCy/+qpqZ2rUJgCbTV/ZbGJ7T/QAwyIE71akwQMAAAAASUVORK5CYII=';

interface CheckBoxImageSource {
  uri?: string;
  width?: number;
  height?: number;
}

export interface CheckBoxProps {
  defaultChecked?: boolean;
  containerStyle?: CSSProperties;
  checkboxStyle?: CSSProperties;
  checkedImage?: CheckBoxImageSource;
  uncheckedImage?: CheckBoxImageSource;
  onChange?: (checked: boolean) => void;
}

let firstRendered = true;

const CheckBox: RefForwardingComponent<{}, CheckBoxProps> = forwardRef((props, ref) => {
  const { defaultChecked = false, containerStyle = {}, checkboxStyle = {}, checkedImage = { uri: CHECKED_ICON }, uncheckedImage = { uri: UNCHECKED_ICON }, onChange } = props;
  const [checked, setChecked] = useState(defaultChecked);
  const checkboxRef = useRef(null);
  const imageSource = checked ? checkedImage : uncheckedImage;
  useEffect(() => {
    if (firstRendered) {
      firstRendered = false;
    } else {
      if (onChange) {
        onChange(checked);
      }
    }
  });
  useImperativeHandle(ref, () => ({
    _nativeNode: checkboxRef.current._nativeNode
  }));
  return (
    <View ref={checkboxRef} role="checkbox" aria-checked={checked} className="flexContainer" onClick={() => {
      setChecked(!checked);
    }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, ...containerStyle }}>
        <Image
          style={{ width: 40, height: 40, ...checkboxStyle }}
          source={imageSource} />
      </View>
    </View>
  );
});

export default CheckBox;
