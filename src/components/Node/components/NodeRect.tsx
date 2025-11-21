import { useNodeContext } from "../context/useNodeContext";
import styles from "../Node.module.css";
import { NODE_RADIUS } from "@/lib/constants";

const NodeRect = () => {
  const {
    result,
    enabled,
    selected,
    setSelected,
    nodeDimensions,
    nodePositions,
    hovered,
    setHovered,
    loading,
  } = useNodeContext();
  const { width, height } = nodeDimensions;
  const { rectX, rectY } = nodePositions;
  const isSuccess = result === "success";

  const getNodeStyle = () => {
    if (!enabled) {
      return {
        fill: "var(--node-color-disabled)",
        stroke: "var(--node-color-disabled-border)",
      };
    }

    if (loading) {
      return {
        stroke: "var(--node-color-loading-border)",
      };
    }

    if (isSuccess) {
      return {
        fill: "var(--node-color-success)",
        stroke: "var(--node-color-success-border)",
      };
    }

    if (selected) {
      return {
        fill: "var(--node-color-selected)",
        stroke: "var(--node-color-selected-border)",
      };
    }

    return {
      fill: "var(--node-color-idle)",
      stroke: "var(--node-color-idle-border)",
    };
  };

  const nodeClassName = loading
    ? `${styles.nodeRect} ${styles.nodeRectLoading}`
    : styles.nodeRect;

  return (
    <>
      <rect
        className={styles.nodeRectOutline}
        style={{
          fill:"none",
          stroke: getNodeStyle().stroke,
          strokeOpacity: hovered ? 1 : 0,
          strokeWidth: 3,
        }}
        x={rectX}
        y={rectY}
        width={width}
        height={height}
        rx={NODE_RADIUS}
        pointerEvents="none"
      />

      <rect
        onClick={() => setSelected(!selected)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={nodeClassName}
        style={getNodeStyle()}
        x={rectX}
        y={rectY}
        width={width}
        height={height}
        rx={NODE_RADIUS}
      />
    </>
  );
};

export default NodeRect;
