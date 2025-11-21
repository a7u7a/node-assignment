import { useNodeContext } from "@/components/Node/hooks/useNodeContext";
import Stack from "@/components/Stack";
import EnableButton from "./EnableButton";
import ExecuteButton from "./ExecuteButton";

const NodeControls = () => {
  const { nodePositions } = useNodeContext();
  const { rightEdge, topEdge } = nodePositions;

  return (
    <Stack stackingDirection="left" anchorPos={{ x: rightEdge, y: topEdge }}>
      <EnableButton />
      <ExecuteButton />
    </Stack>
  );
};

export default NodeControls;
