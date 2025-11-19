import { Node as NodeType } from "../../types";
import { useNodeContext } from "./hooks/useNodeContext";
import { PlayIcon, EnabledIcon } from "../icons";
import NodeTitle from "./components/NodeTitle";
import Stack from "../Stack";
import styles from "./Node.module.css";

interface NodeProps {
  data: NodeType;
  x?: number;
  y?: number;
}

const nodeRadius = 14;

const NodeContainer = ({ data, x = 0, y = 0 }: NodeProps) => {
  const { title } = data;
  const {
    hovered,
    setHovered,
    selected,
    setSelected,
    nodeDimensions,
    nodePositions,
  } = useNodeContext();
  const { width, height } = nodeDimensions;
  const { rectX, rectY, rightEdge, topEdge, leftEdge } = nodePositions;
  const nodeClass = `${styles.node} ${hovered ? styles.nodeHovered : ""}}`;

  return (
    <g
      transform={`translate(${x}, ${y})`}
      className={nodeClass}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseDown={() => setSelected(true)}
      onClick={() => setSelected(!selected)}
    >
      <rect
        className={styles.nodeRect}
        x={rectX}
        y={rectY}
        width={width}
        height={height}
        rx={nodeRadius}
      />
      {/* <Stack anchorPos={{ x: leftEdge, y: topEdge }}>
        <NodeTitle title={title} />
        <text className={styles.codeText} x={0} y={0} textAnchor="start">
          Subtitle
        </text>
      </Stack> */}
      <Stack anchorPos={{ x: rightEdge, y: topEdge }}>
        <PlayIcon />
        <EnabledIcon />
      </Stack>
    </g>
  );
};

export default NodeContainer;
