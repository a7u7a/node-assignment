import { NodeType } from "@/types";
import { useNodeContext } from "@/components/Node/hooks/useNodeContext";
import {
  PlayIcon,
  EnabledIcon,
  ExecuteOnceIcon,
  DeleteIcon,
  AlwaysOutputIcon,
  RetryIcon,
  IOIcon,
} from "@/components/icons";
import NodeText from "@/components/Node/components/NodeText";
import Stack from "@/components/Stack";
import styles from "@/components/Node/Node.module.css";
import {
  NodeDimensions,
  NodePositions,
} from "@/components/Node/context/context";
interface NodeContainerProps {
  data: NodeType;
}

const NODE_RADIUS = 14;

const IO_PADDING_X = 10;
const IO_PADDING_TOP = 20;

const NodeContents = ({ data }: NodeContainerProps) => {
  const { title, subtitle } = data;
  const { selected, setSelected, nodeDimensions, nodePositions } =
    useNodeContext();

  const { rightEdge, topEdge, leftEdge, bottomEdge, rectY } = nodePositions;

  const nodeClass = `${styles.node}}`;

  const IOTopEdge = rectY + IO_PADDING_TOP;
  const IOLeftEdge = leftEdge - IO_PADDING_X;
  const IORightEdge = rightEdge + IO_PADDING_X;

  return (
    <g
      transform={`translate(0, 0)`}
      className={nodeClass}
      onMouseDown={() => setSelected(true)}
      onClick={() => setSelected(!selected)}
    >
      <NodeRect nodeDimensions={nodeDimensions} nodePositions={nodePositions} />
      {/* Top left */}
      <Stack stackingDirection="down" anchorPos={{ x: leftEdge, y: topEdge }}>
        <NodeText
          alignmentBaseline="hanging"
          title={title}
          className={styles.h1}
        />
        <NodeText
          alignmentBaseline="hanging"
          title={subtitle}
          className={styles.codeText}
        />
      </Stack>

      {/* Top right */}
      <Stack stackingDirection="left" anchorPos={{ x: rightEdge, y: topEdge }}>
        <EnabledIcon />
        <PlayIcon />
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

      {/* Inputs */}
      <Stack
        stackingDirection="down"
        offsetX="right"
        anchorPos={{ x: IOLeftEdge, y: IOTopEdge }}
      >
        <IOIcon />
      </Stack>

      {/* Outputs */}
      <Stack
        stackingDirection="down"
        anchorPos={{ x: IORightEdge, y: IOTopEdge }}
      >
        <IOIcon />
      </Stack>

      {/* Debug */}
      <DebugRect
        x={leftEdge}
        y={topEdge}
        width={rightEdge - leftEdge}
        height={bottomEdge - topEdge}
        color="red"
      />

      <DebugRect
        x={IOLeftEdge}
        y={IOTopEdge}
        width={IORightEdge - IOLeftEdge}
        height={bottomEdge - IOTopEdge}
        color="green"
      />
    </g>
  );
};

export default NodeContents;

const NodeRect = ({
  nodeDimensions,
  nodePositions,
}: {
  nodeDimensions: NodeDimensions;
  nodePositions: NodePositions;
}) => {
  const { width, height } = nodeDimensions;
  const { rectX, rectY } = nodePositions;
  return (
    <rect
      className={styles.nodeRect}
      x={rectX}
      y={rectY}
      width={width}
      height={height}
      rx={NODE_RADIUS}
    />
  );
};

const DebugRect = ({
  x,
  y,
  width,
  height,
  color,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}) => {
  return (
    <rect
      pointerEvents="none"
      x={x}
      y={y}
      width={width}
      height={height}
      stroke={color}
      fill="transparent"
      strokeWidth="0.2"
    />
  );
};
