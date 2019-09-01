import { createElement, useState, CSSProperties, FunctionComponent, useRef, useEffect } from 'rax';
import Image from 'rax-image';
import View from 'rax-view';

const CHECKED_ICON =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUxpcTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzLRwScAAAAPdFJOUwDvEI8wz69QQL/fIHCAYDHs4yUAAACoSURBVCjPfdIBDoMgDAXQ31JE1K33v60UZSJ2NjEmvvgpUIAD6aMoMMBR3YqMoBpmDDXbV1B5nApKUB3/kU9ZR1QLDcKklACPJmvCpWSSPWLbJK0e1bgNDrW4J/3iLmLbSov7oqNyjtFsM5nQUzyOc61xfKPlOOpsr4QbSb0x6uKuNqTdZovrmm+W8KDTJjhUbeGB5LS8SDcChV4GwB0bqWPzMmz/R3QHJwAPwC8jHWQAAAAASUVORK5CYII=';
const UNCHECKED_ICON =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUxpcTMzMzMzMzMzMzMzMzMzMzMzMzMzM2vW5DoAAAAHdFJOUwCPEO9AzzBOX/xUAAAASklEQVQoz+2SMRKAQAwCIcmF///YaKl4tYU7Q8O2CwRTD5IBxJJlBSixcKPOFzkzUAmpnGppFCy/+qpqZ2rUJgCbTV/ZbGJ7T/QAwyIE71akwQMAAAAASUVORK5CYII=';

export interface CheckBoxProps {
  /**
   * selected state
   */
  checked?: boolean;
  /**
   * default selected state
   */
  defaultChecked?: boolean;
  /**
   * selected picture
   */
  checkedImage?: string;
  /**
   * unselected picture
   */
  uncheckedImage?: string;
  /**
   * select box container style
   */
  containerStyle?: CSSProperties;

  /**
   * select box picture style
   */
  checkboxStyle?: CSSProperties;

  /**
   * change event
   * @param checked checked
   */
  onChange?: (checked?: boolean) => void;
}

const CheckBox: FunctionComponent<CheckBoxProps> = ({
  checked,
  defaultChecked = false,
  checkedImage = CHECKED_ICON,
  uncheckedImage = UNCHECKED_ICON,
  containerStyle = {},
  checkboxStyle = {},
  onChange,
  children
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const isInitialMount = useRef(false);
  const _checked = checked !== undefined ? checked : isChecked;
  useEffect(() => {
    if (!isInitialMount.current) {
      isInitialMount.current = true;
    } else {
      if (onChange) {
        onChange(_checked);
      }
    }
  }, [_checked]);
  return (
    <View
      className="container"
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...children ? {} : { width: 40, height: 40 },
        ...containerStyle
      }}
      role="checkbox"
      aria-checked={_checked}
      onClick={() => {
        if (typeof checked !== 'undefined') {
          return;
        }
        if (onChange) {
          onChange(!isChecked);
        }
        setIsChecked(!isChecked);
      }}
    >
      <Image
        style={{
          marginRight: children ? 8 : 0,
          width: 40,
          height: 40,
          ...checkboxStyle
        }}
        source={{ uri: _checked ? checkedImage : uncheckedImage }}
      />
      {typeof children === 'function' ? children(_checked) : children}
    </View>
  );
};

export default CheckBox;
