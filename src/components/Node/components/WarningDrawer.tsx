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
import { useControls } from "leva";
import styles from "../Node.module.css";
import WarningIcon from "@/components/icons/WarningIcon";

const WarningRect = () => {
  const { nodeDimensions, nodePositions, result } = useNodeContext();
  const { width, height } = nodeDimensions;
  const { rectX, rectY, leftEdge, bottomEdge } = nodePositions;

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
    <g>
      {/* Animate the rect */}
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
        transition={DRAWER_TRANSITION}
      />
      {/* Animate the contents */}
      <motion.g
        initial={{ y: 0 }}
        animate={{
          y: showWarning ? offset : 0,
        }}
        transition={DRAWER_TRANSITION}
      >
        <Stack
          stackingDirection="right"
          offsetY="bottom"
          anchorPos={{
            x: leftEdge,
            y: bottomEdge,
          }}
        >
          <WarningIcon />
          <g transform={`translate(0, ${DRAWER_TEXT_OFFSET_Y})`}>
            <NodeText
              alignmentBaseline="hanging"
              text={"Warning"}
              className={styles.warningText}
            />
          </g>
        </Stack>
      </motion.g>
    </g>
  );
};

export default WarningRect;
