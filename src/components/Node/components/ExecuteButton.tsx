import { useState } from "react";
import { PlayIcon } from "@/components/icons";
import { useNodeContext } from "@/components/Node/context/useNodeContext";
import { useControls } from "leva";

const ExecuteButton = () => {
  const { loading, setLoading, setResult, enabled } = useNodeContext();
  const [hover, setHover] = useState(false);

  const { errorOnExecution } = useControls("Node State", {
    errorOnExecution: {
      value: false,
      label: "Error on execution",
    },
  });

  const handleClick = () => {
    if (!enabled) return;

    setLoading(true);
    setResult("");

    setTimeout(
      () => {
        if (errorOnExecution) {
          setResult("error");
        } else {
          setResult("success");
        }
        setLoading(false);
      },
      errorOnExecution ? 1000 : 2000
    );
  };

  return (
    <g
      onClick={handleClick}
      style={{ cursor: loading || !enabled ? "not-allowed" : "pointer" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <PlayIcon loading={loading} hover={hover} />
    </g>
  );
};

export default ExecuteButton;
