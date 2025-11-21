import { NodeType } from "@/types";
import { useNodeContext } from "@/components/Node/hooks/useNodeContext";
import { DeleteIcon } from "@/components/icons";
import NodeText from "@/components/Node/components/NodeText";
import Stack from "@/components/Stack";
import DebugRect from "@/components/Node/components/DebugRect";
import {
  NodeDimensions,
  NodePositions,
} from "@/components/Node/context/NodeContext";
import SettingsBadges from "@/components/Node/components/SettingsBadges";
import styles from "@/components/Node/Node.module.css";
import IO from "@/components/Node/components/IO";
import EnableButton from "@/components/Node/components/EnableButton";
import ExecuteButton from "@/components/Node/components/ExecuteButton";

interface NodeContainerProps {
  data: NodeType;
}

const NODE_RADIUS = 14;

const NodeContents = ({ data }: NodeContainerProps) => {
  const { title, subtitle } = data;
  const { selected, setSelected, nodeDimensions, nodePositions } =
    useNodeContext();

  const { rightEdge, topEdge, leftEdge, bottomEdge } = nodePositions;

  const nodeClass = `${styles.node}}`;

  return (
    <g
      transform={`translate(0, 0)`}
      className={nodeClass}
      data-node="true"
      onMouseDown={() => setSelected(true)}
      onClick={() => setSelected(!selected)}
    >
      <IO />
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
        <EnableButton />
        <ExecuteButton />
      </Stack>

      {/* Bottom left */}
      <SettingsBadges />

      {/* Bottom right */}
      <Stack
        stackingDirection="left"
        offsetY="bottom"
        anchorPos={{ x: rightEdge, y: bottomEdge }}
      >
        <DeleteIcon />
      </Stack>

      {/* Debug */}
      <DebugRect
        x={leftEdge}
        y={topEdge}
        width={rightEdge - leftEdge}
        height={bottomEdge - topEdge}
        color="red"
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
