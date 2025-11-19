import { Node as NodeType } from "../../types";
import { NodeProvider } from "./context/NodeContext";
import NodeContainer from "./NodeContainer";

interface NodeWrapperProps {
  data: NodeType;
  x?: number;
  y?: number;
}

const Node = ({ data, x, y }: NodeWrapperProps) => {
  const nodeHeight = 116;
  const nodeWidth = 345;

  return (
    <NodeProvider nodeDimensions={{ width: nodeWidth, height: nodeHeight }}>
      <NodeContainer data={data} x={x} y={y} />
    </NodeProvider>
  );
};

export default Node;
