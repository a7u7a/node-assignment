import { IOIcon } from "@/components/icons";
import { useState } from "react";

interface IOButtonProps {
  type: "input" | "output";
}

const IOButton = ({ type }: IOButtonProps) => {
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <g
      onClick={handleClick}
      style={{ cursor: "pointer" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <IOIcon hover={hover} selected={selected} type={type} />
    </g>
  );
};

export default IOButton;
