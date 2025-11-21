import { useNodeContext } from "../hooks/useNodeContext";
import styles from "../Node.module.css";
import { NODE_RADIUS } from "@/constants";

const NodeRect = () => {
  const { nodeDimensions, nodePositions } = useNodeContext();
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

export default NodeRect;
