import { NodeType } from "@/types";
import { NodeProvider } from "@/components/Node/context/NodeProvider";
import NodeContents from "@/components/Node/NodeContents";
import { useControls } from "leva";

interface NodeProps {
  initialState: NodeType;
}

const Node = ({ initialState }: NodeProps) => {
  const { nodeWidth, nodeHeight } = useControls({
    nodeWidth: { value: 345, min: 300, max: 600, step: 1 },
    nodeHeight: { value: 116, min: 80, max: 300, step: 1 },
  });

  return (
    <NodeProvider nodeDimensions={{ width: nodeWidth, height: nodeHeight }}>
      <NodeContents data={initialState} />
    </NodeProvider>
  );
};

export default Node;
