import IconWrapper from "./IconWrapper";
import { DEFAULT_ICON_HEIGHT } from "../../constants";
import { IconProps } from "./types";

const IOIcon = ({ height = DEFAULT_ICON_HEIGHT }: IconProps) => {
  return (
    <IconWrapper viewBox="0 0 18 18" height={height}>
      <EnabledPath />
    </IconWrapper>
  );
};

const EnabledPath = () => {
  return (
    <path
      d="M17.1469 9.0428C17.1469 4.56693 13.5185 0.93853 9.04267 0.93853C4.56681 0.93853 0.938408 4.56693 0.938408 9.0428C0.938408 13.5187 4.56681 17.1471 9.04267 17.1471C13.5185 17.1471 17.1469 13.5187 17.1469 9.0428ZM18 9.0428C18 13.9898 13.9897 18.0001 9.04267 18.0001C4.09567 18.0001 0.0853271 13.9898 0.0853271 9.0428C0.0853271 4.09579 4.09567 0.0854492 9.04267 0.0854492C13.9897 0.0854492 18 4.09579 18 9.0428Z"
      fill="black"
    />
  );
};

export default IOIcon;
