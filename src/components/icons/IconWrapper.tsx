import { useStackChild } from "@/components/Stack/hooks";
import { IconProps } from "./types";

const IconWrapper = ({ children, scale = 1 }: IconProps) => {
  const { ref } = useStackChild();
  return (
    <g ref={ref} transform={`scale(${scale})`}>
      {children}
    </g>
  );
};

export default IconWrapper;
