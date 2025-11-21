import { CloseIcon } from "@/components/icons";
import { useState } from "react";

const CloseButton = () => {
  const [hover, setHover] = useState(false);
  return (
    <g
      style={{ cursor: "pointer" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <CloseIcon hover={hover} />
    </g>
  );
};

export default CloseButton;
