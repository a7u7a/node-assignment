import { NodeType } from "@/types";
import { useNodeContext } from "@/components/Node/hooks/useNodeContext";
import {
  PlayIcon,
  EnabledIcon,
  ExecuteOnceIcon,
  IssueIcon,
  DeleteIcon,
  AlwaysOutputIcon,
  RetryIcon,
} from "@/components/icons";
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
  const { rectX, rectY, rightEdge, topEdge, leftEdge, bottomEdge } =
    nodePositions;
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

      {/* Top left */}
      <Stack stackingDirection="down" anchorPos={{ x: leftEdge, y: topEdge }}>
        <NodeText alignmentBaseline="hanging" title={title} />
        <NodeText alignmentBaseline="hanging" title={subtitle} />
      </Stack>

      {/* Top right */}
      <Stack stackingDirection="left" anchorPos={{ x: rightEdge, y: topEdge }}>
        <EnabledIcon />
        <PlayIcon />
        <IssueIcon />
      </Stack>

      {/* Bottom left */}
      <Stack
        stackingDirection="right"
        offsetY="bottom"
        anchorPos={{ x: leftEdge, y: bottomEdge }}
      >
        <RetryIcon />
        <ExecuteOnceIcon />
        <AlwaysOutputIcon />
      </Stack>

      {/* Bottom right */}
      <Stack
        stackingDirection="left"
        offsetY="bottom"
        anchorPos={{ x: rightEdge, y: bottomEdge }}
      >
        <DeleteIcon />
      </Stack>

      {/* Debug */}
      <rect
        pointerEvents="none"
        x={leftEdge}
        y={topEdge}
        width={rightEdge - leftEdge}
        height={bottomEdge - topEdge}
        stroke="red"
        fill="transparent"
        strokeWidth="0.2"
      />
    </g>
  );
};

export default NodeContents;
