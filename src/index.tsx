import {
  createElement,
  CSSProperties,
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
  Ref,
} from 'rax';
import View from 'rax-view';
import Image from 'rax-image';
import { useUpdateEffect } from './hooks';

const CHECKED_ICON =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUxpcTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzLRwScAAAAPdFJOUwDvEI8wz69QQL/fIHCAYDHs4yUAAACoSURBVCjPfdIBDoMgDAXQ31JE1K33v60UZSJ2NjEmvvgpUIAD6aMoMMBR3YqMoBpmDDXbV1B5nApKUB3/kU9ZR1QLDcKklACPJmvCpWSSPWLbJK0e1bgNDrW4J/3iLmLbSov7oqNyjtFsM5nQUzyOc61xfKPlOOpsr4QbSb0x6uKuNqTdZovrmm+W8KDTJjhUbeGB5LS8SDcChV4GwB0bqWPzMmz/R3QHJwAPwC8jHWQAAAAASUVORK5CYII=';
const UNCHECKED_ICON =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUxpcTMzMzMzMzMzMzMzMzMzMzMzMzMzM2vW5DoAAAAHdFJOUwCPEO9AzzBOX/xUAAAASklEQVQoz+2SMRKAQAwCIcmF///YaKl4tYU7Q8O2CwRTD5IBxJJlBSixcKPOFzkzUAmpnGppFCy/+qpqZ2rUJgCbTV/ZbGJ7T/QAwyIE71akwQMAAAAASUVORK5CYII=';

export interface CheckboxImageSource {
  uri?: string;
  width?: number;
  height?: number;
}

export interface CheckboxProps {
  defaultChecked?: boolean;
  checked?: boolean;
  containerStyle?: CSSProperties;
  checkboxStyle?: CSSProperties;
  checkedImage?: CheckboxImageSource;
  uncheckedImage?: CheckboxImageSource;
  onChange?: (checked: boolean) => void;
}

const Checkbox = forwardRef(
  (props: CheckboxProps, ref: Ref<HTMLDivElement>) => {
    const {
      defaultChecked = false,
      checked,
      containerStyle = {},
      checkboxStyle = {},
      checkedImage = { uri: CHECKED_ICON },
      uncheckedImage = { uri: UNCHECKED_ICON },
      onChange = () => {}
    } = props;
    const [hasChecked, setHasChecked] = useState(defaultChecked);
    const checkboxRef = useRef<HTMLDivElement>(null);
    const isChecked = () => {
      return checked === undefined ? hasChecked : checked;
    }
    const imageSource = (isChecked()) ? checkedImage : uncheckedImage;
    useImperativeHandle(ref, () => checkboxRef.current);
    useUpdateEffect(() => {
      onChange(isChecked());
    }, [ hasChecked, checked ])

    return (
      <View
        ref={checkboxRef}
        role="checkbox"
        aria-checked={isChecked()}
        className="flexContainer"
        onClick={() => {
          if (checked === undefined) {
            setHasChecked(!hasChecked);
          }
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            ...containerStyle
          }}
        >
          <Image
            style={{ width: 40, height: 40, ...checkboxStyle }}
            source={imageSource}
          />
        </View>
      </View>
    );
  }
);

export default Checkbox;


