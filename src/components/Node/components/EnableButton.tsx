import { EnabledIcon } from "@/components/icons";
import { useNodeContext } from "../hooks/useNodeContext";

const EnableButton = () => {
  const { enabled, setEnabled } = useNodeContext();

  const handleClick = () => {
    setEnabled(!enabled);
  };

  return (
    <g onClick={handleClick} style={{ cursor: "pointer" }}>
      <EnabledIcon enabled={enabled} />
    </g>
  );
};

export default EnableButton;
