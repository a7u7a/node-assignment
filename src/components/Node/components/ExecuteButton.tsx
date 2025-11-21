import { PlayIcon } from "@/components/icons";
import { useNodeContext } from "@/components/Node/hooks/useNodeContext";
import { useControls } from "leva";

const ExecuteButton = () => {
  const { loading, setLoading, setResult } = useNodeContext();

  const { errorOnExecution } = useControls("Node State", {
    errorOnExecution: {
      value: false,
      label: "Error on execution",
    },
  });

  const handleClick = () => {
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
      style={{ cursor: loading ? "not-allowed" : "pointer" }}
    >
      <PlayIcon loading={loading} />
    </g>
  );
};

export default ExecuteButton;
