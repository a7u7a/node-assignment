import { NodeType } from "@/types";
import { useNodeContext } from "@/components/Node/hooks/useNodeContext";
import NodeText from "@/components/Node/components/NodeText";
import Stack from "@/components/Stack";
import DebugRect from "@/components/Node/components/DebugRect";
import SettingsBadges from "@/components/Node/components/SettingsBadges";
import styles from "@/components/Node/Node.module.css";
import IO from "@/components/Node/components/IO";
import EnableButton from "@/components/Node/components/EnableButton";
import ExecuteButton from "@/components/Node/components/ExecuteButton";
import NodeRect from "@/components/Node/components/NodeRect";
import ErrorRect from "@/components/Node/components/ErrorRect";
import WarningRect from "@/components/Node/components/WarningRect";
import EditsBadge from "@/components/Node/components/EditsBadge";

interface NodeContainerProps {
  data: NodeType;
}

const NodeContents = ({ data }: NodeContainerProps) => {
  const { title, subtitle } = data;
  const { selected, setSelected, nodePositions } = useNodeContext();

  const { rightEdge, topEdge, leftEdge, bottomEdge } = nodePositions;

  const nodeClass = `${styles.node}}`;
  console.log("selected", selected);
  return (
    <g
      className={nodeClass}
      data-node="true"
      onMouseDown={() => setSelected(true)}
      onClick={() => setSelected(!selected)}
    >
      <IO />
      <WarningRect />
      <ErrorRect />
      <NodeRect />

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
