import { NodeType } from "@/types";
import { NodeProvider } from "@/components/Node/context/NodeContext";
import NodeContents from "@/components/Node/NodeContents";

interface NodeProps {
  initialState: NodeType;
}

const Node = ({ initialState }: NodeProps) => {
  // Setup leva here
  const nodeHeight = 116;
  const nodeWidth = 345;

  return (
    <NodeProvider nodeDimensions={{ width: nodeWidth, height: nodeHeight }}>
      <NodeContents data={initialState} />
    </NodeProvider>
  );
};

export default Node;
