import IconWrapper from "./IconWrapper";
import { DEFAULT_ICON_HEIGHT } from "../../lib/constants";
import { IconProps } from "./types";

interface IOIconProps extends IconProps {
  hover: boolean;
  selected: boolean;
  type: "input" | "output";
}

const IOIcon = ({
  height = DEFAULT_ICON_HEIGHT,
  hover,
  selected,
  type,
}: IOIconProps) => {
  return (
    <IconWrapper viewBox="0 0 20 20" height={height}>
      <IOPath hover={hover} selected={selected} type={type} />
    </IconWrapper>
  );
};

const IOPath = ({
  hover,
  selected,
}: // type,
{
  hover: boolean;
  selected: boolean;
  type: "input" | "output";
}) => {
  return (
    <g>
      {/* Outline */}
      <circle
        cx="10.0426"
        cy="10.0785"
        r="8.53081"
        fill="none"
        stroke="var(--node-color-idle-border)"
        strokeWidth="3"
        style={{
          strokeOpacity: hover ? 1 : 0,
          transition:
            "stroke-opacity var(--node-transition-duration) var(--node-transition-timing)",
          pointerEvents: "none",
        }}
      />

      {/* Filled circle */}
      <circle
        cx="10.0426"
        cy="10.0785"
        r="8.53081"
        fill="var(--canvas-background-color)"
      />

      <circle
        cx="10.0426"
        cy="10.0784"
        r="7.09648"
        fill="black"
        style={{
          opacity: selected ? 1 : 0,
          transition:
            "opacity var(--node-transition-duration) var(--node-transition-timing)",
        }}
      />

      {/* Black circle */}
      <path
        d="M15.7732 15.8152C18.9381 12.6503 18.9381 7.51892 15.7732 4.35401C12.6083 1.1891 7.47693 1.1891 4.31202 4.35401C1.14711 7.51892 1.14711 12.6503 4.31202 15.8152C7.47693 18.9801 12.6083 18.9801 15.7732 15.8152ZM16.3764 16.4184C12.8783 19.9165 7.20686 19.9165 3.7088 16.4184C0.210741 12.9203 0.210741 7.24885 3.7088 3.75079C7.20686 0.252731 12.8783 0.252731 16.3764 3.75079C19.8745 7.24885 19.8745 12.9203 16.3764 16.4184Z"
        fill="black"
      />

      {/* + sign*/}
      <path
        d="M13.2069 9.61829C13.4424 9.61838 13.633 9.80884 13.633 10.0444C13.633 10.2799 13.4424 10.4703 13.2069 10.4704L10.4966 10.4697V13.2153C10.4963 13.4505 10.3057 13.641 10.0705 13.6413C9.83493 13.6413 9.64376 13.4502 9.64374 13.2146L9.64305 10.4697L6.90785 10.4704C6.67237 10.4703 6.48179 10.2799 6.48179 10.0444C6.48181 9.80886 6.67238 9.6184 6.90785 9.61829L9.64305 9.6176V6.91623C9.64305 6.68071 9.8343 6.48957 10.0698 6.48948C10.3054 6.48948 10.4966 6.68066 10.4966 6.91623V9.6176L13.2069 9.61829Z"
        fill="black"
        style={{
          opacity: hover && !selected ? 1 : 0,
          transition:
            "opacity var(--node-transition-duration) var(--node-transition-timing)",
        }}
      />

      {/* x sign */}
      <path
        d="M12.6669 6.84082C12.8334 6.6743 13.1029 6.67427 13.2694 6.84082C13.4359 7.00738 13.4359 7.27681 13.2694 7.44336L10.6698 10.042L13.3007 12.6719C13.4672 12.8384 13.4671 13.1088 13.3007 13.2754C13.1341 13.442 12.8637 13.442 12.6971 13.2754L10.0673 10.6455L7.44421 13.2695C7.27767 13.4361 7.00728 13.436 6.8407 13.2695C6.67412 13.103 6.67412 12.8326 6.8407 12.666L9.46375 10.042L6.87195 7.4502C6.70537 7.28362 6.70537 7.01325 6.87195 6.84668C7.03852 6.68026 7.30796 6.68019 7.47449 6.84668L10.0673 9.43945L12.6669 6.84082Z"
        fill="white"
        style={{
          opacity: hover && selected ? 1 : 0,
          transition:
            "opacity var(--node-transition-duration) var(--node-transition-timing)",
        }}
      />
    </g>
  );
};

export default IOIcon;
