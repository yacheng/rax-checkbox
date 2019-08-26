import {
  createElement,
  useState,
  useEffect,
  CSSProperties,
  FunctionComponent
} from "rax";
import Image from "rax-image";
import View from "rax-view";
import "./index.css";

const CHECKED_ICON =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUxpcTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzLRwScAAAAPdFJOUwDvEI8wz69QQL/fIHCAYDHs4yUAAACoSURBVCjPfdIBDoMgDAXQ31JE1K33v60UZSJ2NjEmvvgpUIAD6aMoMMBR3YqMoBpmDDXbV1B5nApKUB3/kU9ZR1QLDcKklACPJmvCpWSSPWLbJK0e1bgNDrW4J/3iLmLbSov7oqNyjtFsM5nQUzyOc61xfKPlOOpsr4QbSb0x6uKuNqTdZovrmm+W8KDTJjhUbeGB5LS8SDcChV4GwB0bqWPzMmz/R3QHJwAPwC8jHWQAAAAASUVORK5CYII=";
const UNCHECKED_ICON =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUxpcTMzMzMzMzMzMzMzMzMzMzMzMzMzM2vW5DoAAAAHdFJOUwCPEO9AzzBOX/xUAAAASklEQVQoz+2SMRKAQAwCIcmF///YaKl4tYU7Q8O2CwRTD5IBxJJlBSixcKPOFzkzUAmpnGppFCy/+qpqZ2rUJgCbTV/ZbGJ7T/QAwyIE71akwQMAAAAASUVORK5CYII=";

export interface CheckBoxProps {
  /**
   * selected state
   */
  checked: boolean;
  checkedImage: string;

  /**
   * unselected picture
   */
  uncheckedImage: string;
  /**
   * select box container style
   */
  containerStyle: CSSProperties;

  /**
   * select box picture style
   */
  checkboxStyle: CSSProperties;

  /**
   * change event
   * @param checked checked
   */
  onChange: (checked?: boolean) => void;
}

const CheckBox: FunctionComponent<CheckBoxProps> = ({
  checked = false,
  checkedImage = CHECKED_ICON,
  uncheckedImage = UNCHECKED_ICON,
  containerStyle = {},
  checkboxStyle = {},
  onChange
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const _checked = !isChecked;
    setIsChecked(_checked);
    if (onChange) {
      onChange(_checked);
    }
  };

  useEffect(() => {
    setIsChecked(Boolean(checked));
  }, [checked]);

  return (
    <View
      role="checkbox"
      aria-checked={isChecked}
      onClick={handleChange}
      className="flexContainer"
    >
      <View
        className="container"
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
          ...containerStyle
        }}
      >
        <Image
          style={{ width: 40, height: 40, ...checkboxStyle }}
          source={{ uri: isChecked ? checkedImage : uncheckedImage }}
        />
      </View>
    </View>
  );
};

export default CheckBox;
