import { NodeType } from "@/types";
import { useNodeContext } from "@/components/Node/hooks/useNodeContext";
import { PlayIcon, EnabledIcon } from "@/components/icons";
import NodeText from "@/components/Node/components/NodeText";
import Stack from "@/components/Stack";
import styles from "@/components/Node/Node.module.css";

interface NodeContainerProps {
  data: NodeType;
}

const nodeRadius = 14;

const NodeContents = ({ data }: NodeContainerProps) => {
  const { title, subtitle } = data;
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
      transform={`translate(0, 0)`}
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
      <Stack stackingDirection="down" anchorPos={{ x: leftEdge, y: topEdge }}>
        <NodeText title={title} />
        <NodeText title={subtitle} />
      </Stack>
      <Stack
        stackingDirection="left"
        align="right-top"
        anchorPos={{ x: rightEdge, y: topEdge }}
      >
        <PlayIcon />
        <EnabledIcon />
      </Stack>
    </g>
  );
};

export default NodeContents;
