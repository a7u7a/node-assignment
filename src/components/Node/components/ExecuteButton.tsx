import { useEffect } from "react";
import { PlayIcon } from "@/components/icons";
import { useNodeContext } from "@/components/Node/hooks/useNodeContext";
import { useControls } from "leva";

const ExecuteButton = () => {
  const { loading, setLoading, setResult, result } = useNodeContext();

  const { errorOnExecution } = useControls("Node Settings", {
    errorOnExecution: { value: false ,label: "Error on Execution"},
  });

  const handleClick = () => {
    setLoading(true);
    setResult("");

    setTimeout(() => {
      if (errorOnExecution) {
        setResult("error");
      } else {
        setResult("success");
      }
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    console.log("loading", loading);
  }, [loading]);

  useEffect(() => {
    console.log("result", result);
  }, [result]);

  return (
    <g
      onClick={handleClick}
      style={{ cursor: loading ? "not-allowed" : "pointer" }}
    >
      <PlayIcon />
    </g>
  );
};

export default ExecuteButton;
