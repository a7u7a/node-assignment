import { EnabledIcon } from "@/components/icons";
import { useNodeContext } from "../context/useNodeContext";
import { useState } from "react";

const EnableButton = () => {
  const { enabled, setEnabled } = useNodeContext();
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    setEnabled(!enabled);
  };

  return (
    <g
      onClick={handleClick}
      style={{ cursor: "pointer" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <EnabledIcon enabled={enabled} hover={hover} />
    </g>
  );
};

export default EnableButton;
