import { motion } from "framer-motion";
import NodeText from "@/components/Node/components/NodeText";
import Stack from "@/components/Stack";
import { useNodeContext } from "../hooks/useNodeContext";
import {
  DRAWER_TRANSITION,
  NODE_RADIUS,
  OPEN_OFFSET,
  DRAWER_TEXT_OFFSET_Y,
} from "@/constants";
import ErrorIcon from "@/components/icons/ErrorIcon";
import styles from "../Node.module.css";

const ErrorRect = () => {
  const { nodeDimensions, nodePositions, result } = useNodeContext();
  const { width, height } = nodeDimensions;
  const { rectX, rectY, leftEdge, bottomEdge } = nodePositions;
  const isError = result === "error";

  return (
    <g>
      {/* Animate the rect */}
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
        transition={isError ? DRAWER_TRANSITION : { duration: 0 }}
      />

      {/* Animate the contents */}
      <motion.g
        initial={{ y: 0 }}
        animate={{
          y: isError ? OPEN_OFFSET : 0,
        }}
        transition={isError ? DRAWER_TRANSITION : { duration: 0 }}
      >
        <Stack
          stackingDirection="right"
          offsetY="bottom"
          anchorPos={{
            x: leftEdge,
            y: bottomEdge,
          }}
        >
          <ErrorIcon />
          <g transform={`translate(0, ${DRAWER_TEXT_OFFSET_Y})`}>
            <NodeText
              alignmentBaseline="hanging"
              text={"Error"}
              className={styles.errorText}
            />
          </g>
        </Stack>
      </motion.g>
    </g>
  );
};

export default ErrorRect;
