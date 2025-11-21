import { motion } from "framer-motion";
import NodeText from "@/components/Node/components/NodeText";
import Stack from "@/components/Stack";
import { useNodeContext } from "../hooks/useNodeContext";
import { DRAWER_TRANSITION, NODE_RADIUS, OPEN_OFFSET } from "@/constants";
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
      <Stack
        stackingDirection="right"
        offsetY="bottom"
        anchorPos={{
          x: leftEdge,
          y: showWarning ? bottomEdge + offset : bottomEdge,
        }}
      >
        <WarningIcon />
        <NodeText
          alignmentBaseline="hanging"
          text={"Warning"}
          className={styles.codeText}
        />
      </Stack>
    </g>
  );
};

export default WarningRect;
