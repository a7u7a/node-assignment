import { NodeType } from "@/types";
import { NodeProvider } from "@/components/Node/context/NodeProvider";
import NodeContents from "@/components/Node/NodeContents";
import { useControls } from "leva";

interface NodeProps {
  initialState: NodeType;
}

const Node = ({ initialState }: NodeProps) => {
  const { width, height } = useControls("Dimensions", {
    width: { value: 345, min: 300, max: 600, step: 1 },
    height: { value: 116, min: 80, max: 300, step: 1 },
  });

  return (
    <NodeProvider nodeDimensions={{ width, height }}>
      <NodeContents data={initialState} />
    </NodeProvider>
  );
};

export default Node;
