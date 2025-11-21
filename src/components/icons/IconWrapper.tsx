import { useStackChild } from "@/components/Stack/hooks";
import { IconWrapperProps } from "./types";
import { DEFAULT_ICON_HEIGHT } from "../../constants";

const IconWrapper = ({
  children,
  viewBox,
  height = DEFAULT_ICON_HEIGHT,
}: IconWrapperProps) => {
  const { ref } = useStackChild();

  // base viewBox aspect ratio on height
  const [, , viewBoxWidth, viewBoxHeight] = viewBox.split(" ").map(Number);
  const aspectRatio = viewBoxWidth / viewBoxHeight;
  const width = height * aspectRatio;

  return (
    <svg
      ref={ref}
      viewBox={viewBox}
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

export default IconWrapper;
