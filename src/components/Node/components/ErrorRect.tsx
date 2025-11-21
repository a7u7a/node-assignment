import { motion } from "framer-motion";
import styles from "../Node.module.css";
import { useNodeContext } from "../hooks/useNodeContext";
import { NODE_RADIUS, OPEN_OFFSET } from "@/constants";

const ErrorRect = () => {
  const { nodeDimensions, nodePositions, result } = useNodeContext();
  const { width, height } = nodeDimensions;
  const { rectX, rectY } = nodePositions;

  const isError = result === "error";

  return (
    <motion.rect
      className={styles.errorRect}
      x={rectX}
      y={rectY}
      width={width}
      rx={NODE_RADIUS}
      initial={{ height: height }}
      animate={{
        height: isError ? height + OPEN_OFFSET : height,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    />
  );
};

export default ErrorRect;
