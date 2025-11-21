import { NodeType } from "@/types";
import { NodeProvider } from "@/components/Node/context/NodeProvider";
import NodeContents from "@/components/Node/NodeContents";
import { useControls } from "leva";

interface NodeProps {
  initialState: NodeType;
}

const Node = ({ initialState }: NodeProps) => {
  const { width, height } = useControls("Node Dimensions", {
    width: { value: 340, min: 250, max: 600, step: 1, label: "Width" },
    height: { value: 120, min: 90, max: 300, step: 1, label: "Height" },
  });

  return (
    <NodeProvider nodeDimensions={{ width, height }}>
      <NodeContents data={initialState} />
    </NodeProvider>
  );
};

export default Node;
