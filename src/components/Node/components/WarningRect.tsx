import { motion } from "framer-motion";
import styles from "../Node.module.css";
import { useNodeContext } from "../hooks/useNodeContext";
import { NODE_RADIUS, OPEN_OFFSET } from "@/constants";
import { useControls } from "leva";

const WarningRect = () => {
  const { nodeDimensions, nodePositions, result } = useNodeContext();
  const { width, height } = nodeDimensions;
  const { rectX, rectY } = nodePositions;

  const { showWarning } = useControls(
    "Node State",
    {
      showWarning: { value: false, label: "Warning" },
    },
    { collapsed: false }
  );

  const isError = result === "error";
  const offset = isError ? OPEN_OFFSET * 2 : OPEN_OFFSET;

  return (
    <motion.rect
      className={styles.warningRect}
      x={rectX}
      y={rectY}
      width={width}
      rx={NODE_RADIUS}
      initial={{ height: height }}
      animate={{
        height: showWarning ? height + offset : height,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    />
  );
};

export default WarningRect;
