import { useNodeContext } from "../context/useNodeContext";
import styles from "../Node.module.css";
import { NODE_RADIUS } from "@/lib/constants";

const NodeRect = () => {
  const { selected, setSelected, nodeDimensions, nodePositions, hovered, setHovered } =
    useNodeContext();
  const { width, height } = nodeDimensions;
  const { rectX, rectY } = nodePositions;
  
  return (
    <>
      <rect
        className={styles.nodeRectOutline}
        style={{ strokeOpacity: hovered ? 1 : 0 }}
        x={rectX}
        y={rectY}
        width={width}
        height={height}
        rx={NODE_RADIUS}
      />

      <rect
        onMouseDown={() => setSelected(true)}
        onClick={() => setSelected(!selected)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={styles.nodeRect}
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
