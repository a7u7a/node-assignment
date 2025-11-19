import { NodeType } from "@/types";
import { NodeProvider } from "@/components/Node/context/NodeContext";
import NodeContainer from "@/components/Node/NodeContainer";

interface NodeProps {
  initialState: NodeType;
}

const Node = ({ initialState }: NodeProps) => {
  // Setup leva here
  const nodeHeight = 116;
  const nodeWidth = 345;

  return (
    <NodeProvider nodeDimensions={{ width: nodeWidth, height: nodeHeight }}>
      <NodeContainer data={initialState} />
    </NodeProvider>
  );
};

export default Node;
