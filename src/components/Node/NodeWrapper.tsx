import { Node as NodeType } from "../../types";
import { NodeProvider } from "./context/NodeContext";
import NodeContainer from "./Node";

interface NodeWrapperProps {
  data: NodeType;
  x?: number;
  y?: number;
}

const NodeWrapper = ({ data, x, y }: NodeWrapperProps) => {
  return (
    <NodeProvider>
      <NodeContainer data={data} x={x} y={y} />
    </NodeProvider>
  );
};

export default NodeWrapper;

