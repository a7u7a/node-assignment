import { useStackChild } from "@/components/Stack/hooks";
import { ReactNode } from "react";

interface IconProps {
  children: ReactNode;
}

const Icon = ({ children }: IconProps) => {
  const { ref } = useStackChild();
  return <g ref={ref}>{children}</g>;
};

export default Icon;
