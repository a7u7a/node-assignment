import { NodeType } from "@/types";
import { useNodeContext } from "@/components/Node/context/useNodeContext";
import NodeText from "@/components/Node/components/NodeText";
import Stack from "@/components/Stack";
import DebugRect from "@/components/Node/components/DebugRect";
import SettingsBadges from "@/components/Node/components/SettingsBadges";
import styles from "@/components/Node/Node.module.css";
import IO from "@/components/Node/components/IO";
import NodeRect from "@/components/Node/components/NodeRect";
import ErrorRect from "@/components/Node/components/ErrorDrawer";
import WarningRect from "@/components/Node/components/WarningDrawer";
import EditsBadge from "@/components/Node/components/EditsBadge";
import NodeControls from "@/components/Node/components/NodeControls";

interface NodeContainerProps {
  data: NodeType;
}

const NodeContents = ({ data }: NodeContainerProps) => {
  const { title, subtitle } = data;
  const { nodePositions } = useNodeContext();
  const { rightEdge, topEdge, leftEdge, bottomEdge } = nodePositions;

  return (
    <g data-node="true" className={styles.node}>
      <IO />
      <WarningRect />
      <ErrorRect />
      <NodeRect />

      {/* Top left */}
      <Stack stackingDirection="down" anchorPos={{ x: leftEdge, y: topEdge }}>
        <NodeText
          alignmentBaseline="hanging"
          text={title}
          className={styles.h1}
        />
        <NodeText
          alignmentBaseline="hanging"
          text={subtitle}
          className={styles.p}
        />
      </Stack>

      {/* Top right */}
      <NodeControls />

      {/* Bottom left */}
      <SettingsBadges />

      {/* Bottom right */}
      <EditsBadge />

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
